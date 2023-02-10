import { createSlice } from "@reduxjs/toolkit";
import data from '../data';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: data,
  },
  reducers: {
    deleteProduct(state, action) {
      state.cart = state.cart.filter(product => {
        return product.id !== action.payload.id
      })
    },
    increase(state, action) {
      state.cart = state.cart.map(product => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            count: ++product.count,
            priceTotal: ++product.count * product.price
          }
        }
        return product
      })
    },
    decrease(state, action) {
      state.cart = state.cart.map(product => {
        if (product.id === action.payload.id) {
  
          const newCount = product.count - 1 > 1 ? product.count - 1 : 1
  
          return {
            ...product,
            count: newCount,
            priceTotal: newCount * product.price,
          }
        }
        return product
      })
    },
    changeValue(state, action) {
      state.cart = state.cart.map(product => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            count: action.payload.value,
            priceTotal: action.payload.value * product.price
          }
        }
        return product
      })
    }
  }
})

export const {deleteProduct, increase, decrease, changeValue} = cartSlice.actions

export default cartSlice.reducer