import { createSlice } from '@reduxjs/toolkit'
import { stateInterface } from '../interface';

const initialState: stateInterface = {
  cart: [],
  user: null,
  image: ""
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeCart: (state, action) => {
      const newCarts = state.cart.filter((product) => product.id !== action.payload);
      state.cart = newCarts;
    },
    increment: (state, action) => {
      const updateQuantity = state.cart.map((curItem) => {
        if (curItem.id === action.payload) {
          return { ...curItem, amount: curItem.amount + 1 }
        }
        return curItem;
      })
      state.cart = updateQuantity;
    },
    decrement: (state, action) => {
      const updateQuantity = state.cart.map((curItem) => {
        if (curItem.id === action.payload) {
          if (curItem.amount > 1) {
            return { ...curItem, amount: curItem.amount - 1 }
          }
        }
        return curItem;
      })
      state.cart = updateQuantity;
    },
    userLogIn: (state, action) => {
      state.user = action.payload
    },
    userLogOut: (state) => {
      state.user = null
    },
    userImage: (state, action) => {
      state.image = action.payload
    }
  }
})

export const { addToCart, removeCart, increment, decrement, userLogIn, userLogOut, userImage } = cartSlice.actions;

export default cartSlice.reducer;