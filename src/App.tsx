import * as React from 'react'
import { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [disabledReset, setDisabledReset] = useState<boolean>(true);

  const incHandler = () => {
    setCounter((counter) => counter + 1);
    setDisabledReset(false);
    if (counter >= 4) {
      setDisabled(true);
      setDisabledReset(false);
    }
  };

  const resetHandler = () => {
    setCounter(0);
    setDisabled(false);
    setDisabledReset(true);
  };

  return (
    <div>
      <div className="container">
        <div className={counter === 5 ? 'counter-red' : 'counter'}>{counter}</div>
        <div className='buttons-wrapper'>
          <button className='button' onClick={incHandler} disabled={disabled}>
            <span>inc</span>
          </button>
          <button className='button' onClick={resetHandler} disabled={disabledReset}>
            reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
