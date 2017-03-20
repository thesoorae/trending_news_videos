import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import {Provider} from 'react-redux';
import App from './app.jsx';
import VideoShow from './video_show_container.jsx';
import Home from './home.jsx';

const Root = ({store}) => (
<Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={App} store={store}>
      <Route path="videos/:id" component={VideoShow}></Route>
    </Route>
  </Router>
  </Provider>
);

export default Root;
