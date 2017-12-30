import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';


import CommentBox from './components/CommentBox';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './components/Homepage';
import NavigationBar from './components/NavigationBar';
import NotFound from './components/NotFound';


ReactDOM.render(
  <MuiThemeProvider>
  <Router>
    <div>
      <Header />
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={CommentBox} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
