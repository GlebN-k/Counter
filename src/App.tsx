import * as React from "react";
import { useState } from "react";
import "./App.css";
import Button from "./Button/Button";
import CounterDisplay from "./CounterDisplay/CounterDisplay";
import Input from "./Input/Input";

const App = () => {
  
  const [maxValue, setMaxValue] = useState<number>(5);
  const [startValue, setStartValue] = useState<number>(0);
  const [config, setConfig] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [disabledReset, setDisabledReset] = useState<boolean>(true);
  const [disabledSet, setDisabledSet] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false)

  const incHandler = () => {
    if (counter === maxValue - 1) {
      setDisabled(true);
      setDisabledReset(false);
    }
    setCounter((counter) => counter + 1);
    setDisabledReset(false);
  };

  const resetHandler = () => {
    setCounter(startValue);
    setDisabled(false);
    setDisabledReset(true);
  };

  const setHandler = () => {
    setCounter(startValue);
    setConfig(false);
    setDisabled(false);
    setDisabledReset(false);
  };

  const maxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxValue(Number(e.currentTarget.value));
    setConfig(true);
    setDisabled(true);
    setDisabledReset(true);
  };

  
  const startValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartValue(Number(e.currentTarget.value));
    setConfig(true);
    setDisabled(true);
    setDisabledReset(true);
    if (e.currentTarget.value < 0) {
      setError(true);
  } else {
      setError(false)
  }
  };

  return (
    <div className="wrapper">
      <div className="container">
        {/* <div className={counter === 5 ? 'counter-red' : 'counter'}>{counter}</div> */}
        <div className={"inputs-container"}>
          <Input text="max value" value={maxValue} callBack={maxValueHandler} />
          <Input text="start value" value={startValue} callBack={startValueHandler} />
        </div>

        <div className="buttons-wrapper">
          <Button text="set" callBack={setHandler} disabled={disabledSet} />
        </div>
      </div>

      <div className="container">
        <CounterDisplay counter={counter} maxValue={maxValue} configText={config} />

        <div className="buttons-wrapper">
          <Button text="inc" callBack={incHandler} disabled={disabled} />
          <Button text="reset" callBack={resetHandler} disabled={disabledReset} />
        </div>
      </div>
    </div>
  );
};
 
export default App;
