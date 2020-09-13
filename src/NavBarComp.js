import React from 'react';
import { Navbar, Nav, Icon } from 'rsuite';
import { NavLink } from 'react-router-dom';

function NavBarComp() {
  return (
    <div>
      <Navbar>
        <Navbar.Body>
          <Nav>
            <Nav.Item eventKey='1' icon={<Icon icon='home' />}>
              <NavLink to='/'>YODLR</NavLink>
            </Nav.Item>
            <Nav.Item eventKey='2'>
              <NavLink to='/admin'>Admin Page</NavLink>
            </Nav.Item>
            <Nav.Item eventKey='3'>
              <NavLink to='/register'>Registration Page</NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </div>
  );
}

export default NavBarComp;
