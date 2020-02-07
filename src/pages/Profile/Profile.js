import React from 'react';

class Profile extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export default Profile;