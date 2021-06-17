import React, { useState } from 'react'
import { Card, Form, Button, FormGroup, Label, Input, Dropdown, DropdownMenu, DropdownItem, DropdownToggle} from "reactstrap"
import './css/SignUpForm.css'



const NewTicketForm = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    // const [ assignedTo, setAssignedTo ] = useState("")
    const [ highPriority, setHighPriority ] = useState(false)
    
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const sendTicketToDb = (e) => {
        e.preventDefault()
        const data = { 
            title: title, 
            body: description, 
            completed: false,
            user_id: 1,
            assigned_to: "Mark",
            timestamp: null
        }
        console.log(data)
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
        }
        fetch('/add_ticket', options)
            .then(response => response.json)
            .then(json => {
                console.log(json)
                setTitle("")
                setDescription("")
                setHighPriority(false)
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
        <Card className="form-container">
            <Form onSubmit={sendTicketToDb} className="signup-form">
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
                            {/* these items should populate from users in db */}
                            <DropdownItem header>Mark</DropdownItem>
                            
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
    )
}

export default NewTicketForm