import React from 'react'
import { Button, FetchCustomHook } from './components/Button'
import  Todos  from './components/todos/Todos.container'

function App () {
  return (
    <div>
        <Button>test</Button>
        <FetchCustomHook />
        <Todos />
    </div>
  )
}

export default App
