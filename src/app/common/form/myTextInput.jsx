import React from 'react';
import { useField } from 'formik';
import { Form } from 'react-bootstrap';

export default function MyTextInput({label,...pros}){
    const [field,meta] =  useField(pros)
    return(
        <Form.Group controlId={pros.name}>
            {label && <Form.Label>{label}</Form.Label> }
            <Form.Control {...field} {...pros} isInvalid={meta.touched && !!meta.error} isValid={meta.touched && !meta.error}/>
            {meta.touched && meta.error ? (
            <Form.Control.Feedback type="invalid">
            {meta.error} 
            </Form.Control.Feedback>
            ) : null
            }

        </Form.Group>
    )
}