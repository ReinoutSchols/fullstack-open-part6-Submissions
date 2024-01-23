import { createContext, useReducer } from 'react'

const notificationReducer = (state, action) => {
    switch (action.type) {
      case "VOTE":
        return { ...state, message:`Anecdote '${action.payload}' voted`, type: 'VOTE' }
      case "CREATE":
        console.log(action.payload)
        return { ...state, message: `Anecdote '${action.payload}' created`, type: 'CREATE' }
      case "RESET":
        return { ...state, message: "", type: 'RESET' }
      case "ERROR":
        return { ...state, message: action.payload, type: 'ERROR' }
      default:
          return state
    }
  }
  
  const AnecdoteContext = createContext()

  export const AnecdoteContextProvider = (props) => {
    const [notification, notificationDispatch] = useReducer(notificationReducer, {message: ""})
  
    return (
      <AnecdoteContext.Provider value={[notification, notificationDispatch] }>
        {props.children}
      </AnecdoteContext.Provider>
    )
  }


export default AnecdoteContext