import React from 'react';
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to="/">Home page</Link></li>
        <li><Link to="/reservation">Reservation</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
    );
  }
}

export default Navigation;