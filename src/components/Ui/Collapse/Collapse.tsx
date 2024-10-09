import React from "react";
import { Collapse as AntdCollapse } from "antd";
import CustomButton from "../CustomButton/CustomButton";
import { TQuestionStart } from "@/model/Question";
import clsx from "clsx";

const { Panel } = AntdCollapse;
interface CollapseProps {
  currentQuestion: number;
  totalQuestions: number;
  handleSelectQuestion: (index: number) => void;
  questionsSucess: TQuestionStart[];
}

const Collapse = ({
  currentQuestion,
  totalQuestions,
  handleSelectQuestion,
  questionsSucess
}: CollapseProps) => {
  return (
    <AntdCollapse bordered>
      <Panel style={{ background: "white" }} header="List Question" key="1">
        {Array.from({ length: totalQuestions }).map((_, i) => (
          <CustomButton
            onClick={() => handleSelectQuestion(i)}
            key={i}
            className={clsx(
              currentQuestion === i ? "active" : "",
              questionsSucess[i] && questionsSucess[i].user_choice !== null ? 'active' : ''
            )}
          >
            {i + 1}
          </CustomButton>
        ))}
      </Panel>
    </AntdCollapse>
  );
};

export default Collapse;
