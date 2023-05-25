export type State = {
    countValue: number | string;
    minValue: number
};

type incrementACType = ReturnType<typeof incrementAC>
type resetACType = ReturnType<typeof resetAC>

export type CommonActionType = incrementACType | resetACType;

const initialState: State = {
    countValue: 0,
    minValue: 0
};

export const counterReducer = (state = initialState, action: CommonActionType): State => {
    switch (action.type) {
        case "INCREMENT":
            return {...state, countValue: +state.countValue + 1};

        case "RESET":
            return {...state, countValue: state.minValue};

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