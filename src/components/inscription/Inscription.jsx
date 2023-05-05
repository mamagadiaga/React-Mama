import React from 'react';
import Form from 'react-bootstrap/Form';
import Bakeli from '../../image/Bakeli.png'
import {Link} from 'react-router-dom'; 

const Inscription = () => {
  return (
        <div className='text-start w-50 p-5'>
            <Form>
            <img src={Bakeli} className='' height={50} width={50} />
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
                <Link to="#" className="">S'inscrire</Link>
                <Link to="/connexion" className="float-end">Vous avez deja un compte?</Link>
            </Form>
        </div>
  )
}

export default Inscription
