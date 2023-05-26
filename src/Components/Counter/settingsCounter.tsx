import React, {ChangeEvent, useState} from 'react';
import s from "./SettingsCounter.module.css";
import {Button} from "./UniversalButton";
import {useDispatch} from "react-redux";
import {updateMaxValueAC, updateMinValueAC} from "../Reducer/SettingsReducer";
import {setAC} from "../Reducer/CounterReducer";


type SettingsCounterPropsType = {
    maxValue: number | string
    minValue: number
    hasError: boolean

}

export const SettingsCounter = (props: SettingsCounterPropsType) => {
    const dispatch = useDispatch();

    let [inputError, setInputError] = useState<[boolean, boolean]>([false, false]);

    const updateMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const currentValue = Number(e.currentTarget.value);
        dispatch(setAC('Type value and enter settings'));
        dispatch(updateMinValueAC(currentValue));

        if (currentValue === props.maxValue || currentValue < 0 || currentValue > props.maxValue) {
            setInputError([true, false]);
        } else {
            setInputError([false, false]);
        }
    }; // function refactor the GPT Chat

    const updateMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setAC('Type value and enter settings'))
        dispatch(updateMaxValueAC((Number(e.currentTarget.value))))
        Number(e.currentTarget.value) == props.minValue || Number(e.currentTarget.value) < 0 || Number(e.currentTarget.value) < props.minValue ? setInputError([false, true]) : setInputError([false, false])
    }

    const addSettings = () => {
        return dispatch(setAC(props.minValue))
    }

    return (
        <div className={s.body}> SETTINGS
            <div className={s.count}>
                <h4>
                    <div>
                        max value:
                        <input
                            className={inputError[1] ? s.inputError : ''}
                            type="number"
                            value={props.maxValue}
                            onChange={updateMaxValue}
                            autoFocus
                        />
                    </div>
                </h4>

                <h4>
                    <div>
                        min value:
                        <input
                            className={inputError[0] ? s.inputError : ''}
                            type="number"
                            value={props.minValue}
                            onChange={updateMinValue}/>
                    </div>
                </h4>
            </div>
            - settings for counter-
            <div className={s.button}>
                <div>
                    <Button
                        name={'SETTINGS'}
                        callBack={addSettings}
                        disabled={props.hasError}/>

                </div>

            </div>

        </div>
    );
};

