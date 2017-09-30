import React from 'react';
import ReactDom from 'react-dom';
import Router from './router/Router.jsx';
import Hello from './component/hello/Hello.jsx';
ReactDom.render(
  <Router/>,
  document.getElementById('content')
);