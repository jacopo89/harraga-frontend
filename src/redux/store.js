// import redux and persist plugins
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import persistStore from 'reduxjs-toolkit-persist/es/persistStore';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from 'reduxjs-toolkit-persist/es/constants';
import authReducer from "./authSlice";

const persistConfig = {
    key: "WEROOMS",
    storage,
    whitelist: ['menu', 'settings', 'lang'],
};

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        auth: authReducer,
    })
);
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
const persistedStore = persistStore(store);
export { store, persistedStore };
