
import React, {useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import logo from '../layouts/logo.png';

export default function NavBar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('perfil');
        navigate('/');
    };

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <img
                        src={logo} 
                        alt="Logo"
                        className="rounded-circle me-2"
                        width="40"
                        height="40"
                    />
                    <Navbar.Brand>Sistema de Inventario</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Button variant="outline-danger" className="ms-2" onClick={handleLogout}>
                        Cerrar Sesión
                    </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
      );
    };
    