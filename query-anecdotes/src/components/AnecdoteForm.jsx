import {  useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from '../requests'
import { useContext } from 'react'
import AnecdoteContext from '../createContext'

const AnecdoteForm = () => {
  const [notification, dispatch] = useContext(AnecdoteContext)
  const queryClient = useQueryClient()

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    }
  })

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log(content)
    newAnecdoteMutation.mutate({ content, votes: 0 })
    dispatch({ type: 'CREATE', payload: content })
  } 
 

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={addAnecdote} >
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
