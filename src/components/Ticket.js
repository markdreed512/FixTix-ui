import React, { useState, useEffect } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, ButtonGroup,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { useParams, useHistory } from "react-router-dom";
import './css/Ticket.css'
function Ticket() {
    let { id } = useParams();
    const history = useHistory()
    const [ ticket, setTicket ] = useState({})
    const [ modal, setModal ] = useState(false);
    const [ username, setUsername ] = useState("none")
    const toggle = () => setModal(!modal);
    useEffect(() => {
        fetch(`/ticket/${id}`)
            .then(res => res.json())
            .then(data => {
                setTicket(data)
            })
    },[id])
    useEffect(() => {
        fetch(`/user/${ticket.user_id}`)
            .then(res => res.json())
            .then(data => {
                setUsername(data.username)
            })
    },[ticket.user_id])
    const deleteTicket = () => {
        fetch(`/delete_ticket/${id}`)
            .then(res => history.push('/tickets'))
    }
    const closeTicket = () => {
        // send request (PUT?) to '/close_ticket/<id>'
        fetch(`/close_ticket/${id}`, {method: "PUT"})
            .then(res => console.log(res))
    }
   
    return (
        // Created by should get username by ticket.user_id
        <>
        <Card className="my-card">
            <CardBody>
                <CardTitle  className="ticket-title">{ticket.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted">Created by:<span className="username"> {username}</span></CardSubtitle>
                <hr/>
                <CardText>{`Description: ${ticket.body}`}</CardText>
                <hr/>
                <CardText>{`Assigned to: ${ticket.assigned_to}`}</CardText>
                <hr/>
                <CardText>{`Comments:  ${ticket.comments}`}</CardText>
                <ButtonGroup>
                    <Button className="ticket-btn">Edit Ticket</Button>
                    <Button className="ticket-btn" onClick={closeTicket}>Close Ticket</Button>
                    <Button className="ticket-btn">Add Comment</Button>
                    <Button className="ticket-btn" onClick={toggle}>Delete Ticket</Button>
                </ButtonGroup>
            </CardBody>
        </Card>
        <Modal isOpen={modal} toggle={toggle} className="delete-modal">
        <ModalHeader toggle={toggle}>Delete Ticket?</ModalHeader>
        <ModalBody>
            Are you sure you want to permanantly delete this ticket?        
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={deleteTicket}>Yes, Delete it</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </>
    )
}

export default Ticket
