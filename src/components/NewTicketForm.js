import React, { useState, useEffect, useContext } from 'react'
import { Card, Form, Button, FormGroup, Label, Input, Dropdown, DropdownMenu, DropdownItem, DropdownToggle} from "reactstrap"
import './css/SignUpForm.css'
import UserContext from './UserContext'
import TicketSubmittedModal from './TicketSubmittedModal'
import TicketContext from './TickeContext'

const NewTicketForm = () => {

    const [ dropdownOpen, setDropdownOpen ] = useState(false);
    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ assignedTo ,setAssignedTo] = useState("unassigned")
    const [ highPriority, setHighPriority ] = useState(false)
    const [ users, setUsers ] = useState([])
    const [ modalIsOpen, setModalIsOpen ] = useState(false)
    const [ user, setUser ] = useContext(UserContext)
    const [ ticket, setTicket ] = useContext(TicketContext)

    useEffect(() => {
        fetch('/users')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setUsers(data.users)
            })
    }, [])

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("user id: ..." + user.id)
        const data = { 
            title: title, 
            body: description, 
            status: "created",
            high_priority: highPriority,
            comments: "none",
            user_id: user.id, //when user logs in, set user_id at app.js, pass as prop to comp's
            assigned_to: assignedTo,
            timestamp: null
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
        }
        fetch('/add_ticket', options)
            .then(response => response.text())
            .then(text => {
                console.log(text)
                setTitle("")
                setDescription("")
                setHighPriority(false)
                if(text === 'Ticket Added'){
                    setTicket(data)
                    setModalIsOpen(true)
                }
            })
    }
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    const handlePriorityChange = (e) => {
        setHighPriority(!highPriority)
    }
    return (
        <>
        { modalIsOpen? <TicketSubmittedModal heading="Success!!" /> : null }
            <Card className="form-container">
                <Form onSubmit={handleSubmit} className="signup-form">
                    <h1 className="text-center">New Ticket</h1>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" id="title" onChange={handleTitleChange} value={title}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="text" name="description" id="description"  onChange={handleDescriptionChange} value={description}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="assigned-to">Assign to</Label>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle} size="sm">
                            <DropdownToggle caret>
                                Users
                            </DropdownToggle>
                            <DropdownMenu>
                                {users.map((user,i) => {
                                    return (
                                        <DropdownItem key={i} onClick={()=> setAssignedTo(user.username)}>{user.username}</DropdownItem>
                                    )
                                })}
                            </DropdownMenu>
                        </Dropdown>
                    </FormGroup>
                    <FormGroup>
                        <Label for="priority">High Priority</Label>
                        <Input type="checkbox" name="priority" id="priority" onChange={handlePriorityChange} value={highPriority}/>
                    </FormGroup>
                    <Button className="btn-lg btn-block my-3" id="submit-btn">Create Ticket</Button>
                </Form>
            </Card>
        </>
    )
}

export default NewTicketForm