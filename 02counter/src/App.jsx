import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addcounter = () => {
    if (counter == 20) {
    setCounter(counter=20)
    }
    else{
    setCounter(counter + 1)
    }
  }

  const removecounter = () => {
    if (counter > 0) {
    setCounter(counter - 1)
    }
    else{
    setCounter(0)
    }
  }

  return (
    <>
      <h1> COUNTER</h1>
      <h2>Count Value: {counter}</h2>

      <button onClick={addcounter}>
        Add counter {counter}</button>

      <br />

      <button onClick={removecounter}>
        remove counter {counter}</button>

    </>
  )
}

export default App