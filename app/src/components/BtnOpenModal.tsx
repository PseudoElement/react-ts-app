import React from 'react';

export function BtnOpenModal({ openModal }: any){
    return(
        <button className='btn-openModal' onClick={openModal}>Open form</button>
    )
}