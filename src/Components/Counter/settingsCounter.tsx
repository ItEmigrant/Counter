import React, {ChangeEvent, FocusEvent} from 'react';
import s from "./SettingsCounter.module.css";
import {Button} from "./UniversalButton";






type SettingsCounterPropsType = {
    setMinValue: (newValue: number) => void
    setMaxValue: (newValue: number) => void
    updateSettings: () => void
    maxValue: number
    minValue: number


}

export const SettingsCounter = (props: SettingsCounterPropsType) => {

    const updateMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(Number(e.currentTarget.value))
    }

    const updateMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(Number(e.currentTarget.value))

    }

    const addSettings = () => {
        props.updateSettings()
    }

const showError =(e:FocusEvent<HTMLInputElement>)=> {
        let hasError:boolean = Number(e.currentTarget.value) == props.maxValue ||
            Number(e.currentTarget.value)<0 || Number(e.currentTarget.value)>props.maxValue;

       return  hasError ? s.input1 : ''


}
  /* const showError = props.hasError ?  s.input : '';*/




    return (
        <div className={s.body}> SETTINGS
            <div className={s.count}>
                <h4>
                    <div>max value: <input onFocus={showError} type="number" value={props.maxValue} onChange={updateMaxValue} autoFocus/> </div>
                </h4>

                <h4>
                    <div>min value:<input onFocus={showError} type="number" value={props.minValue} onChange={updateMinValue} /> </div>
                </h4>
            </div>
            - settings for counter-
            <div className={s.button}>
                <div>

                    <Button name={'SETTINGS'} callBack={addSettings}
                           disabled={props.minValue == props.maxValue || props.minValue < 0 || props.minValue > props.maxValue} />
                </div>

            </div>

        </div>
    );
};

