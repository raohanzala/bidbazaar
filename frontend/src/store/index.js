import { configureStore } from "@reduxjs/toolkit";
import orderProgressVideoReducer from './features/orderProgressVideoSlice'


const store = configureStore({
reducer : {
    orderProgressVideo : orderProgressVideoReducer
}
})

export default store