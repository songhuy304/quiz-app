import QuizScreenSuccess from "@/components/block/QuizScreenSuccess/QuizScreenSuccess";
import { useGetExamResultByIdMutation } from "@/Redux/examSlice/examSlice";
import React from "react";
import { useParams } from "react-router-dom";

const ExamSuccess = () => {
  const { examId } = useParams();
  const [getExamResultById, { data, isLoading }] =
    useGetExamResultByIdMutation();

  React.useEffect(() => {
    if (examId) {
      getExamResultById(examId);
    }
  }, [examId, getExamResultById]);

  if (isLoading) return <div>Loading...</div>;

  return data?.data ? <QuizScreenSuccess examResult={data.data} /> : null;
};

export default ExamSuccess;
