import React, { useState } from 'react'
import './css/NavBar.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
import { Link } from 'react-router-dom'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
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
                </Nav>
            </Collapse>
      </Navbar>
    )
}


export default NavBar
