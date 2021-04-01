import { createSlice } from '@reduxjs/toolkit'

const countSlice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    increase: (state, { payload }) => state + (payload || 1),
    decrease: (state, { payload }) => state - 1,
    reset: state => 0
  }
})

export let { increase, decrease, reset } = countSlice.actions

export default countSlice.reducer