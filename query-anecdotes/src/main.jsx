import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'
import { AnecdoteContextProvider } from './createContext'


// creating new instance of a queryClient
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
<AnecdoteContextProvider>
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
</AnecdoteContextProvider>
)