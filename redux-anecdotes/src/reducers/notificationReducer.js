/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name:'notification',
  initialState: {message: "I am sometimes good at programming"},
  reducers: {
    createNotification(state, action) {
        const { content } = action.payload
        return { message: `You created an anecdote: ${content}` }
  }, voteNotification(state, action) {
    const { content } = action.payload;
    console.log('id votenotifciation:', action.payload)
    return { message: `You voted for an anecdote: ${content}` }
}, 
    removeNotification(state, action) {
        return { message: "" }
  }
}}
)

export const { createNotification, removeNotification, voteNotification } = notificationSlice.actions
export default notificationSlice.reducer
