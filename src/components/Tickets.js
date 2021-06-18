import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import './css/Tickets.css'
const Tickets = () => {
    const [ tickets, setTickets ] = useState([])
    useEffect(() => {
        fetch('/tickets')
            .then(res => res.json())
            .then(data => {
                setTickets(data.tickets)
            })
    },[])

    return (
        <Table className="tix-container" dark>
            <thead>
                <tr>
                    <th></th>
                    <th>#</th>
                    <th>Ticket Name</th>
                    <th>Status</th>
                    <th>Assigned To</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
          {tickets.map((ticket, i)=> {
              return (
                <tr key={i}>
                    <td>{ticket.high_priority? <span className="priority">!</span> : ""}</td>
                    <td>{ticket.id}</td>
                    <td>{ticket.title}</td>
                    <td>{ticket.status}</td>
                    <td>{ticket.assigned_to}</td>
                    <td><Link to={"/ticket/" + ticket.id}>view ticket</Link></td>
                </tr>
              )
          })}
          </tbody>
        </Table>
    )
}

export default Tickets
