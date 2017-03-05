import React from "react";
import {Link} from 'react-router';
import { Nav, Pill , NavItem } from "react-bootstrap";

export default class Header extends React.PureComponent {

  render() {
    console.log('Header Rendered!');
    return (
      <div className="main-nav__fixed">
        <div className="self-quote__intro">
            <p><Link to="/">Amine Aydoun</Link></p>
            <p>Some Quote Here</p>
        </div>
        <ul className="nav main-menu__list">
            <li>
                <Link to="/">Blog</Link>
            </li>
            <li>
                <Link to="/work">Work</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
      </div>
    );
  }
}
