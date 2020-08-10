import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import EventList from '../eventList/EventList';
import {sampleData} from '../../../app/api/sampleData'
const EventDashboard = () => {
    const [events,setEvent] = useState(sampleData)
    
    // const createEvent = values =>{
    //     setEvent([...events,values])
    // }

    // const handleUpdateEvent = event =>{
    //     setEvent(events.map(evt=>evt.id === event.id?event:evt))
    // }
    
    const handleDeleteEvent = eventId =>{
        setEvent(events.filter(evt=>evt.id !== eventId ))
    }
    

    return(
        <Row>
            <Col>
                <EventList events={events} deleteEvent={handleDeleteEvent} />
            </Col>
            <Col md="4">
                <h2>Event Filters</h2>
            </Col>
        </Row>
    )
}

export default EventDashboard;