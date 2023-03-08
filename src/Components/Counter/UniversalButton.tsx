import React from 'react';

type ButtonType = {
    name: string,
    callBack: () => void
    disabled: boolean
}

export const Button = (props: ButtonType) => {

    const {name, callBack, disabled} = props
    const onClickHan = () => {
        callBack()
    }

    return (
        <button onClick={onClickHan} disabled={disabled}>{name}</button>
    )
}