import React from 'react';
import { Row, Col } from 'react-bootstrap';
import EventList from '../eventList/EventList';
import { useSelector } from 'react-redux';
const EventDashboard = () => {
    const {events} = useSelector(state=>state.event)

    return(
        <Row>
            <Col>
                <EventList events={events} />
            </Col>
            <Col md="4">
                <h2>Event Filters</h2>
            </Col>
        </Row>
    )
}

export default EventDashboard;