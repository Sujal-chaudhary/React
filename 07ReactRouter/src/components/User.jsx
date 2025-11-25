import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {userid} = useParams()
  return (
    <div className="bg text-black" >User: {userid}</div>
  )
}

export default User

/*  useParams() is a React Router hook that lets you access dynamic parameters from the URL.

    In simple words — if your route has some variable part (like /user/:userid),
    then useParams() helps you get that value.
    
*/