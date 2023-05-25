import React from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {SettingsCounter} from "./Components/Counter/settingsCounter";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./Components/state/store";
import {updateMaxValueAC, updateMinValueAC, updateSettingsAC} from "./Components/Reducer/SettingsReducer";
import {incrementAC, resetAC} from "./Components/Reducer/CounterReducer";


function App() {

    /* const [maxValue, setMaxValue] = useState(() => {
         return /!*Number(localStorage.getItem('CvMAX')) ||*!/ 5
     });
     const [minValue, setMinValue] = useState(() => {
         return /!*Number(localStorage.getItem('CvMIN')) ||*!/ 0
     });*/

    const settingsMinValue = useSelector((state: AppRootStateType) => state.settings)

    const settingsMaxValue = useSelector((state: AppRootStateType) => state.settings)

    const countValue = useSelector((state: AppRootStateType) => state.counter)

    const countMinValue = useSelector((state: AppRootStateType) => state.counter)

    /* const [max, setMax] = useState(settingsMaxValue);
     const [min, setMin] = useState(settingsMinValue);*/

    /*const [count, setCount] = useState<number | string>(minValue);*/


    const hasError: boolean = settingsMinValue.minValue == settingsMaxValue.maxValue || settingsMinValue.minValue < 0 || settingsMinValue.minValue > settingsMaxValue.maxValue


    /*    useEffect(() => {
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
        }, [maxValue, minValue])*/
    const dispatch = useDispatch()

    const updateSettings = () => {


        dispatch(incrementAC(countValue.countValue))

        /*setMin(minValue)
        setMax(maxValue)*/
        /*setCount(minValue)*/
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
            <Counter maxValue={settingsMaxValue.maxValue} minValue={countMinValue.minValue}
                     count={countValue.countValue} /*setCount={setCount}*/
                     hasError={hasError}

            />
            <br/>
            <SettingsCounter
                updateSettings={updateSettings}
                maxValue={settingsMaxValue.maxValue}
                minValue={settingsMinValue.minValue}
                /* setCount={setCount}*/
                hasError={hasError}
            />


        </div>
    );
}

export default App;
