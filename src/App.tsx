import React, {useState} from 'react';

import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {SettingsCounter} from "./Components/Counter/settingsCounter";


function App() {

    let [maxValue, setMaxValue] = useState<number>(5);
    let [minValue, setMinValue] = useState<number>(0);

    let [max, setMax] = useState<number>(maxValue);
    let [min, setMin] = useState<number>(minValue);

    let [count, setCount] = useState<number | string>(minValue);


    const hasError: boolean = minValue == maxValue || minValue < 0 || minValue > maxValue


    const updateSettings = () => {

        setMin(minValue)
        setMax(maxValue)
        setCount(minValue)


    }

    /*useEffect(()=>{
        if(minValue === maxValue || minValue < 0 || minValue > maxValue){
            setError("Incorrect Value!")
        } else {
            setError('')
        }
    }, [minValue, maxValue])*/ //realised with useEffect


    return (
        <div className="App">
            <Counter maxValue={max} minValue={min}
                     count={count} setCount={setCount}
                     min={minValue} max={maxValue}
                     hasError={hasError}

            />
            <br/>
            <SettingsCounter setMinValue={setMinValue}
                             setMaxValue={setMaxValue}
                             updateSettings={updateSettings}
                             maxValue={maxValue}
                             minValue={minValue}
                             setCount={setCount}
                             hasError={hasError}
            />

        </div>
    );
}

export default App;
