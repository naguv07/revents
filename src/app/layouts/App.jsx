import React from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'react-bootstrap';
import { Route, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDetailed from '../../features/events/eventDetailed.jsx/EventDetailed';
import EventForm from '../../features/eventForm/EventForm';
import Sandbox from '../../features/sandbox/sandbox';

function App() {
  const {key} = useLocation()
  return (
    <>
      <Route exact path={process.env.PUBLIC_URL+"/"} component={HomePage}/>
      <Route path={process.env.PUBLIC_URL+'/(.+)'} render={() => (
        <>
          <NavBar />
          <Container className="content-body">
            <Route exact path={process.env.PUBLIC_URL+"/events"} component={EventDashboard}/>
            <Route path={process.env.PUBLIC_URL+"/events/:id"} component={EventDetailed}/>
            <Route path={process.env.PUBLIC_URL+"/sandbox"} component={Sandbox}/>
            <Route path={[process.env.PUBLIC_URL+"/createevent",process.env.PUBLIC_URL+"/manage/:id"]} key={key} component={EventForm}/>
          </Container>
        </>
      ) } />
    </>
  );
}

export default App;
