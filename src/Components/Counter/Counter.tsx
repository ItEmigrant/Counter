import React from 'react';
import s from './Counter.module.css'

type CounterPropsType = {
    count: number
    minValue: number
    maxValue: number
    setCount: (count: number) => void
}

export const Counter = (props: CounterPropsType) => {


    const onClickIncHandler = () => {

        props.setCount(props.count + 1)


    }
    const onClickResetHandler = () => {
        props.setCount(props.minValue)

    }

    return (

        <div className={s.body}> COUNTER
            <div className={s.count}>
                <div
                    className={props.count === props.maxValue ? s.maxValue : props.count === props.minValue ? s.minValue : ''}>
                    {props.count}
                </div>
            </div>
            - home work -
            <div className={s.button}>
                <div>
                    <button
                        onClick={onClickIncHandler}
                        disabled={props.count === props.maxValue}>
                        INC
                    </button>
                </div>
                <div>
                    <button onClick={onClickResetHandler}
                            disabled={props.count === props.minValue}>Reset
                    </button>
                </div>
            </div>

        </div>
    );
};

