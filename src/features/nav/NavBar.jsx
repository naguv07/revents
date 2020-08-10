import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';

export default function NavBar ({setFormOpen}){
    const history = useHistory()
    const [authenitcated,setAuthenitcated] = useState(false)

    const handleSignOut = () =>{
        setAuthenitcated(false)
        history.push("/")
    }

    return(
        <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark" >
            <Container>
                <Navbar.Brand as={NavLink} exact to="/">
                    <img
                        src="/assets/logo.png"
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
                        <Nav.Link as={NavLink} to="/events">Events</Nav.Link>
                        {authenitcated &&
                        <Nav.Link as={NavLink} to="/createevent"><Button type="button" variant="success">Create Event</Button></Nav.Link>
                        }
                    </Nav>
                    <Nav>
                        {
                            authenitcated
                            ?
                            <SignedInMenu handleSignOut={handleSignOut} />
                            :
                            <SignedOutMenu setAuthenitcated={setAuthenitcated}/>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}