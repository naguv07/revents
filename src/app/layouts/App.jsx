import React from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDetailed from '../../features/events/eventDetailed.jsx/EventDetailed';
import EventForm from '../../features/eventForm/EventForm';

function App() {
  return (
    <>
      <Route exact path="/" component={HomePage}/>
      <Route path={'/(.+)'} render={() => (
        <>
          <NavBar />
          <Container className="content-body">
            <Route exact path="/events" component={EventDashboard}/>
            <Route path="/events/:id" component={EventDetailed}/>
            <Route path={["/createevent","/manage/:id"]} component={EventForm}/>
          </Container>
        </>
      ) } />
    </>
  );
}

export default App;
