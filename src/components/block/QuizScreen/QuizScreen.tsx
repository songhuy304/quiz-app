import { usePostExamResultMutation } from "@/Redux/examSlice/examSlice";
import { SelectUserDetail } from "@/Redux/userSlice/userSlice";
import { ButtonQuiz } from "@/components/Ui/ButtonQuiz/ButtonQuiz";
import Choice from "@/components/Ui/Choice/Choice";
import Collapse from "@/components/Ui/Collapse/Collapse";
import Loading from "@/components/Ui/Loading/Loading";
import ProgressQuestion from "@/components/Ui/ProgressQuestion/ProgressQuestion";
import Timer from "@/components/Ui/Time/Time";
import { TExam, TQuestion } from "@/model/Question";
import { Modal } from "antd";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";
import { Tag } from "antd";
interface Props {
  exam: TExam;
}

const QuizScreen = ({ exam }: Props) => {
  const [indexQuestion, setIndexQuestion] = useState<number>(0);
  const [indexMyChoice, setIndexMyChoice] = useState<number | null>(null);
  const [currentQuestion, setCurrenQuestion] = useState<TQuestion>(
    exam.questions[indexQuestion]
  );
  const [questionsSucess, setQuestionSucess] = useState<TQuestion[]>(
    exam.questions
  );
  const totalQuestions = exam.questions.length;
  const userName = useSelector(SelectUserDetail);
  const [postExamResult, { isLoading, isSuccess, isError, data, error }] =
    usePostExamResultMutation();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrenQuestion(exam.questions[indexQuestion]);
    const savedAnswer = questionsSucess[indexQuestion]?.user_choice;
    setIndexMyChoice(savedAnswer !== undefined ? savedAnswer : null);
  }, [exam.questions, indexQuestion, questionsSucess]);

  const handleNextQuestion = () => {
    const updatedQuestions = [...questionsSucess];
    updatedQuestions[indexQuestion] = {
      ...updatedQuestions[indexQuestion],
      user_choice: indexMyChoice ?? -1, // Đặt lựa chọn của người dùng hoặc -1 nếu không có
    };

    setQuestionSucess(updatedQuestions);

    if (indexQuestion < totalQuestions - 1) {
      setIndexQuestion((prev) => prev + 1);
      setIndexMyChoice(null);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    Modal.confirm({
      title: "Xác nhận",
      content: "Bạn Muốn hoàn thành bài thi",
      onOk: async () => {
        await onSubmitSuccess();
      },
      onCancel() {
        console.log("Người dùng đã hủy");
      },
    });
  };

  const onSubmitSuccess = async () => {
    const updatedQuestions = [...questionsSucess];
    const updatedQuestion = updatedQuestions.map((question) => ({
      ...question,
      user_choice: question.user_choice ?? -1,
    }));

    await postExamResult({
      title: exam.title,
      questions: updatedQuestion,
      userName: userName!.username,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(`/examsuccess/${data.data}`);
    }
    if (isError) {
      console.log(error);
    }
  }, [isSuccess, isError, error]);

  const handleSelectQuestion = (i: number) => {
    setIndexQuestion(i);
    const savedAnswer = questionsSucess[i]?.user_choice;
    setIndexMyChoice(savedAnswer !== undefined ? savedAnswer : null);
  };

  const hanldeSelectChoice = (i: number) => {
    setIndexMyChoice(i);
  };

  const handleExpire = () => {
    onSubmitSuccess();
  };

  const renderDifficulty = (difficult: string) => {
    switch (difficult) {
      case "easy":
        return <Tag color="success">Easy</Tag>;
      case "medium":
        return <Tag color="warning">Medium</Tag>;
      case "hard":
        return <Tag color="error">Hard</Tag>;
      default:
        return null;
    }
  };

  const handleExitExam = () => {
    Modal.confirm({
      title: "Thoát bài thi",
      content: "Bạn Muốn thoát bài thi, bài thi sẽ không được lưu lại",
      onOk: async () => {
        navigate("/");
      },
      onCancel() {
        console.log("Người dùng đã hủy");
      },
    });
  };

  return (
    <>
      <div className={clsx(style.quizScreen)}>
        <div className={style.quizHeader}>
          <ProgressQuestion
            currentQuestion={indexQuestion}
            totalQuestions={totalQuestions}
          />
          <div className={style.timeRem}>
            <Timer onExpire={handleExpire} time={exam.duration} />
          </div>
        </div>
        <div className={style.quizbody}>
          <h2 className={style.titleQ}>{currentQuestion.content}</h2>
          {renderDifficulty(currentQuestion.difficult)}
          <div className={style.quizChoice}>
            {currentQuestion.options.map((quiz, i) => (
              <Choice
                indexMyChoice={indexMyChoice}
                key={i}
                hanldeSelectChoice={hanldeSelectChoice}
                item={quiz}
                i={i}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={style.quizfooter}>
        <div className={style.quizfooterBtn}>
          <ButtonQuiz onClick={handleExitExam} outline size="lg">
            Exit exam
          </ButtonQuiz>
          <ButtonQuiz onClick={handleNextQuestion} size="lg">
            {indexQuestion === totalQuestions - 1 ? "Finished" : "Next"}
          </ButtonQuiz>
        </div>
      </div>

      <div className={style.listQuestion}></div>
      <div className={style.sidebar}>
        <div className={style.questionList}>
          <Collapse
            questionsSucess={questionsSucess}
            handleSelectQuestion={handleSelectQuestion}
            currentQuestion={indexQuestion}
            totalQuestions={totalQuestions}
          />
        </div>
      </div>
      {isLoading && <Loading />}
    </>
  );
};

export default QuizScreen;
