import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';

class NavigationTile extends Component {
  render() {
    return (
      <div className="navTile">
        {this.props.name}
      </div>
    )
  }
}

React.propTypes = {
  name: PropTypes.string,
}
export default NavigationTile;
