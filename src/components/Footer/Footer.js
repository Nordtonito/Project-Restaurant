import React from 'react';

import './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <p>
          <span>Звоните: </span>
          <a href="tel:+380963233824">+38 (096) 323 3824</a>
        </p>
        <p>Nordtonito's Tavern © 2020</p>
      </footer>
    );
  }
}

export default Footer;