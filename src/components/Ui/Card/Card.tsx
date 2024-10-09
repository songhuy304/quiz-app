import { TExam } from "@/model/Question";
import React from "react";
import { CiUser  ,CiStopwatch ,CiCircleQuestion } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const CardItem = ({ exam }: { exam: TExam }) => {
  const navigate = useNavigate();
  
  const startExam = (id: string) => {
    navigate(`/exams/${id}`)
  };

  return (
      <div className="max-w-[300px] w-full">
        <div className="relative flex flex-col w-full">
          <div className="relative h-44 w-full rounded-3xl overflow-hidden">
            <img
              src={exam.image}
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-2 pb-6">
            <h5 className="truncate line-clamp-2 block mb-2 font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 hover:text-blue-500 cursor-pointer">
              {exam.title}
            </h5>
            <p className="text-sm text-gray-500 mb-2 line-clamp-2">{exam.description}</p>
            <div className="flex gap-4 items-center">
              <p className="flex items-center gap-2"><CiUser />{exam.participant_count}</p>
              <p className="flex items-center gap-2"><CiStopwatch />{exam.duration}</p>
              <p className="flex items-center gap-2"><CiCircleQuestion />{exam.question_count}</p>
            </div>
          </div>
          <div className="py-6 pt-0">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
              onClick={() => startExam(exam._id)}
            >
              Start exam
            </button>
          </div>
        </div>
      </div>
  );
};

export default CardItem;
