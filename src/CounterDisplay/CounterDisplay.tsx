import React from "react";

type CounterDisplayPropsType = {
    counter: number | undefined
    maxValue: number
    configText: boolean
}



const CounterDisplay: React.FC<CounterDisplayPropsType> = ({counter, maxValue, configText}) => {
    const insertDisplayContent = (configText: string) => {
        switch(configText) {
            case 'error':
                return <span className="">incorrect value!</span>
            case 'nonError':
                return <span className="">enter values and press "set"</span>
            default:
                return counter
          }
    }
    
    
  
    return (
    <div className={counter === maxValue ? "counter-red" : "counter"}>
            {insertDisplayContent(configText)}
      
      {/* config && <span className="">enter values and press "set"</span>}

      {!config && counter} */}
    </div>
  );
};

export default CounterDisplay;
