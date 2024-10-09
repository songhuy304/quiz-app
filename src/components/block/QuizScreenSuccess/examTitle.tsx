import { TExamResult } from "@/model/Question";
import { formatDate } from "@/utils/common";
import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi2";

interface ExamTitle {
    examResult: TExamResult
}

const ExamTitle:React.FC<ExamTitle> = ({ examResult }) => {
  return (
    <div className="flex">
      <div>
        <h2 className="text-2xl font-bold">{examResult.title}</h2>
        <div className="flex text-custom-gray-1 font-medium gap-4 mt-2  ">
          <p>Finished {formatDate(examResult.createdAt)}</p>
          <div className="flex items-center gap-2">
            <HiOutlineUserCircle />
            <p>{examResult.userName}</p>
          </div>
          <div className="flex items-center gap-2 text-black">
            <FaRegQuestionCircle />
            <p>{examResult.questionsCount} Questions</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ExamTitle;
