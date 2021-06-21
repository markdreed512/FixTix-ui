import React, { useState, useContext } from 'react'
import UserContext from './UserContext';
import './css/NavBar.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button
  } from 'reactstrap';
import { Link } from 'react-router-dom'

function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [ user, setUser ] = useContext(UserContext)
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar id="navbar" className="p-3"  expand="md">
            <NavbarBrand id="brand">FixTix</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link to="/" className="nav-link">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/mytickets"  className="nav-link">My Tickets</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/signup" className="nav-link">Sign Up</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/login" className="nav-link">Login</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/tickets" className="nav-link">Tickets</Link>
                    </NavItem>
                    <Link to="/newticket" className="nav-link">
                        <Button>New Ticket</Button>
                    </Link>
                    <Link to="/newproject" className="nav-link">
                        <Button>New Project</Button>
                    </Link>
                    <NavItem>{props.user.username}</NavItem>
                </Nav>
            </Collapse>
      </Navbar>
    )
}


export default NavBar
