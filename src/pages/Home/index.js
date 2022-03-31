import React, {useState} from 'react'

import { Container, Button} from './styles';
import { Modal } from '../../components/modal/index';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  }
  return (
    <Container>
      <Button onClick={openModal}>Abrir Modal</Button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </Container>
  )
}

export default Home