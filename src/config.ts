import {createStore,combineReducers, applyMiddleware} from "redux"
import { SingerReducer } from "./Singer/SingerReducer"
import createSaga from "redux-saga"
import { SingerWatcher } from "./Singer/SingerSagas"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'vwp-app',
    storage,
}
const rootReducer = combineReducers({
    singer:SingerReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const theSaga = createSaga()
const store = createStore(persistedReducer,applyMiddleware(theSaga))
const persistor = persistStore(store)

theSaga.run(SingerWatcher)

export type RootState = ReturnType<typeof store.getState>

export {store,persistor}