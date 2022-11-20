import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./LoginSlice";


const store =  configureStore({
    reducer:{
        loginReducer: LoginSlice
    }
})


export default store