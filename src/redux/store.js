import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from '../redux/feature/weatherSlice'
import { createLogger } from "redux-logger";

const logger = createLogger()


 const store = configureStore({
    reducer:{
        weather:weatherReducer
    },
    middleware:getDefaultMiddleware => 
        getDefaultMiddleware().concat(logger)
})


export default store

