import React from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {SettingsCounter} from "./Components/Counter/settingsCounter";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./Components/state/store";


function App() {

    const settingsValue = useSelector((state: AppRootStateType) => state.settings)

    const countValue = useSelector((state: AppRootStateType) => state.counter)

    const hasError: boolean = settingsValue.minValue === settingsValue.maxValue || settingsValue.minValue < 0 || settingsValue.minValue > settingsValue.maxValue


   /* useEffect(()=>{
        if(settingsValue.minValue === settingsValue.maxValue || settingsValue.minValue < 0 || settingsValue.minValue > settingsValue.maxValue){
            setError("Incorrect Value!")
        } else {
            setError('')
        }
    }, [minValue, maxValue]) //realised with useEffect*/


    return (
        <div className="App">
            <Counter maxValue={settingsValue.maxValue} minValue={settingsValue.minValue}
                     count={countValue.countValue}
                     hasError={hasError}
            />
            <br/>
            <SettingsCounter
                maxValue={settingsValue.maxValue}
                minValue={settingsValue.minValue}
                hasError={hasError}
            />


        </div>
    );
}

export default App;
