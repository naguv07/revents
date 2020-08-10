import React from 'react';
import { Media, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function EventDetailedHeader(){
    const eventImageStyle = {
        filter: 'brightness(30%)',
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
                <Image src={process.env.PUBLIC_URL+"/assets/categoryImages/music.jpg"} fluid style={eventImageStyle}/>
                <Media.Body style={eventImageTextStyle}>
                    <h3>Event Title</h3>
                    <p>Event Date</p>
                    <p>Hosted By Bob</p>
                </Media.Body>
            </Media>
            <Media className="p-2 bg-white">
                <Media.Body>
                    <Button variant="secondary" >Cancel My Place </Button> {' '}
                    <Button variant="success" >Join This Event </Button>
                    <Button as={Link} to={`/manage`} variant="warning text-white" className="float-right" >Manage Event </Button>
                </Media.Body>
            </Media>
        </>
    )
}