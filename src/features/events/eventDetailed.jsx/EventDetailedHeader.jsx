import React from 'react';
import { Media, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {format} from 'date-fns';


export default function EventDetailedHeader({event}){
    const eventImageStyle = {
        filter: 'brightness(30%)',
        width : '100%'
    };
    
    const eventImageTextStyle = {
        position: 'absolute',
        bottom: '5%',
        left: '5%',
        height: 'auto',
        color: 'white'
    };
    return(
        <>
            <Media style={{position:"relative",}}>
                <Image src={process.env.PUBLIC_URL+"/assets/categoryImages/"+event.category+".jpg"} style={eventImageStyle}/>
                <Media.Body style={eventImageTextStyle}>
                    <h3>{event.title} </h3>
                    <p>{format(event.date,'MMMM d, yyyy h:mm a')}</p>
                    <p>{event.hostedBy}</p>
                </Media.Body>
            </Media>
            <Media className="p-2 bg-white">
                <Media.Body>
                    <Button variant="secondary" >Cancel My Place </Button> {' '}
                    <Button variant="success" >Join This Event </Button>
                    <Button as={Link} to={process.env.PUBLIC_URL+`/manage/${event.id}`} variant="warning text-white" className="float-right" >Manage Event </Button>
                </Media.Body>
            </Media>
        </>
    )
}