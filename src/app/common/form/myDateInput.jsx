import React from 'react';
import { useField, useFormikContext } from 'formik';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
export default function MyDateInput({label,...props}){
    const {setFieldValue} = useFormikContext()
    const [field,meta] =  useField(props)
    return(
        <Form.Group controlId={props.name}>
            {label && <Form.Label>{label}</Form.Label> }
            <DatePicker 
             {...field} 
             {...props} 
             selected={(field.value && new Date(field.value)) || null}
             onChange={value=>setFieldValue(field.name,value)}
            />
            {meta.touched && meta.error ? (
            <Form.Control.Feedback type="invalid">
            {meta.error} 
            </Form.Control.Feedback>
            ) : null
            }

        </Form.Group>
    )
}