import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import snackReducer from "./snackSlice"
import userReducer from "./userSlice"
import loadingReducer from "./loadingSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        message: snackReducer,
        user: userReducer,
        loading: loadingReducer,

    },
})

export default store