import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './app.jsx';
import Video from './video.jsx';
import Home from './home.jsx';

const Root = ({store}) => (
<Provider store={store}>
  <Router>
    <Route path="/" component={App}>
      <Route path="videos/:id" component={Video}></Route>
    </Route>
  </Router>
  </Provider>
);

export default Root;
