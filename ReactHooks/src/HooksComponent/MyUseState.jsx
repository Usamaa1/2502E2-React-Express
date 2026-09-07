import React, { useState } from 'react'

export const MyUseState = () => {


    // let count = 0;

    const [isCount, setCount] = useState(0);

    let increment = ()=>{
        // count++;
        setCount(isCount+1);
        console.log(isCount);
    }


  return (
    <div>
        <h1 className='text-center'>MyUseState</h1>

        <p className='text-center'>{isCount}</p>

        <button className='btn btn-primary' onClick={increment}>Increment</button>
    </div>
  )
}
