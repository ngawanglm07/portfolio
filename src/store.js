import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import appApi from "./services/appApi";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import {persistReducers} from "redux-persist";
import thunk from "redux-thunk";
import persistReducer from "redux-persist/es/persistReducer";

const reducer= combineReducers({
    user:userSlice,
    [appApi.reducerPath]:appApi.reducer,
});

const persistConfig = {
    key:"root",
    storage,
    blacklist:[appApi.reducerPath],
};

//persist our store
const persistedReducer = persistReducer(persistConfig,reducer);

//creating the store

const store = configureStore({
    reducer:persistedReducer,
    middleware:[thunk,appApi.middleware]
});

export default store;
