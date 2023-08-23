import {combineReducers, legacy_createStore} from 'redux'
import {counterReducer} from "../Reducer/CounterReducer";
import {settingsReducer} from "../Reducer/SettingsReducer";
import {loadState, saveState} from "../Utils/localStorageUtils";


const rootReducer = combineReducers({
    counter: counterReducer,
    settings: settingsReducer
});


export const store = legacy_createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter,
        settings: store.getState().settings
    })

});


export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store;

