import React, { useState } from 'react';
import { Form, Media, Button } from 'react-bootstrap';
import cuid from 'cuid';

export default function EventForm({setFormOpen,createEvent,selectedEvent,handleUpdateEvent}) {
    const initialValues = selectedEvent ?? {
        'title' : '',
        'category' : '',
        'description' : '',
        'venue' : '',
        'city' : '',
        'date' : '',
    }
    const [values,setValues] = useState(initialValues)

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setValues({...values,[name] : value})
    }
    const handleFormSubmit =(e) =>{
        e.preventDefault()
        selectedEvent ? handleUpdateEvent({...selectedEvent,...values}):
        createEvent({...values,id:cuid,attendees:[],hostPhotoURL:'assets/user.png',hostedBy:'Bob'})
        setValues(initialValues)
    }

    return(
           <Media className="bg-white mt-2 p-2 rounded">
               <Media.Body>
                   <h5>{selectedEvent ? 'Edit the Event':'Create new Event'}</h5>
                <Form onSubmit={(e) => handleFormSubmit(e)}>
                    <Form.Group>
                        <Form.Control 
                        type="text" 
                        name="title"
                        value={values.title} 
                        onChange={(e)=>handleChange(e)}
                        placeholder="Event title" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                        type="text" 
                        name="category"
                        value={values.category} 
                        onChange={(e)=>handleChange(e)}
                        placeholder="Category" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                        type="text" 
                        name="description"
                        value={values.description} 
                        onChange={(e)=>handleChange(e)}
                        placeholder="Description" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                        type="text" 
                        name="city"
                        value={values.city} 
                        onChange={(e)=>handleChange(e)}
                        placeholder="City" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                        type="text" 
                        name="venue"
                        value={values.venue} 
                        onChange={(e)=>handleChange(e)}
                        placeholder="Venue" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                        type="date" 
                        name="date"
                        value={values.date} 
                        onChange={(e)=>handleChange(e)}
                        placeholder="Date" />
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