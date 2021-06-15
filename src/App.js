// import './App.css';

import React from 'react'
import NavBar from './components/NavBar'
import SignUpForm from './components/SignUpForm'
import Tickets from './components/Tickets'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div >
        <NavBar />
        <div className="content">
            <Switch>
              <Route path="/">
                <SignUpForm />
              </Route>
            </Switch>
        </div>
      </div> 
    </Router>
  );
}

export default App;
