import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';

const Connexion = () => {
  return (
        <div className='text-start w-50 p-5'>
              <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Link to="/lost" className="">Mot de passe oublié</Link>
     <Row className='float-end'>
     <Link to="/bienvenue" className="">Se connecter</Link>
     </Row>
     
       <Row className='mt-3'>
       <Link to="/inscription" className="">S'inscrire</Link>
       </Row>
    </Form>
        </div>
  )
}

export default Connexion
