import React from "react";
import {Link} from 'react-router';
import { Nav, Pill , NavItem } from "react-bootstrap";

export default class Header extends React.PureComponent {

  render() {
    console.log('Header Rendered!');
    return (
      <div className="main-nav__fixed">
        <div className="self-quote__intro">
            <p>Amine Aydoun</p>
            <p>Some Quote Here</p>
        </div>
        <ul className="main-menu__list">
            <li>
                <Link to="/home">Blog</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
      </div>
    );
  }
}
