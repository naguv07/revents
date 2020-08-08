import React, { useState } from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'react-bootstrap';

function App() {
  const [formOpen,setFormOpen] = useState(false)
  
  const [selectedEvent,setSelectedEvent] = useState(null)

  const selectEvent = event =>{
      setSelectedEvent(event)
      setFormOpen(true)
    }
    const handleCreateFormOpen = () =>{
      setFormOpen(true)
      setSelectedEvent(null)
  }
  return (
    <>
      <NavBar setFormOpen={handleCreateFormOpen}/>
      <Container className="m-auto">
        <EventDashboard 
          formOpen={formOpen} 
          setFormOpen={setFormOpen} 
          selectEvent={selectEvent}
          selectedEvent={selectedEvent} 
        />
      </Container>
    </>
  );
}

export default App;
