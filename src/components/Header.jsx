import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={require("../assets/images/clom.png")} alt="CLOM Logo" className="clomLogo"/>
      </div>
    )
  }
}

export default Header;
