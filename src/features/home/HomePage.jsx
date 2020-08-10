import React from 'react';
import { Jumbotron, Image, Button, Container } from 'react-bootstrap';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

export default function HomePage({history}){
    return(
        <Jumbotron className="bg-dark text-center text-white  masthead">
            <Container fluid>
                <h1>
                    <Image
                    src={process.env.PUBLIC_URL+"/assets/logo.png"} />
                    Re-events
                </h1>
                <Button variant="outline-light dark" onClick={()=>history.push(process.env.PUBLIC_URL+"/events")}>
                        Get Started
                    <ArrowRightAltIcon/>
                </Button>
            </Container>
        </Jumbotron>
    )
}