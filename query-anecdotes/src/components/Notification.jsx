import { useContext } from 'react'
import AnecdoteContext from '../createContext'

const Notification = () => {
  const [ notification, dispatch ]= useContext(AnecdoteContext)
  console.log('noti state in notification component:', notification)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  const notificationElements = () => {
    console.log(`message and type before if block: ${notification.type} ${notification.message}`)
    if (notification.type === 'CREATE' || notification.type === 'VOTE' || notification.type === 'ERROR') {
      console.log(`message in if block: ${notification.message}`)
  
      setTimeout(() => {
        dispatch({ type: 'RESET' })
      }, 5000)
      return (
        <>
          {`notification: ${notification.message}`}
        </>
      )
    }
  }

  return (
    <div style={style}>
      <p>{notificationElements()}</p>
    </div>
  )
}

export default Notification
