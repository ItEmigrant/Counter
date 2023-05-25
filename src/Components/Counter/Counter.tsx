import React from 'react';
import s from './Counter.module.css'
import {Button} from "./UniversalButton";
import {useDispatch} from "react-redux";
import {incrementAC, resetAC} from "../Reducer/CounterReducer";


type CounterPropsType = {
    count: number | string
    minValue: number
    maxValue: number | string
    /*setCount: (count: number | string) => void*/
    hasError: boolean
}

export const Counter = (props: CounterPropsType) => {

    const dispatch = useDispatch()

    const onClickIncHandler = () => {
        /* props.setCount(+props.count + 1)*/
        dispatch(incrementAC(props.count))
    }

    const onClickResetHandler = () => {
        /* props.setCount(props.minValue)*/
        dispatch(resetAC(props.minValue))
    }

    return (
        <div className={s.body}> COUNTER
            <div className={s.count}>
                <div
                    className={props.count === props.maxValue ? s.maxValue : props.count === props.minValue ? s.minValue : ''}>

                    {/*     <div> {props.error ? <div className={s.error}>{props.error}</div> : props.count} </div> ///realised with useEffect*/}
                    {
                        props.hasError ?
                            <div
                                className={s.error}>Incorrect Value!
                            </div> :
                            <div
                                className={props.count === 'Type value and enter settings' ? s.info : ''}>{props.count}
                            </div>
                    }
                </div>
            </div>
            - home work -
            <div className={s.button}>
                <div>
                    <Button name={"INC"} callBack={onClickIncHandler}
                            disabled={props.count === props.maxValue}/>
                </div>
                {/*<button
                        onClick={onClickIncHandler}
                        disabled={props.count === props.maxValue}>
                        INC
                    </button>*/}

                <div>
                    <Button name={'Rest'} callBack={onClickResetHandler}
                            disabled={props.count === props.minValue}/>
                    {/*<button onClick={onClickResetHandler}
                            disabled={props.count === props.minValue}>Reset
                    </button>*/}

                </div>
            </div>

        </div>

    );
}


