import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    deleteProduct(state, action) {
      state.cart.filter(product => {
        return product.id !== action.payload.id
      })
    },
    increase(state, action) {

    },
    decrease(state, action) {

    },
    changeValue(state, action) {

    }
  }
})

export const {deleteProduct, increase, decrease, changeValue} = slice.actions

export default slice.reducer