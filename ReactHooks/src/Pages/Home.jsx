import React from 'react'
import { userData } from '../HooksComponent/Context/MyContextAPI'

export const Home = () => {

  const {user} = userData();




  return (
    <div>
      <h1>Home</h1>
      <h2>Welcome {user.firstName}</h2>
    </div>
  )
}
