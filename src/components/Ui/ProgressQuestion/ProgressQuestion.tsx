import React from "react";
import { Progress } from "antd";

interface ProgressProps {
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressQuestion = ({
  currentQuestion,
  totalQuestions,
}: ProgressProps) => {
  return (
    <>
      <Progress
        percent={((currentQuestion + 1) / totalQuestions) * 100}
        format={() => `${currentQuestion + 1}/${totalQuestions}`}
        size={[540, 20]}
        strokeColor="rgb(81, 126, 99)"
      />
    </>
  );
};

export default ProgressQuestion;
