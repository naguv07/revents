import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { decrement, increment } from './testReducer';
import { openModal } from '../../app/common/modals/modalReducer';

export default function Sandbox(){
    const dispatch = useDispatch()
    const data = useSelector(state=>state.test.data)
    return(
        <>
            <h1>Testing Sandbox</h1>
            <h3>The data is: {data}</h3>
            <Button variant="success" onClick={()=>dispatch(increment(8))} >Increment</Button> {' '}
            <Button variant="danger" onClick={()=>dispatch(decrement(9))} >Decrement</Button> {' '}
            <Button style={{backgroundColor:"teal"}} 
            onClick={()=>
                    dispatch(openModal({ modalType : 'TestModal', modalProps: { data } } ))
                } 
            >
                Open Modal
            </Button>
        </>
    )
}