import React from 'react';

import './Home.css'

class Home extends React.Component {
    render() {
        return (
          <main>{this.props.children}</main>
        );
    }
}

export default Home;