import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'

export const store = configureStore({
  reducer: {
    userCart:cartSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
