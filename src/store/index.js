import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slice'

const store = configureStore({
  reducers: {
    cart: cartReducer,
  }
})

export default store