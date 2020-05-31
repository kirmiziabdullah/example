import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #660066; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #ffffff;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #ffffff;
    &:hover { color: white; }
  }
 
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand>Metrobi Quiz</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Soru1</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/Soru2">Soru2</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/Soru3">Soru3</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/Soru4">Soru4</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/Soru5">Soru5</Nav.Link></Nav.Item>


        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)