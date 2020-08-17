import React from 'react';
import ModalWrapper from '../../app/common/modals/modalWrapper'
export default function TestModal({data}){
    return(
        <ModalWrapper size="sm" header="Test Header">
            <div>The data is : {data}</div>
        </ModalWrapper>
    )
}