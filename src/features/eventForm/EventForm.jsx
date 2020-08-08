import React from 'react';
import { Form, Media, Button } from 'react-bootstrap';

export default function EventForm({setFormOpen}) {
    return(
           <Media className="bg-white mt-2 p-2 rounded">
               <Media.Body>
                   <h5>Create new Event</h5>
                <Form>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Event title" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Category" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Description" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="City" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Venue" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="date" placeholder="Date" />
                    </Form.Group>
                    <Button className="float-right ml-2" variant="success" type="submit">
                        Submit
                    </Button>
                    <Button className="float-right ml-2" variant="secondary" type="button" onClick={()=>setFormOpen(false)}>
                        Cancel
                    </Button>
                </Form>
               </Media.Body>
           </Media>
    )
}