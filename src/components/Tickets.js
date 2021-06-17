import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table, Input } from 'reactstrap'
import './css/Tickets.css'
function Tickets() {
    const [ tickets, setTickets ] = useState([])
    useEffect(() => {
        fetch('/tickets')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTickets(data.tickets)
            })
    },[])
    const handleChange = () => {
        console.log("handling change...")
    }
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
                <tr>
                    <td>{ticket.high_priority? <span className="priority">!</span> : ""}</td>
                    {/* <td><Input type="checkbox" checked={ticket.high_priority} /></td> */}
                    <td scope="row">{ticket.id}</td>
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
