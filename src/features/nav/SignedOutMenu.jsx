import React from 'react';
import { Nav } from 'react-bootstrap';

export default function SignedOutMenu({setAuthenitcated}){
    return(
        <>
            <Nav.Link onClick={()=>setAuthenitcated(true)}>Login</Nav.Link>
            <Nav.Link href="#pricing">Sign Up</Nav.Link>
        </>
    )
}