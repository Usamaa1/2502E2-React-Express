import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from 'react-hook-form';


export const MyReactHookForm = () => {


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const submitHandler = (data) => {
        console.log(data);
    }

    console.log(watch("name"))


    return (
        <div className='container'>
            <h1 className='text-center my-3'>React Hook Form</h1>
            <Form onSubmit={handleSubmit(submitHandler)}>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Enter your Name" {...register('name')} />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" {...register('email', { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} />
                         <p>{errors.email  && <span>Invalid email pattern</span>}</p>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" {...register('password', {pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/ })} />
                        <p>{errors.password && <span>Invalid password pattern</span>}</p>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Age</Form.Label>
                    <Form.Control {...register('age', { min: 18, max: 60 })} />
                     <p>{errors.age && <span>Age should be between 18 to 60</span>}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control {...register('phone', { pattern: /^[0-9]{11}$/ })} />
                     <p>{errors.phone && <span>Phone should be number and 11 in length</span>}</p>

                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>





        </div>
    )
}
