export type updateSettingsType = ReturnType<typeof updateSettingsAC>
export type  counterActionType = updateSettingsType

const initialState={
    minValue:0,
    maxValue:5
};

export const counterReducer = (state=initialState,  action: counterActionType) => {

    switch (action.type) {
        case 'UPDATE-SETTINGS':
        return {

        }
    }

    switch (action.type) {
        case 'RESET-COUNTER':
            return {

            }
    }

    switch (action.type) {
        case 'COUNTER-PLUS':
            return {

            }
    }


};

export const updateSettingsAC = (minValue: number, maxValue: number) => {
    return {
        type: 'UPDATE-SETTINGS',
        minValue, maxValue
    } as const
}