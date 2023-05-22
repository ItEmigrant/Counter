import {combineReducers, legacy_createStore} from 'redux'
import {counterReducer} from "../Reducer/CounterReducer";


const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer)

// @ts-ignore
window.store = store;

