import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Bakeli from '../../image/Bakeli.png'

const Lost = () => {
  return (
        <div className='text-start w-50 p-5'>
            <Form>
            <img src={Bakeli} className='' height={50} width={50} />
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
