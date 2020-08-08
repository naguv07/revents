import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import EventList from '../eventList/EventList';
import EventForm from '../../eventForm/EventForm';
import {sampleData} from '../../../app/api/sampleData'
const EventDashboard = ({formOpen,setFormOpen}) => {
    const [events,setEvent] = useState(sampleData)
    return(
        <Row>
            <Col>
                <EventList events={events}/>
            </Col>
                {formOpen&&
                    <Col md="4">
                        <EventForm setFormOpen={setFormOpen} />
                    </Col>
                }
        </Row>
    )
}

export default EventDashboard;