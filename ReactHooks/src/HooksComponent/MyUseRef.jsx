import React, { useRef } from 'react'
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


export const MyUseRef = () => {
 
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();


 
  const submitHandler = (e)=>{

    e.preventDefault();
    
    console.log(firstName.current.value, lastName.current.value, email.current.value, password.current.value)



  }
 
 
 
 
 
 
  return (
    <div>
      <h1 className='text-center'>MyUseRef</h1>
      <Container>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" ref={firstName} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" ref={lastName} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" ref={email} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={password} />
          </Form.Group>

          <Button type='submit'>Insert</Button>
        </Form>
      </Container>
    </div>
  )
}
