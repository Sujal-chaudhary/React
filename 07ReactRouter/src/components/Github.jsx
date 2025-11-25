import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
    const data = useLoaderData()

    // const [data , setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 p-4'>Github Followers: {data.followers}</div>
  )
}

export default Github

// much optimised way of fetching data using loader function of react-router-dom (i will use this way)

export const githubInfoLoader = async () => {
   const response =  await fetch('https://api.github.com/users/hiteshchoudhary')
   return response.json()
}
