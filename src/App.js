import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SignUpForm from './components/SignUpForm'
import Ticket from './components/Ticket'
import LoginForm from './components/LoginForm'
import MyTickets from './components/MyTickets'
import NewTicketForm from './components/NewTicketForm'
import Tickets from './components/Tickets'
import Projects from './components/Projects'
import NewProjectForm from './components/NewProjectForm'
import EditTicketForm from './components/EditTicketForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserContext from './components/UserContext';
import TicketContext from './components/TickeContext'

function App() {
  const [ user, setUser ] = useState({})
  const [ ticket, setTicket ] = useState({title: "tetst"})
  return (
    <UserContext.Provider value={[ user, setUser ]}>
    <TicketContext.Provider value={[ ticket, setTicket ]}>
      <Router>
        <div >
          <NavBar className="main-nav" user={user}/>
          <div className="content">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/signup">
                  <SignUpForm />
                </Route>
                <Route exact path="/tickets/:id">
                  <MyTickets />
                </Route>
                <Route path="/login">
                  <LoginForm />
                </Route>
                <Route path="/ticket/:id">
                  <Ticket />
                </Route> 
                <Route path="/newticket">
                  <NewTicketForm />
                </Route> 
                <Route path="/tickets">
                  <Tickets />
                </Route> 
                <Route path="/newproject">
                  <NewProjectForm />
                </Route> 
                <Route path="/edit-ticket-form">
                  <EditTicketForm />
                </Route> 
                <Route path="/projects">
                  <Projects />
                </Route> 
          </Switch>
          </div>
        </div> 
      </Router>
    </TicketContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
