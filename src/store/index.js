import { configureStore } from '@reduxjs/toolkit'
import countReducer from './count'

export const store = configureStore({
  reducer: {
    count: countReducer,
  },
  devTools: true
})