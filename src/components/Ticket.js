import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
function Ticket() {
    let { id } = useParams();
    const [ ticket, setTicket ] = useState({})
    useEffect(() => {
        fetch(`/ticket/${id}`)
            .then(res => res.json())
            .then(data => {
                setTicket(data)
                console.log(data)
            })
    },[])
    return (
        <div>
            <li>title: {ticket.title}</li>
        </div>
    )
}

export default Ticket
