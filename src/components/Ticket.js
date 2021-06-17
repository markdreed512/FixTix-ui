import React, { useState, useEffect } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, ButtonGroup } from 'reactstrap'
import { useParams } from "react-router-dom";
import './css/Ticket.css'
function Ticket() {
    let { id } = useParams();
    console.log("id: " + id)
    const [ ticket, setTicket ] = useState({})
    useEffect(() => {
        
        fetch(`/ticket/${id}`)
            .then(res => res.json())
            .then(data => {
                setTicket(data)
            })
    },[])
    return (
        // Created by should get username by ticket.user_id
        <Card className="my-card">
            <CardBody>
                <CardTitle  className="ticket-title">{ticket.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted">{`Created by user ${ticket.user_id}`}</CardSubtitle>
                <hr/>
                <CardText>{ticket.body}</CardText>
                <hr/>
                <CardText>{`Assigned to: ${ticket.assigned_to}`}</CardText>
                <hr/>
                <CardText>Comments:</CardText>
                <ButtonGroup>
                    <Button className="ticket-btn">Edit Ticket</Button>
                    <Button className="ticket-btn">Mark as Complete</Button>
                    <Button className="ticket-btn">Add Comment</Button>
                </ButtonGroup>
            </CardBody>
        </Card>
    )
}

export default Ticket
