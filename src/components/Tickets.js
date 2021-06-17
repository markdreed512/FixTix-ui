import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardTitle, Button } from 'reactstrap'
function Tickets() {
    const [ tickets, setTickets ] = useState([])
    useEffect(() => {
        fetch('/tickets')
            .then(res => res.json())
            .then(data => {
                setTickets(data.tickets)
            })
    },[])
    const handleChange = () => {
        console.log("handling change...")
    }
    return (
        <>
          {tickets.map((ticket, i)=> {
              return (
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">{ticket.title}</CardTitle>
                        <Link to={"/ticket/" + ticket.id}>
                            <Button>View Details</Button>
                        </Link>
                    </CardBody>
                </Card>
              )
          })}
        </>
    )
}

export default Tickets
