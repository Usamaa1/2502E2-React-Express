import React, { useEffect, useState } from 'react'

export const MyUseEffect = () => {

  const [count, setCount] = useState(0);

  const [secondCount, setSecondCount] = useState(0);

  useEffect(()=>{
    console.log(secondCount);
    setSecondCount(secondCount+4);

  },[count])


  return (
    <div>
        <h1>MyUseEffect</h1>
        <p>{count}</p>
      <button className='btn btn-primary' onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}
