import React from 'react'
import { Button } from 'react-bootstrap'


const SecondComponent = () => {
  return (
    <div>SecondComponent</div>
  )
}

export default SecondComponent


export const ThirdComponent =()=>{
    return (
      <>
      <div>Third Component</div>
        <button className='btn btn-primary'>Click</button>
        <Button variant='success'>Go to another Page</Button>
        <Button variant='warning'>Go to another Page</Button>
      </>
    )           
}

