import React from 'react';
import { Media, ListGroup } from 'react-bootstrap';
import InfoIcon from '@material-ui/icons/Info';
import EventIcon from '@material-ui/icons/Event';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {format} from 'date-fns';
export default function EventDetailedInfo({event}){
    return(
        <Media>
            <ListGroup className="w-100 mt-2" >
                <ListGroup.Item>
                    <InfoIcon className="mr-3"/> {event.description}
                </ListGroup.Item>
                <ListGroup.Item>
                    <EventIcon className="mr-3"/> {format(event.date,'MMMM d, yyyy h:mm a')}
                </ListGroup.Item>
                <ListGroup.Item>
                    <LocationOnIcon className="mr-3"/> {event.city}
                </ListGroup.Item>
            </ListGroup>
        </Media>
            
    )
}