import React from 'react';
import { useField } from 'formik';
import { Form } from 'react-bootstrap';

export default function MySelectInput({label,...props}){
    const [field,meta,helpers] =  useField(props)
    return(
        <Form.Group controlId={props.name}>
            {label && <Form.Label>{label}</Form.Label> }
            <Form.Control 
                as="select" 
                custom
                value={field.value || null}
                onChange={(e)=>helpers.setValue(e.target.value)}
                onBlur={()=>helpers.setTouched(true)}
                {...props} 
                isInvalid={meta.touched && !!meta.error} 
                isValid={meta.touched && !meta.error}>
                {props.options.map(opt=>(
                    <option 
                    key={opt.key}
                    value={opt.value}>{opt.text}</option>
                ))}
            </Form.Control>
            {meta.touched && meta.error ? (
            <Form.Control.Feedback type="invalid">
            {meta.error} 
            </Form.Control.Feedback>
            ) : null
            }

        </Form.Group>
    )
}