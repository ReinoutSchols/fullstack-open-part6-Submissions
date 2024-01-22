import filterReducer from './reducers/filterReducer'
import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './reducers/notificationReducer'
import anecdoteReducer from './reducers/anecdoteReducer.js'

const store = configureStore({
  reducer: {
  anecdotes: anecdoteReducer,
  filter: filterReducer,
  notification: notificationReducer
  }
})

export default store