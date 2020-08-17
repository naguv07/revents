import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';
import { useSelector } from 'react-redux';

export default function NavBar ({setFormOpen}){
    const {authenticated} = useSelector(state=>state.auth)

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
                        <Nav.Link as={NavLink} to={process.env.PUBLIC_URL+"/sandbox"}>Sandbox</Nav.Link>
                        {authenticated &&
                        <Nav.Link as={NavLink} to={process.env.PUBLIC_URL+"/createevent"}><Button type="button" variant="success">Create Event</Button></Nav.Link>
                        }
                    </Nav>
                    <Nav>
                        {
                            authenticated
                            ?
                            <SignedInMenu />
                            :
                            <SignedOutMenu/>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}