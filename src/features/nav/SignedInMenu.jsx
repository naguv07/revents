import React from 'react';
import { Dropdown,DropdownButton } from 'react-bootstrap';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Link } from 'react-router-dom';
export default function SignedInMenu({setAuthenitcated,handleSignOut}){
    return(
        <>
            <DropdownButton
                alignRight
                title="nagu"
                id="dropdown-menu-align-right"
                color="danger"
                variant="outline-light"
                icon={AccountCircleIcon}
                >
                   <Dropdown.Item as={Link} to={process.env.PUBLIC_URL+"/createevent"}>
                        <AddIcon/> {' '}
                        Create Event
                    </Dropdown.Item>
                    <Dropdown.Item >
                        <AccountCircleIcon/> {' '}
                        My Profile
                    </Dropdown.Item>
                    <Dropdown.Item  onClick={handleSignOut}>
                        <PowerSettingsNewIcon/> {' '}
                        Logout
                    </Dropdown.Item>
            </DropdownButton>
        </>
    )
}