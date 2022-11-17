import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import headerLogo from "../assets/headerlogo.png";

function Header() {
  return (
    <>
      <Navbar  variant="light">
        <Container>
          <Navbar.Brand href="/home"><img src={headerLogo}></img></Navbar.Brand>
          <Nav className="justify-content-end" style={{color: 'black'}}>
            <Nav.Link href="/my-courses"><b>My Courses</b></Nav.Link>
            <Nav.Link href="/weekly-schedule"><b>Weekly Schedule</b></Nav.Link>
            <Nav.Link href="/login-activity"><b>Login Activity</b></Nav.Link>
            <Nav.Link href="/my-profile"><b>My Profile</b></Nav.Link>
            <Nav.Link href="/welcome"><b>Logout</b></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header