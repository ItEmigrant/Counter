import React, {useState} from 'react';

import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {SettingsCounter} from "./Components/Counter/settingsCounter";



function App() {

    let [maxValue, setMaxValue] = useState(5);
    let [minValue, setMinValue] = useState(0);

    let [max, setMax] = useState(maxValue);
    let [min, setMin] = useState(minValue);

    let [count, setCount] = useState(minValue);


    const updateSettings = () => {
            setMin(minValue)
        setMax(maxValue)
        setCount(minValue)
    }






    return (
        <div className="App">
            <Counter maxValue={max} minValue={min}
                     count={count} setCount={setCount}/>
            <br/>
            <SettingsCounter setMinValue={setMinValue}
                             setMaxValue={setMaxValue}
                             updateSettings={updateSettings}
            />

        </div>
    );
}

export default App;
