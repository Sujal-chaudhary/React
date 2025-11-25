/* The Provider is like a distributor — it provides (shares) your data to all components that are inside it. */


import React from 'react'
import UserContext from './UserContext'


const UserContextProvider = ({children}) => {
    const [user , setUser] = React.useState(null)
     return(
        <UserContext.Provider value = {{user , setUser}}> 
        {children}
        </UserContext.Provider>
     )          
}

export default UserContextProvider