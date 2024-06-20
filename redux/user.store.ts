import { combineReducers, createStore } from "@reduxjs/toolkit";

const initialState = {
    isSignedIn: false,
    userName: ""
}

const rootReducer = combineReducers({
    userData: () => initialState
})

export const userStore = createStore(rootReducer)
