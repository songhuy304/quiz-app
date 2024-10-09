import { TExamResult, TTag } from "@/model/Question";
import React, { useEffect, useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import ExamTitle from "./examTitle";
import ListQuestion from "./listQuestion";
interface QuizScreenSuccessProps {
  examResult: TExamResult;
}

const QuizScreenSuccess = ({ examResult }: QuizScreenSuccessProps) => {

  const [indexDiv, setIndexDiv] = useState<number>(-1)

  useEffect(() => {
    if (indexDiv !== -1) {
      const element = document.getElementById(String(indexDiv));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });  
      }
    }
  }, [indexDiv]);

  const renderTag = (item: TTag) => {
    switch (item) {
      case "skip":
        return (
          <>
            <div className="size-3 rounded-sm bg-[#c2c2c2]"></div>
            <p>Skipped</p>
          </>
        );
      case "correct":
        return (
          <>
            <div className="size-3 rounded-sm bg-[#28a745]"></div>
            <p>Correct</p>
          </>
        );
      case "uncorrect":
        return (
          <>
            <div className="size-3 rounded-sm bg-red-600"></div>
            <p>Uncorrect</p>
          </>
        );
    }
  };

  return (
    <div className="mt-10 max-w-[720px] mx-auto">
      <ExamTitle examResult={examResult} />
      <ListQuestion examResult={examResult} setIndexDiv={setIndexDiv} />
      <div className="flex flex-col gap-4 mt-12">
        {examResult.questions.map((item, i) => {
          const correctChoice = item.options.find(
            (_, i) => i === item.correct_answer
          );
          return (
            <div
              id={`${i}`}
              key={i}
              className="px-4 py-2 rounded-xl border-2 border-custom-gray-4"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-black font-semibold">
                  <AiFillQuestionCircle />
                  <p>Question {i + 1}</p>
                </div>
                <div className="flex items-center gap-2 text-custom-gray-1 font-bold">
                  {renderTag(item.tag)}
                </div>
              </div>
              <div className="mt-4 font-bold">
                <h1>{item.content}</h1>
                <p className="text-[#28a745]">
                  <span className="text-custom-gray-1">
                    {item.correct_answer}.
                  </span>{" "}
                  {correctChoice?.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizScreenSuccess;
