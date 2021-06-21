import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const TicketSubmittedModal = (props) => {

                    // give option of add another ticket or tickets
                    // history.push('/tickets')

  const [modalOpen, setModalOpen] = useState(true);

  const toggle = () => setModalOpen(!modalOpen);

  return (
    <div>
      <Modal isOpen={modalOpen} toggle={toggle} className='ticket-submitted-modal'>
        <ModalHeader toggle={toggle}>{props.heading}</ModalHeader>
        <ModalBody>
            ticket <span className="ticket-title"> {props.title}</span> was created successfully!!
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default TicketSubmittedModal
