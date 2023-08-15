// import React from "react";
import { useState } from "react";
import style from "./Input.module.css";

type InputTypes = {
  text: string;
  value: number;
  callBack: (e: React.ChangeEvent<HTMLInputElement>) => void;
  //   error: boolean
};

const Input: React.FC<InputTypes> = ({ text, value, callBack }) => {
  const [error, setError] = useState<boolean>(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    callBack(e);
    if (e.currentTarget.value < 0) {
        setError(true);
    } else {
        setError(false)
    }
  };

  return (
    <div className={style.inputContainer}>
      <label htmlFor={`input-${text}`}>{text}:</label>
      <input
        className={error ? "error" : ""}
        type="number"
        id={`input-${text}`}
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
};

export default Input;
