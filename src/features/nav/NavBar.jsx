import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

export default function NavBar ({loggedIn,setFormOpen}){
    return(
        <Navbar sticky="top" collapseOnSelect expand="lg" variant="dark" >
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="assets/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="logo"
                        style={{marginRight:15}}
                        />
                        Re-events
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Events</Nav.Link>
                        <Nav><Button type="button" onClick={() =>setFormOpen(true)} className="float-right" variant="success">Create Event</Button></Nav>
                    </Nav>
                    <Nav>
                        {
                            (loggedIn === undefined)
                            ?
                            <>
                        <Nav.Link href="#pricing">Login</Nav.Link>
                        <Nav.Link href="#pricing">Sign Up</Nav.Link>
                        </>
                        :
                        <>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}