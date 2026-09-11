import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { GlobalContext } from './Context/MyContextAPI';

export const MyUseNavigate = () => {

    const nav = useNavigate();

    const {user} = useContext(GlobalContext)


  return (
    <div>
        <h1>MyUseNavigate</h1>
        <h2>Welcome {user.firstName}!</h2>
 
        <button onClick={()=>nav('/')}>Go to Home</button>

    </div>
  )
}
