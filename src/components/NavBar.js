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
                        <NavLink className="nav-link">Dashboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link">My Tickets</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link">Login</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
      </Navbar>
    )
}


export default NavBar
