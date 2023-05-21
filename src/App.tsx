import React, {useEffect, useState} from 'react';

import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {SettingsCounter} from "./Components/Counter/settingsCounter";


function App() {

    const [maxValue, setMaxValue] = useState(() => {
        return Number(localStorage.getItem('CvMAX')) || 5
    });
    const [minValue, setMinValue] = useState(() => {
        return Number(localStorage.getItem('CvMIN')) || 0
    });


    const [max, setMax] = useState(maxValue);
    const [min, setMin] = useState(minValue);

    const [count, setCount] = useState<number | string>(minValue);


    const hasError: boolean = minValue == maxValue || minValue < 0 || minValue > maxValue


    useEffect(() => {
        let valueAsString = localStorage.getItem('CvMAX')

        if (valueAsString) {
            let newStorageValue = JSON.parse(valueAsString)

            setMaxValue(newStorageValue)

        }

        let valueAsStringMin = localStorage.getItem('CvMIN')
        if (valueAsStringMin) {
            let newStorageValueMin = JSON.parse(valueAsStringMin)
            setMinValue(newStorageValueMin)
        }


    }, [])

    useEffect(() => {
        localStorage.setItem('CvMAX', JSON.stringify(maxValue));
        localStorage.setItem('CvMIN', JSON.stringify(minValue));
    }, [maxValue, minValue])


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
