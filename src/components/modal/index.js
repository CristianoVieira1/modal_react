import React, {useState} from 'react'

import { Container, Button} from './styles';

export const Modal = ({showModal, setShowModal}) => {

  return (
    <>{ showModal ? <div>Modal</div> : null }</>
  )
}
