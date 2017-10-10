import React from 'react';
import ReactDom from 'react-dom';
import Router from './router/Router.jsx';
import 'common/stylus/index.styl';
import 'common/iconfont/iconfont.css';
ReactDom.render(
  <Router/>,
  document.getElementById('content')
);