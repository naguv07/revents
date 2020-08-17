import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { openModal } from '../../app/common/modals/modalReducer';
import { useDispatch } from 'react-redux';

export default function SignedOutMenu(){
    const dispatch = useDispatch()
    return(
        <>
            <Nav.Link 
                onClick={()=>dispatch(openModal({modalType : 'LoginForm'}))}
                >
                    <Button type="button" variant="outline-light">Login</Button>
            </Nav.Link>
            <Nav.Link href="#pricing"><Button type="button" variant="outline-light">Sign UP</Button></Nav.Link>
        </>
    )
}