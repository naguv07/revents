import React from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { closeModal } from './modalReducer';

export default function ModalWrapper({children,size,header}){
    const dispatch = useDispatch()
    return(
        <Modal
        size={size}
        show={true}
        onHide={() => dispatch(closeModal())}
        >
            { header &&
            <Modal.Header closeButton>
            <Modal.Title>
            {header}
            </Modal.Title>
            </Modal.Header>
            }
            <Modal.Body>
            {children}
            </Modal.Body>
      </Modal>
    )
}