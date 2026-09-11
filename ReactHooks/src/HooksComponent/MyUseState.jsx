import React, { useState } from 'react'
import { userData } from './Context/MyContextAPI';

export const MyUseState = () => {


    // let count = 0;

    const {user} = userData()

    const [isCount, setCount] = useState(0);

    let increment = ()=>{
        // count++;
        setCount(isCount+1);
        console.log(isCount);
    }


  return (
    <div>
        <h1 className='text-center'>MyUseState</h1>
        <h2>Welcome {user.firstName}</h2>

        <p className='text-center'>{isCount}</p>

        <button className='btn btn-primary' onClick={increment}>Increment</button>
    </div>
  )
}
