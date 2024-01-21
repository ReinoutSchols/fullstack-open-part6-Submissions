import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name:'notification',
  initialState: {message: "I am sometimes good at programming"},
  reducers: {
    createNotification(state, action) {
      state.message = action.payload
  }}
    })

export const { createNotification } = notificationSlice.actions
export default notificationSlice.reducer
