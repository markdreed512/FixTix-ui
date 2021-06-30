import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
//gets user id from global user
//fetches tickets from /tickets/id
function MyTickets() {
    let { id } = useParams();
    const [ tickets, setTickets ] = useState([])
    useEffect(() => {
        fetch("./" + id) // why does this work? shouldn't the route be './tickets/id'???
            .then(res => res.json())
            .then(json => {
                setTickets(json)
            })
    })
    return (
        <div>
            {tickets.map((ticket, i) => {
                return (
                    <li key={i}>{ticket.title}</li>
                )
            })}
        </div>
    )
}

export default MyTickets
