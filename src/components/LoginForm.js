import React, { useState, useContext } from 'react'
import { Card, Form, Button, FormGroup, Label, Input} from "reactstrap"
import './css/SignUpForm.css'
import UserContext from './UserContext'

const LoginForm = () => {
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ user, setUser ] = useContext(UserContext)
    let handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    let handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { 
            "username": username,
            "password": password }
        const options = 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
        fetch('/login', options)
            .then(res => {
               if(res.status === 200){
                   console.log(username + " logged in")
               }
               return res.json()
            })
            .then(data => {
                setUser({username: data.username, id: data.id})
            })
    }
    return (
        <Card className="form-container">
            <Form onSubmit={handleSubmit} className="signup-form">
                <h1 className="text-center">Login</h1>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="username" name="username" id="username" value={username} onChange={handleUsernameChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" value={password}onChange={handlePasswordChange}/>
                </FormGroup>
                <Button className="btn-lg btn-block my-3" id="submit-btn">Log In</Button>
            </Form>
        </Card>
    )
}

export default LoginForm