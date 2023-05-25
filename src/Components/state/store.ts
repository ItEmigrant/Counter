import {combineReducers, legacy_createStore} from 'redux'
import {counterReducer} from "../Reducer/CounterReducer";
import {settingsReducer} from "../Reducer/SettingsReducer";


const rootReducer = combineReducers({
    counter: counterReducer,
    settings: settingsReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store;

