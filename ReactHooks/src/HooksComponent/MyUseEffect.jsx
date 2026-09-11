import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './Context/MyContextAPI';

export const MyUseEffect = () => {

  const [count, setCount] = useState(0);

  const {user} = useContext(GlobalContext)
  console.log(user)

  const [secondCount, setSecondCount] = useState(0);

  useEffect(()=>{
    console.log(secondCount);
    setSecondCount(secondCount+4);

  },[count])


  return (
    <div>
        <h1>MyUseEffect</h1>
        <h2>Welcome {user.firstName}!</h2>
        <p>{count}</p>
      <button className='btn btn-primary' onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}
