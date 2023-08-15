import React from "react";
import style from './CounterDisplay.module.css'

type CounterDisplayPropsType = {
    counter: number | undefined
    maxValue: number
    configDisplay: string
}

const CounterDisplay: React.FC<CounterDisplayPropsType> = ({counter, maxValue, configDisplay}) => {
    const insertDisplayContent = (configDisplay: string) => {
        switch (configDisplay) {
            case 'incorrectValue':
                return <span className={style.cautionValue}>incorrect value!</span>
            case 'enterValue':
                return <span className="">enter values and press "set"</span>
            default:
                return <span className={(maxValue) === counter ? style.cautionValue : style.figuresSize}>{counter}</span>
        }
    }

    return (
        <div className={style.counter}>
            {insertDisplayContent(configDisplay)}
        </div>
    );
};

export default CounterDisplay;
