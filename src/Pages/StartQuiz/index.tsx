import QuizScreen from "@/components/block/QuizScreen/QuizScreen";
import LoadingPage from "@/components/Ui/LoadingPage";
import { useGetExamByIdMutation } from "@/Redux/examSlice/examSlice";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const StartQuiz = () => {
  const { examId } = useParams();
  const [getExamById, { data }] = useGetExamByIdMutation();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  React.useEffect(() => {
    if (examId) {
      getExamById(examId);
    }
  }, [examId, getExamById]);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);


  if (isLoading) return <LoadingPage />;
  return data?.data ? <QuizScreen exam={data.data} /> : null;

};

export default StartQuiz;
