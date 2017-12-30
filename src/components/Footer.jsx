import React, { Component } from 'react';

class Footer extends Component {

  onSubmit = () => {
    console.log('Hello Chloe');
  }

  render() {
    return (
      <div className="footerBackground">
        <p> © CLOM Technologies </p>
        <img src={require("../assets/images/instaLogo.png")} alt="Instagram Logo" className="instaLogo"/>
      </div>
    )
  }
}

export default Footer;
