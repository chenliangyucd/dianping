import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';

import Index from 'container/Index';
import Login from 'container/Login';

class Routes extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Route path="/index" component={Index}></Route>
          <Route path="/login" component={Login}></Route>
        </div>
      </Router>
    );
  }
}

export default Routes;