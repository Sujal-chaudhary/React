import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './components/card'

function App() {
 
  const myObj = {
    username : "sujal"
  }

  return (
    <div>
      <h1>Hello, React!</h1>
      <br />
      <Card1 channel = "chai aur code" someObje = {myObj} btnText = "click me"/> {/*our component is rendered , we can pass props in it.*/}
    </div>
  )
    

     
}

export default App
