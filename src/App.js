// import './App.css';

import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SignUpForm from './components/SignUpForm'
import MyTickets from './components/MyTickets'
import LoginForm from './components/LoginForm'
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
            </Switch>
        </div>
      </div> 
    </Router>
  );
}

export default App;
