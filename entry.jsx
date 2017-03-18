import React from 'react';
import ReactDOM from 'react-dom';
import Root from './js/root';
import {receiveAllVideos} from './actions/video_actions';
import {fetchAllVideos} from './util/api_util';

document.addEventListener('DOMContentLoaded', () => {
  window.fetchAllVideos = fetchAllVideos;
  window.receiveAllVideos = receiveAllVideos;
  const root = document.getElementById('content');
  ReactDOM.render(<Root />, root);
});
