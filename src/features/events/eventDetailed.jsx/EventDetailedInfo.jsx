import React from 'react';
import { Media, ListGroup } from 'react-bootstrap';
import InfoIcon from '@material-ui/icons/Info';
import EventIcon from '@material-ui/icons/Event';
import LocationOnIcon from '@material-ui/icons/LocationOn';
export default function EventDetailedInfo(){
    return(
        <Media>
            <ListGroup className="w-100 mt-2" >
                <ListGroup.Item>
                    <InfoIcon className="mr-3"/> Event Description
                </ListGroup.Item>
                <ListGroup.Item>
                    <EventIcon className="mr-3"/> Event Date
                </ListGroup.Item>
                <ListGroup.Item>
                    <LocationOnIcon className="mr-3"/> Event Venue
                </ListGroup.Item>
            </ListGroup>
        </Media>
            
    )
}