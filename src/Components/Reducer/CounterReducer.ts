export type InitialStateType = {
    countValue: number | string;
    minValue: number
};


type incrementACType = ReturnType<typeof incrementAC>
type resetACType = ReturnType<typeof resetAC>
type setACType = ReturnType<typeof setAC>
type  setFromLocalStorageACType = ReturnType<typeof setFromLocalStorageAC>

export type CommonActionType = incrementACType | resetACType | setACType | setFromLocalStorageACType;

const initialState: InitialStateType = {
    countValue: 0,
    minValue: 0
};

export const counterReducer = (state = initialState, action: CommonActionType): InitialStateType => {
    switch (action.type) {
        case "INCREMENT":
            return {...state, countValue: +state.countValue + 1};

        case "RESET":
            return {...state, countValue: action.minValue};

        case "SET-COUNT":
            return {...state, countValue: action.Value}

        case "SET-STORAGE":
            return {...state, countValue: action.valueStorage}

        default:
            return state;
    }
};

export const incrementAC = (countValue: number | string) => {
    return {
        type: "INCREMENT",
        countValue
    } as const
}

export const resetAC = (minValue: number) => {
    return {
        type: "RESET",
        minValue
    } as const
}

export const setAC = (Value: number | string) => {
    return {
        type: "SET-COUNT",
        Value
    } as const
}

export const setFromLocalStorageAC = (valueStorage: number | string) => {
    return {
        type: "SET-STORAGE",
        valueStorage
    } as const
}