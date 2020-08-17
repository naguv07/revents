import React from 'react';
import { useField } from 'formik';
import { Form } from 'react-bootstrap';

export default function MyTextArea({label,...pros}){
    const [field,meta] =  useField(pros)
    return(
        <Form.Group>
            {label && <Form.Label>{label}</Form.Label> }
            <Form.Control as="textarea" rows="3" {...field} {...pros} isInvalid={meta.touched && !!meta.error} isValid={meta.touched && !meta.error}/>
            {meta.touched && meta.error ?(
            <Form.Control.Feedback type="invalid">
            {meta.error}
            </Form.Control.Feedback>
            ) : null
            }

        </Form.Group>
    )
}