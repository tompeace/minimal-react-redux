import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './notifications'

export const store = configureStore({
  reducer: {
    notifications: notificationReducer,
  },
  devTools: true,
})