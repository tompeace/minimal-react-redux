import { configureStore } from '@reduxjs/toolkit'
import countReducer from './count'

export const makeStore = () => configureStore({
  reducer: {
    count: countReducer,
  },
  devTools: true
})