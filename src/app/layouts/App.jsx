import React, { useState } from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'react-bootstrap';

function App() {
  const [formOpen,setFormOpen] = useState(false)

  return (
    <>
      <NavBar setFormOpen={setFormOpen}/>
      <Container>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
      </Container>
    </>
  );
}

export default App;
