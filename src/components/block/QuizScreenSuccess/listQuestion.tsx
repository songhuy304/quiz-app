import { TExamResult, TTag } from "@/model/Question";
import { Progress, ProgressProps } from "antd";
import React from "react";
import { IoCheckmark, IoCloseSharp, IoRibbon } from "react-icons/io5";
interface ListQuestion {
  examResult: TExamResult;
  setIndexDiv: (index: number) => void;
}
const ListQuestion: React.FC<ListQuestion> = ({ examResult, setIndexDiv }) => {
  const percent =
    (examResult.questions_count_correct / examResult.questionsCount) * 100;
  const conicColors: ProgressProps["strokeColor"] = {
    "0%": "#ff4d4f", // Đỏ (Kém)
    "25%": "#ffec3d", // Vàng (Trung bình)
    "50%": "#87d068", // Xanh nhạt (Khá)
    "75%": "#1890ff", // Xanh đậm (Tốt)
    "100%": "#52c41a", // Xanh đậm hơn (Hoàn hảo)
  };

  const resultText = () => {
    let resultText = "";
    if (percent < 25) {
      return (resultText = "Bad"); // Dưới 25%
    } else if (percent < 50) {
      return (resultText = "Average"); // Từ 25% đến dưới 50%
    } else if (percent < 75) {
      return (resultText = "Good"); // Từ 50% đến dưới 75%
    } else if (percent < 100) {
      return (resultText = "Very Good"); // Từ 75% đến dưới 100%
    } else {
      return (resultText = "Perfect"); // 100%
    }
    return resultText;
  };
  const renderTag = (item: TTag) => {
    const tagConfig = {
      skip: {
        className: "bg-[#c2c2c2]",
        icon: <IoCloseSharp />,
      },
      correct: {
        className: "bg-[#28a745]",
        icon: <IoCheckmark />,
      },
      uncorrect: {
        className: "bg-red-600",
        icon: <IoCloseSharp />,
      },
    };

    const { className, icon } = tagConfig[item] || {};

    if (!className) return null; // Hoặc xử lý trường hợp không hợp lệ nếu cần

    return (
      <div
        className={`absolute top-0 right-0 size-5 flex items-center rounded-sm ${className} text-white p-1`}
      >
        {icon}
      </div>
    );
  };
  return (
    <div className="mt-6">
      <div className="flex gap-2 flex-wrap">
        {examResult.questions.map((item, i) => (
          <div
            key={i}
            onClick={() => setIndexDiv(i)}
            className="relative w-20 h-12 cursor-pointer hover:bg-custom-gray-4/55 flex items-center justify-center bg-custom-gray-4 text-black font-bold text-xl rounded-lg overflow-hidden"
          >
            <p>{i + 1}</p>
            {renderTag(item.tag)}
          </div>
        ))}
      </div>
      <div className="flex mt-4 justify-between">
        <div className="flex gap-8 text-sm text-custom-gray-2">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-sm bg-[#28a745]"></div>
            <p>Correct {examResult.questions_count_correct}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-sm bg-red-600"></div>
            <p>Uncorrect {examResult.questions_count_uncorrect}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-sm bg-[#c2c2c2]"></div>
            <p>Skipped {examResult.skipchoice}</p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <div>
            <p className="text-sm text-custom-gray-2 font-medium">Accuracy</p>
            <div className="flex items-center gap-1 font-bold">
              <Progress
                strokeLinecap="butt"
                type="dashboard"
                percent={percent}
                size={24}
                strokeColor={conicColors}
                showInfo={false}
              />
              {resultText()}
            </div>
          </div>
          <div>
            <p className="text-sm text-custom-gray-2 font-medium">Point</p>
            <div className="flex items-center gap-1 font-bold">
              <IoRibbon color="#ffc107" />
              {examResult.totalPoint.toFixed(0)}
            </div>
          </div>
          <div>
            <p className="text-sm text-custom-gray-2 font-medium">Answered</p>
            <span className="font-bold">
              {examResult.questions_count_correct}
            </span>
            /{examResult.questionsCount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListQuestion;
