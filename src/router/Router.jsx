import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';
import App from '../component/app/App.jsx';
import Hello from '../component/hello/Hello.jsx';
import Hi from '../component/hi/Hi.jsx';

class Routes extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <div>head</div>
          <Route path="/hello" component={Hello}></Route>
          <Route path="/hi" component={Hi}></Route>
          <div>footer</div>
        </div>
      </Router>
    );
  }
}

export default Routes;