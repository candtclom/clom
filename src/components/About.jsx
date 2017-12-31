import React, { Component } from 'react';
import ConceptBox from './ConceptBox.jsx'

class About extends Component {

  onSubmit = () => {
    console.log('Hello Chloe');
  }

  render() {
    return (
      <div className="content">
        <h4 className="centerText"> About CLOM </h4>
        <hr width="75%" />
        <ConceptBox />
        <ConceptBox />
        <ConceptBox />

      </div>
    )
  }
}

export default About;
