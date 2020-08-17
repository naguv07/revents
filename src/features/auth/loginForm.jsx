import React from 'react';
import ModalWrapper from '../../app/common/modals/modalWrapper'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../app/common/form/myTextInput';
import { Button, Spinner } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { signInUser } from './authActions';
import { closeModal } from '../../app/common/modals/modalReducer';
export default function LoginForm(){
    const dispatch = useDispatch()
    return(
        <>
            <ModalWrapper size="sm" header="Sign in to Re-vents">
                <Formik
                     initialValues={{
                        email : "",
                        password : "",
                        }}  
                    validationSchema={Yup.object({
                        email : Yup.string().required().email(),
                        password : Yup.string().required()
                    })}

                    onSubmit={(values,{setSubmitting})=>{
                        dispatch(signInUser(values))
                        setSubmitting(false)
                        dispatch(closeModal())
                    }
                }
                >
                    {({isSubmitting,isValid,dirty})=>(
                        <Form>
                            <MyTextInput name="email" placeholder="Email Address" />
                            <MyTextInput name="password" type="password" placeholder='password' />
                            <Button type="submit" variant="success"
                                disabled={isSubmitting || !dirty || !isValid}
                                >
                                {!isSubmitting ? 'Login' :<Spinner animation="border" variant="light" />}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </ModalWrapper>
        </>
    )
}