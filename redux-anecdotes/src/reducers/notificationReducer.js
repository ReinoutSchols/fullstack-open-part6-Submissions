/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name:'notification',
  initialState: {
    message: null
},
  reducers: {
     setNotification(state, action) {
    console.log('setNotification logger: ', action.payload)
      return action.payload 
    },
    clearNotification(state) {
      return { message: null }
    },
  },
})

export const { clearNotification, setNotification } = notificationSlice.actions


export const notificationTimeOut = (message, duration) => (dispatch) => {
  dispatch(setNotification({ message }))
  console.log('duration notificationTimeOut: ',duration)
  setTimeout(() => {
    dispatch(clearNotification())
  }, duration * 1000)
}

export default notificationSlice.reducer
