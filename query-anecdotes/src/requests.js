import axios from 'axios'

const baseurl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = () =>
  axios.get(baseurl).then(res => res.data)

export const createAnecdote = newAnecdote =>
    axios.post(baseurl, newAnecdote).then(res => res.data)

export const updateAnecdote = async (updatedAnecdote) =>  {
    console.log('logging anecdote in post request:', updatedAnecdote)
    await axios.put(`${baseurl}/${updatedAnecdote.id}`, updatedAnecdote).then(res => res.data)
}