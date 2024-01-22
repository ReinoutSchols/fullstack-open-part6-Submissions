import { createSlice } from "@reduxjs/toolkit"
import anecdotesService from '../services/anecdotesService'
/* eslint-disable no-case-declarations */

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
    const { id, votes } = action.payload
    return state.map((anecdote) =>
      anecdote.id !== id ? anecdote : { ...anecdote, votes }
    )
  },
    appendAnecdote(state, action){
      state.push(action.payload)
    }, 
    setAnecdotes(state, action) {
      return  action.payload
    }
  }
})

export const { createAnecdote, appendAnecdote, setAnecdotes, voteAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdotes = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const increaseVote = (anecdote) => {
  return async dispatch => {
    const updatedAnecdote = await anecdotesService.updateVote(anecdote)
    dispatch(voteAnecdote(updatedAnecdote))
  }
}


export default anecdoteSlice.reducer