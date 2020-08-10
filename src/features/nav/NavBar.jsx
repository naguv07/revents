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
        history.push(process.env.PUBLIC_URL+"/")
    }

    return(
        <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark" >
            <Container>
                <Navbar.Brand as={NavLink} exact to={process.env.PUBLIC_URL+"/"}>
                    <img
                        src={process.env.PUBLIC_URL+"/assets/logo.png"}
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
                        <Nav.Link as={NavLink} to={process.env.PUBLIC_URL+"/events"}>Events</Nav.Link>
                        {authenitcated &&
                        <Nav.Link as={NavLink} to={process.env.PUBLIC_URL+"/createevent"}><Button type="button" variant="success">Create Event</Button></Nav.Link>
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