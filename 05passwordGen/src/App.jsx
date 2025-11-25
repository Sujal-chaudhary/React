import { useState ,useCallback, useEffect, useRef } from 'react'
import './App.css'

// useRef : whenever mujhe kisi chiz ka refrence lena hota hai then i use this


function App() {
  const [length ,setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef Hook :-
  const passwordRef = useRef(null)

   // Method for password Generation :-
  const passwordGen = useCallback(() => {
        let pass = ""
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

         if (numberAllowed) 
          str += "0123456789"
        

        if (charAllowed) {
          str += "!@#$%^&*_+{}[]"
        }

        for (let i = 1; i <= length; i++) {
          let char = Math.floor(Math.random() * str.length + 1)
          pass += str.charAt(char)
        }

       
         setPassword(pass)

  } , [length,numberAllowed,charAllowed]) // inme kuch bhi change ho to optimise kro.


  // copyToclipboard method :-
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,3) // further more optimised
    window.navigator.clipboard.writeText(password)
  },[password])

  

  useEffect(() => {
    passwordGen()
  },[length,numberAllowed,charAllowed,passwordGen])

  // in dependecies me kuch bhi ched chad ho to duabara useEffect run kr do.
  // note :- you can also build just using useEffect without useCallback but for better optimistaion we use it.





  return (
       <>
           <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
            <h1 className='text-white text-center my-5'>Password generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        value={password}
         className="outline-none w-full py-1 px-3 bg-white text black rounded-lg"
         placeholder='password'
         readOnly 
         ref = {passwordRef}
       />
       <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
         onClick={copyToClipboard}
       >copy</button>

       </div>
       
       <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
          <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
       <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
       </div>
      </div>
      
        </>
  );
}

export default App;
