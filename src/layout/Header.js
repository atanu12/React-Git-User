import React, {useState, useContext} from 'react';

import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, NavbarBrand, NavbarText} from 'reactstrap';
import {Link} from 'react-router-dom'

const Header =()=> {
    return (
        <Navbar color="info" light expand='md'>
            <NavbarBrand className='font-weight-bold'>
                <Link to='/' className='text-white' >Git User Search</Link>
            </NavbarBrand>
            <NavbarToggler/>
            <Collapse navbar>
                <Nav className='ml-auto'>
                    <NavItem>
                        <NavLink  className='text-white'>Sign In</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='text-white'>Sign Up</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink  className='text-white'>Log Out</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header
