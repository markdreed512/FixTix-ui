import React, { useState } from 'react'
import { Card, Form, Button, FormGroup, Label, Input} from "reactstrap"
import './css/SignUpForm.css'

const SignUpForm = () => {
    const [ email, setEmail ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ password1, setPassword1 ] = useState('')
    const [ password2, setPassword2 ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(password1 === password2){
            const data = { email, username, password1 }
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }
            fetch('/add_user',options).then(res => console.log(res))
        }
        else{
            alert("password fields must match")
        }
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePassword1Change = (e) => {
        setPassword1(e.target.value)
    }
    const handlePassword2Change = (e) => {
        setPassword2(e.target.value)
    }

    return (
        <Card className="form-container">
            <Form onSubmit={handleSubmit} className="signup-form">
                <h1 className="text-center">Sign Up</h1>
                <FormGroup>
                    <Label for="email" >Email</Label>
                    <Input type="email" name="email" id="email" autoFocus onChange={handleEmailChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="username" name="username" id="username"  onChange={handleUsernameChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="password1">Password</Label>
                    <Input type="password" name="password1" id="password1" onChange={handlePassword1Change} />
                </FormGroup>
                <FormGroup>
                <Label for="password2">Verify password</Label>
                    <Input type="password" name="password2" id="passwor21" onChange={handlePassword2Change} />
                </FormGroup>
                <Button className="btn-lg btn-block my-3" id="submit-btn">Submit</Button>
            </Form>
        </Card>
    )
}

export default SignUpForm