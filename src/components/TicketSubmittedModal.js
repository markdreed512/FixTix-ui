import React, { useState, useContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TicketContext  from './TickeContext';
import { useHistory } from 'react-router';
import './css/TicketSubmittedModal.css'
const TicketSubmittedModal = (props) => {

                    // give option of add another ticket or tickets
                    // history.push('/tickets')
  const history = useHistory()
  const [ modalOpen, setModalOpen ] = useState(true);
  const [ ticket, setTicket ] = useContext(TicketContext)
  const toggle = () => setModalOpen(!modalOpen);
  const goToTicketForm = () => {
    toggle()
    history.push('/newticket')
  }
  const goToTickets = () => {
    toggle()
    history.push('/tickets')
  }
  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggle} className='ticket-submitted-modal'>
        <ModalHeader toggle={toggle}>{props.heading}</ModalHeader>
        <ModalBody>
            Ticket <span className="ticket-title"> {ticket.title}</span> was created successfully!!
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={goToTicketForm}>Create Another Ticket</Button>{' '}
          <Button color="secondary" onClick={goToTickets}>Go to Tickets</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default TicketSubmittedModal
