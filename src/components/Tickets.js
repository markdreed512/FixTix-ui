import React, { useEffect, useState } from 'react'

function Tickets() {
    const [ tickets, setTickets ] = useState([])
    useEffect(() => {
        fetch('/tickets')
            .then(res => res.json())
            .then(data => {
                setTickets(data.tickets)
            })
    },[])
    
    return (
        <ul>
          {tickets.map(ticket=> {
              return (
                  <li>{ticket.title}</li>
              )
          })}
        </ul>
    )
}

export default Tickets
