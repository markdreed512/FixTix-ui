import React, { useState, useEffect, useContext } from 'react'
import TicketContext from './TickeContext'
import { Card, Form, Button, FormGroup, Label, Input, Dropdown, DropdownMenu, DropdownItem, DropdownToggle} from "reactstrap"
import TicketSubmittedModal from './TicketSubmittedModal'

function EditTicketForm() {
    const [ ticket, setTicket ] = useContext(TicketContext)
    const [ modalIsOpen, setModalIsOpen ] = useState(false)
    const [ dropdownOpen, setDropdownOpen ] = useState(false);
    const [ assignedTo ,setAssignedTo] = useState("unassigned")
    const [ highPriority, setHighPriority ] = useState(false)
    const [ users, setUsers ] = useState([])
    const handleSubmit = (e) => {
        
    }
    const handleTitleChange = (e) => {}
    const handleDescriptionChange = (e) => {}
    const handlePriorityChange = (e) => {}
    const toggle = () => setDropdownOpen(prevState => !prevState);

    useEffect(() => {
        fetch('/users')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setUsers(data.users)
            })
    }, [])
    return (
        <>
        { modalIsOpen && <TicketSubmittedModal heading="Ticket Updated"/> || null }
            <Card className="form-container">
                <Form onSubmit={handleSubmit} className="signup-form">
                    <h1 className="text-center">Edit Ticket</h1>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" id="title"  onChange={handleTitleChange} value={ticket.title}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="text" name="description" id="description"  onChange={handleDescriptionChange} value={ticket.body}/>
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
                        <Input type="checkbox" name="priority" id="priority" onChange={handlePriorityChange} value={ticket.highPriority}/>
                    </FormGroup>
                    <Button className="btn-lg btn-block my-3" id="submit-btn">Save Edits</Button>
                </Form>
            </Card>
        </>
    )
}

export default EditTicketForm
