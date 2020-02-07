import React from 'react';

class Menu extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export default Menu;