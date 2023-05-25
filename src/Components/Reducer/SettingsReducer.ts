export type State = {
    minValue: number
    maxValue: number |string
    updateMin: number
    updateMax: number | string
};

type updateMinValueACType = ReturnType<typeof updateMinValueAC>
type updateMaxValueACType = ReturnType<typeof updateMaxValueAC>
type updateSettingsACType = ReturnType<typeof updateSettingsAC>


export type CommonActionType = updateMinValueACType | updateMaxValueACType | updateSettingsACType;

const initialState: State = {
    minValue: 0,
    maxValue: 5,
    updateMin: 0,
    updateMax: 5

};

export const settingsReducer = (state = initialState, action: CommonActionType): State => {
    switch (action.type) {
        case "UPDATE-MIN-VALUE":
            return {...state, minValue: action.currentValue};

        case "UPDATE-MAX-VALUE":
            return {...state, maxValue: action.currentValue};

        case "UPDATE-SETTINGS-VALUE":
            return {...state, updateMin: action.min, updateMax:action.max};
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

export const updateSettingsAC = (min: number, max: number|string) => {
    return {
        type: "UPDATE-SETTINGS-VALUE",
        min, max
    } as const
}

