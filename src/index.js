import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import './index.css';

import About from './components/About';
import ConceptBox from './components/ConceptBox';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './components/Homepage';
import NavigationBar from './components/NavigationBar';
import NotFound from './components/NotFound';
import ProductBox from './components/ProductBox';

ReactDOM.render(
  <MuiThemeProvider>
  <Router>
    <div>
      <Header />
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route path="/concepts" component={ConceptBox} />
        <Route path="/products" component={ProductBox} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
