import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import EventList from '../eventList/EventList';
import EventForm from '../../eventForm/EventForm';
import {sampleData} from '../../../app/api/sampleData'
const EventDashboard = ({formOpen,setFormOpen,selectEvent,selectedEvent}) => {
    const [events,setEvent] = useState(sampleData)
    
    const createEvent = values =>{
        setEvent([...events,values])
    }

    const handleUpdateEvent = event =>{
        console.log('Update Event')
        setEvent(events.map(evt=>evt.id === event.id?event:evt))
        setFormOpen(false)
        selectEvent(null)
    }
    
    const handleDeleteEvent = eventId =>{
        setEvent(events.filter(evt=>evt.id !== eventId ))
    }
    

    return(
        <Row>
            <Col>
                <EventList events={events} selectEvent={selectEvent} deleteEvent={handleDeleteEvent} />
            </Col>
                {formOpen&&
                    <Col md="5">
                        <EventForm 
                        setFormOpen={setFormOpen} 
                        createEvent={createEvent} 
                        selectedEvent={selectedEvent} 
                        key={selectedEvent ? selectedEvent.id : null}
                        handleUpdateEvent= {handleUpdateEvent}
                        />
                    </Col>
                }
        </Row>
    )
}

export default EventDashboard;