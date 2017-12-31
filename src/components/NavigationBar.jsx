import React, { Component } from 'react';
import NavigationTile from './NavigationTile';

class NavigationBar extends Component {

  render() {
    return (
      <div className="navBar" id="myHeader">
        <div className="navTiles">
          <NavigationTile name="Home " />
          <NavigationTile name="Products" />
          <NavigationTile name="Concepts" />
          <NavigationTile name="About" />
        </div>


      </div>
    )
  }
}

export default NavigationBar;
