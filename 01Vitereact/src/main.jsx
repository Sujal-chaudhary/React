import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './app.jsx'

function MyApp(){
     return(
      <div>
         <h1>Custom app</h1>
      </div>
     )
}
 // My app component ultimatley gets converted to react element by react itself.

/*const reactElement = {
    type: 'a',
    props: {
         href: 'https://google.com',
         target: '_blank'
    },
    Children: 'click me to vist again'
}
*/

// i can give element this way also as react has its own render.
const anotherElement = ( 
  <a href="https://goggle.com" target='_blank'>Visit goggle</a>
)

const anotherUser = " chai aur react" // variable to be injected in react element

// syntax to add react element
const reactElement = React.createElement(
      'a',
      {href: "https://google.com", target: '_blank' },
      'click me to vist google',
      anotherUser // after making tree we can also inject the variables here.
)



createRoot(document.getElementById('root')).render(
    reactElement
)
