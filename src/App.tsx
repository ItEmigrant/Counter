import React, {useState} from 'react';

import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {SettingsCounter} from "./Components/Counter/settingsCounter";



function App() {

    let [maxValue, setMaxValue] = useState(5);
    let [minValue, setMinValue] = useState(0);

    let [max, setMax] = useState();
    let [min, setMin] = useState();

    let [count, setCount] = useState(minValue);

  const updateState =()=> {

  }

    return (
        <div className="App">
            <Counter maxValue={maxValue} minValue={minValue}
                     count={count} setCount={setCount}/>
            <br/>
            <SettingsCounter updateState={ updateState} />

        </div>
    );
}

export default App;
