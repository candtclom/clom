import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div className="centerText">
        <h3> 404 Error </h3>
        <h4> Sorry the page you have requested has not been recognised </h4>
        <a href="http://localhost:3000/">Go home</a>
        <br />
        <br />


      </div>

    )
  }
}

export default NotFound;
