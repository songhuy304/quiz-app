import React from "react";
import style from "./style.module.scss";
import { useTimer } from "react-timer-hook";
interface TimeProps {
  time: string | number;
  onExpire: () => void;
}
const Timer = ({ time, onExpire }: TimeProps) => {
  const expiryTimestamp = new Date();
  expiryTimestamp.setMinutes(expiryTimestamp.getMinutes() + Number(time));

  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp,
    onExpire: onExpire,
  });

  return (
    <>
      <p className={style.title}>Time remaining</p>
      <div className={style.timer}>
        <span>
          {String(hours).padStart(2, "0")} : {String(minutes).padStart(2, "0")}{" "}
          : {String(seconds).padStart(2, "0")}
        </span>
      </div>
    </>
  );
};

export default Timer;
