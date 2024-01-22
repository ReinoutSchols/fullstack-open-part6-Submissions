import { setAnecdotes } from './reducers/anecdoteReducer.js'
import filterReducer from './reducers/filterReducer'
import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './reducers/notificationReducer'
import anecdoteService from './services/anecdotesService.js'
import anecdoteReducer from './reducers/anecdoteReducer.js'

const store = configureStore({
  reducer: {
  anecdotes: anecdoteReducer,
  filter: filterReducer,
  notification: notificationReducer
  }
})

anecdoteService.getAll().then(anecdotes => {
    store.dispatch(setAnecdotes(anecdotes))
  })

export default store