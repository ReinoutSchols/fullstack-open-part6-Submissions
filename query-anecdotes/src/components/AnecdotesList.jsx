import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, updateAnecdote } from '../requests'
import AnecdoteContext from '../createContext'
import { useContext } from 'react'

const AnecdoteList = () => {
  const [notification, dispatch] = useContext(AnecdoteContext)
  const queryClient = useQueryClient()

        const updateAnecdoteMutation = useMutation({
          mutationFn: updateAnecdote,
          onSuccess: () => {
            console.log('invalidated after voting ')
            queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
          }
        })
        
        // passing the updated anecdote to the updating mutator
        const handleVote = (anecdote) => {
          console.log('logging the anecdote in handlevote:',anecdote)
          const  updatedanecdote = {...anecdote, votes: anecdote.votes + 1 }
          console.log('logging the updatedanecdote in handlevote:', updatedanecdote)
          updateAnecdoteMutation.mutate(updatedanecdote)
          dispatch({ type: 'VOTE', payload: updatedanecdote.content })
        }
      
        // querying the result for the rendering of anecdotes
        const result = useQuery({
          queryKey: ['anecdotes'],
          queryFn:getAnecdotes,
          retry: false
        })
        console.log('logging the rendered anecdotes after the query:', JSON.parse(JSON.stringify(result)))

        if (result.isError) {
          console.log(result.error)
         return <p>anecdote service not available due to problems in server</p>
        }
        if (result.isLoading ) {
          return <div>loading data...</div>
        }
        const anecdotes = result.data
      
        return (
          <div>
            {anecdotes.map(anecdote =>
              <div key={anecdote.id}>
                <div>
                  {anecdote.content}
                </div>
                <div>
                  has {anecdote.votes}
                  <button onClick={() => handleVote(anecdote)}>vote</button>
                </div>
              </div>
            )}
          </div>
        )
      }
      

export default AnecdoteList
