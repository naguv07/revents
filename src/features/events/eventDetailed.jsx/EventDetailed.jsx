import React from 'react';
import { Row, Col } from 'react-bootstrap';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSideBar from './EventDetailedSidebar';
import { useSelector } from 'react-redux';

export default function EventDetailed({match}){
    const event = useSelector(state => state.event.events.find(evt => evt.id === match.params.id))
    return(
        <Row>
            <Col md="8" >
                <EventDetailedHeader event={event} />
                <EventDetailedInfo event={event}/>
                <EventDetailedChat event={event}/>
            </Col>
            <Col md="4" >
                <EventDetailedSideBar attendees={event.attendees}/>
            </Col>
        </Row>
    )
}