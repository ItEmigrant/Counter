import React, {ChangeEvent, useState} from 'react';
import s from "./SettingsCounter.module.css";
import {Button} from "./UniversalButton";


type SettingsCounterPropsType = {
    setMinValue: (newValue: number) => void
    setMaxValue: (newValue: number) => void
    updateSettings: () => void
    maxValue: number
    minValue: number
    setCount: (count: number | string) => void
    hasError: boolean


}

export const SettingsCounter = (props: SettingsCounterPropsType) => {

    let [inputMinError, setInputMinError] = useState<boolean>(false);
    let [inputMaxError, setInputMaxError] = useState<boolean>(false);

    const updateMinValue = (e: ChangeEvent<HTMLInputElement>) => {

        props.setCount('Type value and enter settings')
        props.setMinValue(Number(e.currentTarget.value))
        Number(e.currentTarget.value) == props.maxValue || Number(e.currentTarget.value) < 0 || Number(e.currentTarget.value) > props.maxValue ? setInputMinError(true) : setInputMinError(false)

    }

    const updateMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(Number(e.currentTarget.value))
        props.setCount('Type value and enter settings')
        Number(e.currentTarget.value) == props.minValue || Number(e.currentTarget.value) < 0 || Number(e.currentTarget.value) < props.minValue ? setInputMaxError(true) : setInputMaxError(false)
    }


    const addSettings = () => {
        props.updateSettings()

    }

    return (
        <div className={s.body}> SETTINGS
            <div className={s.count}>
                <h4>
                    <div>
                        max value:
                        <input
                            className={inputMaxError ? s.inputError : ''}
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
                            className={inputMinError ? s.inputError : ''}
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

