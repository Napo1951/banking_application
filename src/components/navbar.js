import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import '../App.css'

function NavBar(){
    return(
        <Navbar className="color-nav" expand="lg">
            <Container>
                <Navbar.Brand>
                <a class="navbar-brand" href="#">LesNapo<span class="text-warning">Bank</span></a>
                </Navbar.Brand>
                <h5 className="sticky-top">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                        <LinkContainer to="createaccount"><Nav.Link>Create Account</Nav.Link></LinkContainer>
                        <LinkContainer to="alldata"><Nav.Link>All Data</Nav.Link></LinkContainer>
                        <LinkContainer to="deposit"><Nav.Link>Deposit</Nav.Link></LinkContainer>
                        <LinkContainer to="withdraw"><Nav.Link>Withdraw</Nav.Link></LinkContainer>
                        <LinkContainer to="login"><Nav.Link>Login</Nav.Link></LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                </h5>
            </Container>
        </Navbar>
    );
    
}

export default NavBar;