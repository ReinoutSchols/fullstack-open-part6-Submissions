import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'


 const AnecdoteList= () => {

    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    const filterValue = useSelector(state => state.filter)
    console.log('anecdotes rendered from store:', anecdotes)
    console.log('filtervalue:', filterValue)
    

    const displayedAnecdotes = filterValue
  ? anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filterValue.toLowerCase()))
  : anecdotes

    const sortedAnecdotes = [...displayedAnecdotes].sort((a, b) => b.votes - a.votes)
    const vote = (id) => {
      console.log('vote', id)
      dispatch(voteAnecdote(id))
    }

  return (
  <>
    {sortedAnecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>
    )}
  </>
)}

export default  AnecdoteList