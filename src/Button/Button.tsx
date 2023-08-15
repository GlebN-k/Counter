// import React from "react";

type ButtonPropsType = {
    text:string
    disabled: boolean
    callBack: () => void
}

const Button: React.FC<ButtonPropsType> = ({text, disabled, callBack}) => {
  return (
    
    <button className="button" onClick={callBack} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
