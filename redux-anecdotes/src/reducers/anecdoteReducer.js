import { createSlice } from "@reduxjs/toolkit"
/* eslint-disable no-case-declarations */

// const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      console.log('payload createAnecdote:', action.payload)
      state.push(action.payload)
    }, 
    voteAnecdote(state, action) {
      console.log('id:', action.payload)
      const id = action.payload.id
      const anecdoteToChange = state.find((n) => n.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      }
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
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

export const { createAnecdote, voteAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer