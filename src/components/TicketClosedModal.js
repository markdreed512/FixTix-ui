import React, { useState, useContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TicketContext  from './TickeContext';
import { useHistory } from 'react-router';
import './css/TicketSubmittedModal.css'

const TicketClosedModal = () => {
  const history = useHistory()
  const [ modalOpen, setModalOpen ] = useState(true);
  const [ ticket ] = useContext(TicketContext)
  const toggle = () => setModalOpen(!modalOpen);

  const goToTickets = () => {
    toggle()
    history.push('/tickets')
  }
  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggle} className='ticket-submitted-modal'>
        <ModalHeader toggle={toggle}>Ticket Closed</ModalHeader>
        <ModalBody>
            Ticket <span className="ticket-title"> {ticket.title}</span> was closed
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={goToTickets}>OK</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default TicketClosedModal
