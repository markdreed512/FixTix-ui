import React, { useState } from 'react'
import { Card, Form, Button, FormGroup, Label, Input } from "reactstrap"
import './css/SignUpForm.css'



const NewProjectForm = () => {

    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    

    const sendProjectToDb = (e) => {
        e.preventDefault()
        const data = { 
            title: title, 
            body: description, 
            timestamp: null
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
        }
        fetch('/add_project', options)
            .then(response => response.json)
            .then(json => {
                console.log(json)
                setTitle("")
                setDescription("")
            })
    }
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    return (
        <Card className="form-container">
            <Form onSubmit={sendProjectToDb} className="signup-form">
                <h1 className="text-center">New Project</h1>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" name="title" id="title" onChange={handleTitleChange} value={title}/>
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <br/>
                    <textarea type="text" name="description" id="description"  onChange={handleDescriptionChange} value={description}/>
                </FormGroup>
                <Button className="btn-lg btn-block my-3" id="submit-btn">Create Project</Button>
            </Form>
        </Card>
    )
}

export default NewProjectForm