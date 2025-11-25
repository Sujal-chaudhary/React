import React from 'react'

 const UserContext = React.createContext() // we have created a global context & every context is a provider therefore usercontext in itself is provider,
  // context ko ek global variable ki tarah hi mano now har component jo bhi inke andar wrap hai wo comp. is global context (variable) ko access kr skte hai

 export default UserContext;


 // ab ek provider bhi banana padega is context ke sath joki is data ko provide krega.

 /*
 you’re creating a “global storage” — a place where some data can live and be shared with any component in your app, without having to pass props manually through every level.

But the context itself doesn’t store anything until you give it some data — that’s where the Provider comes in.
 */