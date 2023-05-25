export type State = {
    minValue: number
    maxValue: number |string
    min: number
    max: number
};

type updateMinValueACType = ReturnType<typeof updateMinValueAC>
type updateMaxValueACType = ReturnType<typeof updateMaxValueAC>
type updateSettingsACType = ReturnType<typeof updateSettingsAC>


export type CommonActionType = updateMinValueACType | updateMaxValueACType | updateSettingsACType;

const initialState: State = {
    minValue: 0,
    maxValue: 5,
    min: 0,
    max: 5

};

export const settingsReducer = (state = initialState, action: CommonActionType): State => {
    switch (action.type) {
        case "UPDATE-MIN-VALUE":
            return {...state, minValue: action.currentValue};

        case "UPDATE-MAX-VALUE":
            return {...state, maxValue: action.currentValue};

        case "UPDATE-SETTINGS":
            return {...state, maxValue: action.maxValue, minValue:action.minValue};
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
export const updateMaxValueAC = (currentValue: number|string) => {
    return {
        type: "UPDATE-MAX-VALUE",
        currentValue
    } as const
}

export const updateSettingsAC = (minValue: number, maxValue: number) => {
    return {
        type: "UPDATE-SETTINGS",
        minValue, maxValue
    } as const
}

