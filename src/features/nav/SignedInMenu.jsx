import React from 'react';
import { Dropdown,DropdownButton } from 'react-bootstrap';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUser } from '../auth/authActions';

export default function SignedInMenu(){
    const dispatch = useDispatch()
    const history = useHistory()
    const {currentUser} = useSelector(state=>state.auth)
    return(
        <>
            <DropdownButton
                alignRight
                title={currentUser.email}
                id="dropdown-menu-align-right"
                color="danger"
                variant="outline-light"
                >
                   <Dropdown.Item as={Link} to={process.env.PUBLIC_URL+"/createevent"}>
                        <AddIcon/> {' '}
                        Create Event
                    </Dropdown.Item>
                    <Dropdown.Item >
                        <AccountCircleIcon/> {' '}
                        My Profile
                    </Dropdown.Item>
                    <Dropdown.Item  onClick={()=>{
                        dispatch(signOutUser())
                        history.push(process.env.PUBLIC_URL+"/")
                    }}>
                        <PowerSettingsNewIcon/> {' '}
                        Logout
                    </Dropdown.Item>
            </DropdownButton>
        </>
    )
}