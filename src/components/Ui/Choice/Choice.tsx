import React from "react";
import style from "./style.module.scss";
import clsx from "clsx";
import { TOption } from "@/model/Question";

interface ChoiceProps {
  item: TOption;
  i: number;
  hanldeSelectChoice?: (index: number) => void;
  indexMyChoice?:number | null
  indexAnswer?:number | null
  disabled?:boolean
}

const Choice = ({ item, i, hanldeSelectChoice, indexMyChoice, indexAnswer, disabled }: ChoiceProps) => {
  return (
    <div 
      onClick={() => hanldeSelectChoice && hanldeSelectChoice(i)} 
      className={clsx(style.choice, { 
        [style.active]: indexMyChoice === i, 
        [style.disabled]: disabled,
        [style.unCorrect]: indexAnswer === i && indexMyChoice !== indexAnswer
      })}
    >
      <p>{i + 1}.</p>
      <span>{item.text}</span>
    </div>
  );
};

export default Choice;
