import React from 'react';
import { Link } from "react-router-dom";

import './Navigation.css'

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <Link to="/">Home page</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservation">Reservation</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    );
  }
}

export default Navigation;