import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0) // useState is a hook that allows us to add state to our functional components. 
  // It returns an array with two elements: the current state value and a function to update that state value.

  const addValue = () => {
    console.log("Clicked", counter)
    setCounter(counter + 1) // setCounter is the function that we use to update the state value.
  }
  

   const removeValue = () => {
    setCounter(counter - 1) // setCounter is the function that we use to update the state value.
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Increment</button>
      <br />
      <br />
      <button onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App
