import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { auth } from '../servicios/service';

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();

      const logData = {
        username: email,
        password: password
      };

      changeComponent(logData);
  };

  const changeComponent = async (data) =>{
    const response = await auth(data);
        
    if (response.success) {
      navigate('/dash'); // Navegar a /dash si es exitoso
    } else {
      console.log('Error en el login');
    }
  }

  return (
    <>
      <Container className='d-flex justify-content-center align-items-center min-vh-100'>
        <Card style={{width: '30%'}} className='p-4 shadow-sm'>
          <Card.Body>
            <h2 className='text-center mb-4'>Iniciar Sesión</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId='formEmail' className='mb-3'>
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Correo Electrónico'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId='formPassword' className='mb-3'>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Contraseña'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant='primary' type='submit' className='w-100 mb-3'>
                Ingresar
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Login;