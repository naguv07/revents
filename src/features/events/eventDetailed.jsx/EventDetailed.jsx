import React from 'react';
import { Row, Col } from 'react-bootstrap';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSideBar from './EventDetailedSidebar';

export default function EventDetailed(){
    return(
        <Row>
            <Col md="8" >
                <EventDetailedHeader/>
                <EventDetailedInfo/>
                <EventDetailedChat/>
            </Col>
            <Col md="4" >
                <EventDetailedSideBar/>
            </Col>
        </Row>
    )
}