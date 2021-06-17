import './App.css';
import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SignUpForm from './components/SignUpForm'
import Ticket from './components/Ticket'
import LoginForm from './components/LoginForm'
import MyTickets from './components/MyTickets'
import NewTicketForm from './components/NewTicketForm'
import Tickets from './components/Tickets'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div >
        <NavBar />
        <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/signup">
                <SignUpForm />
              </Route>
              <Route exact path="/mytickets">
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
        </Switch>
        </div>
      </div> 
    </Router>
  );
}

export default App;
