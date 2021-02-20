import React from "react";
import { Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faUser } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
          <Container>
          <LinkContainer to="/">
        <Navbar.Brand>ShopLine</Navbar.Brand>
          </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/cart">
            <Nav.Link> <FontAwesomeIcon icon={faCartPlus} /> Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
            <Nav.Link > <FontAwesomeIcon icon={faUser} /> Sign in</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
