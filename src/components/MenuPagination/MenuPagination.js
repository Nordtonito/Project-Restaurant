import React from "react";

class MenuPagination extends React.Component {

  render() {

    return (
      <ul>
        <li className={''}>
          <button onClick={this.props.goBack}>Previous</button>
        </li>
        <li>
          
        </li>
        <li className={''}>
          <button onClick={this.props.goForward}>Next</button>
        </li>
      </ul>
    );
  }
}