import { useDispatch } from 'react-redux'
import { createAnecdotes } from '../reducers/anecdoteReducer'
import { notificationTimeOut } from '../reducers/notificationReducer'

 const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const create = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    console.log('create anecdote', content)
    event.target.anecdote.value = ''

    dispatch(createAnecdotes( content ))
    dispatch(notificationTimeOut(`you created '${content}'`, 10))
  }

  return (
    <div>
        <h2>create new</h2>
        <form onSubmit={create}>
          <div>
            <input name="anecdote" />
          </div>
          <button type="submit">create</button>
        </form>
    </div>
 )
}
export default  AnecdoteForm 