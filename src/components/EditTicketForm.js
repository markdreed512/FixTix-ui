import React, { useState, useEffect, useContext } from 'react'
import TicketContext from './TickeContext'
import { Card, Form, Button, FormGroup, Label, Input, Dropdown, DropdownMenu, DropdownItem, DropdownToggle} from "reactstrap"
import TicketSubmittedModal from './TicketSubmittedModal'
import { useHistory } from 'react-router';

function EditTicketForm() {
    const [ ticket ] = useContext(TicketContext)
    const [ modalIsOpen ] = useState(false)
    const [ dropdownOpen, setDropdownOpen ] = useState(false);
    const [ assignedTo ,setAssignedTo] = useState("unassigned")
    const [ highPriority, setHighPriority ] = useState(false)
    const [ users, setUsers ] = useState([])
    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ comments, setComments ] = useState("")
    const history = useHistory()
    useEffect(() => {
        setTitle(ticket.title)
        setDescription(ticket.description)
        setComments(ticket.comments)
        setHighPriority(ticket.high_priority)
        setAssignedTo(ticket.assigned_to)
    },[ticket])
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            title: title,
            body: description,
            assigned_to: assignedTo,
            comments: comments,
            high_priority: highPriority
        }
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch('/edit_ticket/' + ticket.id, options)
            .then(res => {
                console.log(res)
                history.push('/ticket/' + ticket.id)
            })
    }
    const handleTitleChange = (e) => setTitle(e.target.value)
    const handleDescriptionChange = (e) => setDescription(e.target.value)
    const handlePriorityChange = () => setHighPriority(!highPriority)
    const handleCommentsChange = (e) => setComments(e.target.value)
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
                        <Input type="text" name="title" id="title"  onChange={handleTitleChange} value={title}/>
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
                        <Input type="checkbox" name="priority" id="priority" onChange={handlePriorityChange} checked={highPriority}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="comments">Comments</Label>
                        <Input type="textarea" name="comments" id="comments" onChange={handleCommentsChange} value={comments}/>
                    </FormGroup>
                    <Button className="btn-lg btn-block my-3" id="submit-btn">Save Edits</Button>
                </Form>
            </Card>
        </>
    )
}

export default EditTicketForm
