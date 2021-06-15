import React from 'react'
import { Card, Form, Button, FormGroup, Label, Input} from "reactstrap"
import './css/SignUpForm.css'

const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/signup').then(res => res.json()).then(data => console.log(data))
}
const SignUpForm = () => {
    return (
        <Card id="container">
        <Form onSubmit={handleSubmit} id="signup-form">
            <h1 className="text-center">Create Account</h1>
            <FormGroup>
                <Label for="email" >Email</Label>
                <Input type="email" name="email" id="email" autoFocus/>
            </FormGroup>
            <FormGroup>
                <Label for="username">Username</Label>
                <Input type="username" name="username" id="username" placeholder="" />
            </FormGroup>
            <FormGroup>
                <Label for="password1">Password</Label>
                <Input type="password" name="password1" id="password1" placeholder="" />
            </FormGroup>
            <FormGroup>
            <Label for="password2">Password</Label>
                <Input type="password" name="password2" id="passwor21" placeholder="" />
            </FormGroup>
            <Button className="btn-lg btn-block my-3" id="submit-btn">Submit</Button>
        </Form>
        </Card>
    )
}

export default SignUpForm