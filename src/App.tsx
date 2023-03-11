import React, {useState} from 'react';

import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {SettingsCounter} from "./Components/Counter/settingsCounter";



function App() {

    let [maxValue, setMaxValue] = useState(5);
    let [minValue, setMinValue] = useState(0);


    let [count, setCount] = useState(minValue);



    return (
        <div className="App">
            <Counter maxValue={maxValue} minValue={minValue}
                     count={count} setCount={setCount}/>
            <br/>
            <SettingsCounter setMinValue={setMinValue}  minValue={minValue}
                             setMaxValue={setMaxValue}  maxValue={maxValue}/>

        </div>
    );
}

export default App;
