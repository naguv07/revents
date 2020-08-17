import React, { useState } from 'react';
import {  Media, Button } from 'react-bootstrap';
import cuid from 'cuid';
import { Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateEvent, createEvent } from '../events/EventActions';
import { Formik,Form} from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../app/common/form/myTextInput';
import MyTextArea from '../../app/common/form/myTextArea';
import MySelectInput from '../../app/common/form/mySelectInput';
import { categoryData } from '../../app/api/categoryOptions';
import MyDateInput from '../../app/common/form/myDateInput';

export default function EventForm({match,history}) {
    const selectedEvent = useSelector(state=>state.event.events.find(evt=> evt.id === match.params.id))
    const initialValues = selectedEvent ?? {
        'title' : '',
        'category' : '',
        'description' : '',
        'venue' : '',
        'city' : '',
        'date' : '',
    }
    const [values,setValues] = useState(initialValues)
    const dispatch =  useDispatch()
    
    const validationSchema = Yup.object({
        title : Yup.string().required('kuch title daal le bhai'),
        category : Yup.string().required(),
        description : Yup.string().required(),
        venue : Yup.string().required(),
        city : Yup.string().required(),
        date : Yup.string().required(),
    })

    return(
           <Media className="bg-white mt-2 p-2 rounded">
               <Media.Body>
                   <h5>{selectedEvent ? 'Edit the Event':'Create new Event'}</h5>
                   <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={values    =>{
                        selectedEvent ? dispatch(updateEvent({...selectedEvent,...values})):
                        dispatch(createEvent({...values,id:cuid(),attendees:[],hostPhotoURL:'assets/user.png',hostedBy:'Bob'}))
                        history.push(process.env.PUBLIC_URL+"/events")
                    }}
                   >
                       {({isValid,isSubmitting,dirty})=>(
                            <Form className="form">
                                <MyTextInput name="title" placeholder="Event Title" />
                                <MySelectInput name="category" placeholder="Category" options={categoryData}/>
                                <MyTextArea name="description" placeholder="Description" />
                                <MyTextInput name="city" placeholder="City" />
                                <MyTextInput name="venue" placeholder="Venue" />
                                <MyDateInput 
                                    name="date" 
                                    placeholderText="Date"
                                    timeFormat="HH:mm"
                                    showTimeSelect
                                    timeCaption='time'
                                    dateFormat="MMMM d, yyyy h:mm a"
                                    className="form-control"
                                />
                                <Button 
                                loading={isSubmitting}
                                disabled={isSubmitting || !dirty || !isValid}
                                className="float-right ml-2"
                                 variant="success"
                                  type="submit">
                                    Submit
                                </Button>
                                <Button 
                                disabled={isSubmitting}
                                className="float-right ml-2" variant="secondary" type="button" as={Link} to={process.env.PUBLIC_URL+"/events"}>
                                    Cancel
                                </Button>
                            </Form>
                       )}
                   </Formik>
               </Media.Body>
           </Media>
    )
}