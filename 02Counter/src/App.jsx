import { useState } from 'react' // this is the way we import hooks.
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter, setCounter] = useState(15) // setCounter is the method which controls the counter variable and updates its value


 // let counter = 15

const addValue = () =>{
  counter = counter + 1 
  if (counter <= 20) {
     setCounter(counter)
  }
}

const removeValue = () => {
  counter = counter - 1
 if (counter >= 0) {
    setCounter(counter)
 }
}



  return (
    <>
        <h1>Chai aur react</h1>
        <h2>Counter Value: {counter}</h2>

         <button onClick={addValue}>Add value</button>
         <br />
         <br />
         <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
