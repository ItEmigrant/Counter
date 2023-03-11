import React, {ChangeEvent} from 'react';
import s from "./SettingsCounter.module.css";
import {Button} from "./UniversalButton";

type SettingsCounterPropsType = {
    setMinValue: (newValue: number) => void
    minValue: number

    setMaxValue: (newValue: number) => void
    maxValue: number
}

export const SettingsCounter = (props: SettingsCounterPropsType) => {

    const updateMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(Number(e.currentTarget.value))
    }

    const updateMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(Number(e.currentTarget.value))
    }

    const onClickResetHandler = () => {
        props.setMaxValue(props.maxValue)
    }

    return (
        <div className={s.body}> SETTINGS
            <div className={s.count}>
                <h4>
                    <div>max value: <input type="number" onChange={updateMaxValue}/></div>
                </h4>

                <h4>
                    <div>min value: <input type="number" onChange={updateMinValue}/></div>
                </h4>
            </div>
            - settings for counter-
            <div className={s.button}>
                <div>

                    <Button name={'SETTINGS'} callBack={onClickResetHandler} disabled={false}/>
                </div>

            </div>

        </div>
    );
};

