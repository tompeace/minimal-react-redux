import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: "notification",
  initialState: [],
  reducers: {
    addNotification: (state, { payload }) => [...state, payload],
    removeNotification: (state, { payload }) => state.filter(s => s.id !== payload),
    reset: state => []
  }
})

export let { addNotification, removeNotification, reset } = notificationSlice.actions

export default notificationSlice.reducer

export const NOTIFICATION_TYPES = {
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
  WARNING: "WARNING"
}