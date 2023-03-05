import React, {useState} from 'react';

import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {SettingsCounter} from "./Components/Counter/settingsCounter";
import {UniversalInput} from "./Components/Counter/UniversalInput";

function App() {
    const maxValue = 5
    const minValue = 0

    let [count, setCount] = useState(minValue)


    return (
        <div className="App">
            <Counter maxValue={maxValue} minValue={minValue}
                     count={count} setCount={setCount}/>
            <br/>
            <SettingsCounter/>
            <UniversalInput/>
        </div>
    );
}

export default App;
