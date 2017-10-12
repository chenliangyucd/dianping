import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';

import Index from 'container/Index';
import Foot from 'component/Foot';

class Routes extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Route path="/index" component={Index}></Route>
          <Foot></Foot>
        </div>
      </Router>
    );
  }
}

export default Routes;