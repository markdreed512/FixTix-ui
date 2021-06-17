import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
        <ul>
          {tickets.map((ticket, i)=> {
              return (
                  <div key={i}>
                    <input type="checkbox" checked={ticket.completed} onChange={handleChange}/>
                    <Link to={"/ticket/" + ticket.id}>{ticket.title}</Link>
                  </div>
              )
          })}
        </ul>
    )
}

export default Tickets
