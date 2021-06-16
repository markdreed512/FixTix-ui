import React from 'react'
import { Card, Form, Button, FormGroup, Label, Input} from "reactstrap"
import './css/SignUpForm.css'

const handleSubmit = (e) => {
    e.preventDefault()
   console.log("submitting...")
}
const NewTicketForm = () => {
    return (
        <Card className="form-container">
            <Form onSubmit={handleSubmit} className="signup-form">
                <h1 className="text-center">New Ticket</h1>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="username" name="username" id="username" />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" />
                </FormGroup>
                <Button className="btn-lg btn-block my-3" id="submit-btn">Log In</Button>
            </Form>
        </Card>
    )
}

export default NewTicketForm