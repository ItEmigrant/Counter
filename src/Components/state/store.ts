import {combineReducers, compose, legacy_createStore} from 'redux'
import {counterReducer} from "../Reducer/CounterReducer";



declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    counter: counterReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// непосредственно создаём store

export const store = legacy_createStore(rootReducer, composeEnhancers())

// определить автоматически тип всего объекта состояния

export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;

