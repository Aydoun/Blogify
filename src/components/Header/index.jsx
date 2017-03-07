import React from "react";
import {Link} from 'react-router';
import { Nav, Navbar , Pill , NavItem } from "react-bootstrap";
import './header.css';

export default class Header extends React.PureComponent {

  render() {
    console.log('Header Rendered!');
    return (
      <Navbar className="nav-header__custom">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Blogify</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/work">Work</NavItem>
            <NavItem eventKey={3} href="/about">About</NavItem>

          </Nav>
          <Nav pullRight>
            <NavItem eventKey={2} href="/contact">Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
