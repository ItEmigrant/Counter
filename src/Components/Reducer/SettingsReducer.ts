export type InitialStateType = {
    minValue: number
    maxValue: number |string
  };

type updateMinValueACType = ReturnType<typeof updateMinValueAC>
type updateMaxValueACType = ReturnType<typeof updateMaxValueAC>



export type CommonActionType = updateMinValueACType | updateMaxValueACType

const initialState: InitialStateType = {
    minValue: 0,
    maxValue: 5
};

export const settingsReducer = (state = initialState, action: CommonActionType): InitialStateType => {
    switch (action.type) {
        case "UPDATE-MIN-VALUE":
            return {...state, minValue: action.currentValue};

        case "UPDATE-MAX-VALUE":
            return {...state, maxValue: action.currentValue};

        default:
            return state;
    }
};

export const updateMinValueAC = (currentValue: number) => {
    return {
        type: "UPDATE-MIN-VALUE",
        currentValue
    } as const
}
export const updateMaxValueAC = (currentValue: number) => {
    return {
        type: "UPDATE-MAX-VALUE",
        currentValue
    } as const
}


