export type State = {
    count: number | string;
};

type incrementACType = ReturnType<typeof incrementAC>

export type CommonActionType = incrementACType;

const initialState: State = {
    count: 0,
};

export const counterReducer = (state = initialState, action: CommonActionType): State => {
    switch (action.type) {
        case "INCREMENT":
            return {...state, count: +state.count + 1};

        default:
            return state;
    }
};

export const incrementAC = (count: number | string) => {
    return {
        type: "INCREMENT",
        count
    } as const
}
