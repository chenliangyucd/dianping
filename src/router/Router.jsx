import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';
import App from 'component/App';
import Hello from 'component/Hello';
import Hi from 'component/Hi';
import Foot from 'component/Foot';

class Routes extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <div>head</div>
          <Route path="/hello" component={Hello}></Route>
          <Route path="/hi" component={Hi}></Route>
          <Foot></Foot>
        </div>
      </Router>
    );
  }
}

export default Routes;