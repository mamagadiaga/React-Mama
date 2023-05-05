import React from 'react';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom'; 

const Inscription = () => {
  return (
        <div className='text-start w-50 p-5'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicNom">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" placeholder="Entrer votre nom" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicTel">
                    <Form.Label>Telephone</Form.Label>
                    <Form.Control type="tel" placeholder="Enter votre numero" />
                </Form.Group>
                <Link to="/connexion" className="">S'inscrire</Link>
            </Form>
        </div>
  )
}

export default Inscription