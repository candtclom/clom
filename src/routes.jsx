import React from 'react';
import { Router, Route } from 'react-router';

import CommentBox from './components/CommentBox';
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Homepage} />
    <Route path="/About" component={CommentBox} />
    <Route path="*" component={NotFound} />
  </Router>
);
export default Routes;
