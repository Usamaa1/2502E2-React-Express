import React from 'react'
import { useNavigate } from 'react-router'

export const MyUseNavigate = () => {

    const nav = useNavigate();


  return (
    <div>
        <h1>MyUseNavigate</h1>
 
        <button onClick={()=>nav('/')}>Go to Home</button>

    </div>
  )
}
