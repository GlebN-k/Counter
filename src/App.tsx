// import * as React from "react";
import {ChangeEvent, useEffect, useState} from "react";
import "./App.css";
import Button from "./Button/Button";
import CounterDisplay from "./CounterDisplay/CounterDisplay";
import Input from "./Input/Input";

const App = () => {

    const [maxValue, setMaxValue] = useState<number>(() => {
        const initValue = localStorage.getItem('maxValue')
        if(initValue) {
            return JSON.parse(initValue)
        } else return 0
    });
    const [startValue, setStartValue] = useState<number>(() => {
        const initValue = localStorage.getItem('startValue')
        if(initValue) {
            return JSON.parse(initValue)
        } else return 0
    });
    const [counter, setCounter] = useState<number>(0);
    const [disabled, setDisabled] = useState<boolean>(true);
    const [disabledReset, setDisabledReset] = useState<boolean>(true);
    const [disabledBtnSet, setDisabledBtnSet] = useState<boolean>(false);
    const [configDisplay, setConfigDisplay] = useState<string>('enterValue')

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))

    }, [maxValue])

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue])

    const incHandler = () => {
        if (counter === maxValue - 1) {
            setDisabled(true);
            setDisabledReset(false);
        }
        setCounter(counter + 1);
        setDisabledReset(false);
    };

    const resetHandler = () => {
        setCounter(startValue);
        setDisabled(false);
        setDisabledReset(true);
    };

    const setHandler = () => {
        setCounter(startValue);
        setDisabled(false);
        setDisabledReset(false);
        setConfigDisplay('')
        setDisabledBtnSet(true)
    };

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value));
        setDisabled(true);
        setDisabledReset(true);
        setDisabledBtnSet(false)
        if (+e.currentTarget.value < 0) {
            setConfigDisplay('incorrectValue');
            setDisabledBtnSet(true)
        } else {
            setConfigDisplay('enterValue')
        }
    };

    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number(e.currentTarget.value));
        setDisabled(true);
        setDisabledReset(true);
        setDisabledBtnSet(false)

        if (+e.currentTarget.value < 0) {
            setConfigDisplay('incorrectValue');
            setDisabledBtnSet(true)
        } else {
            setConfigDisplay('enterValue')
        }
    };

    return (
        <div className="wrapper">
            <div className="container">
                {/* <div className={counter === 5 ? 'counter-red' : 'counter'}>{counter}</div> */}
                <div className={"inputs-container"}>
                    <Input text="max value" value={maxValue} callBack={maxValueHandler}/>
                    <Input text="start value" value={startValue} callBack={startValueHandler}/>
                </div>

                <div className="buttons-wrapper">
                    <Button text="set" callBack={setHandler} disabled={disabledBtnSet}/>
                </div>
            </div>

            <div className="container">
                <CounterDisplay counter={counter} maxValue={maxValue} configDisplay={configDisplay}/>

                <div className="buttons-wrapper">
                    <Button text="inc" callBack={incHandler} disabled={disabled}/>
                    <Button text="reset" callBack={resetHandler} disabled={disabledReset}/>
                </div>
            </div>
        </div>
    );
};

export default App;
