import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Lost = () => {
  return (
        <div className='text-start w-50 p-5'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Valider
                </Button>
            </Form>
        </div>
  )
}

export default Lost
