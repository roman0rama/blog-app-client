import { configureStore } from "@reduxjs/toolkit"
import { postReducer } from "./posts";
import { authReducer } from "./auth"

const store = configureStore({
    reducer: {
        posts: postReducer,
        auth: authReducer
    }
})

export default store