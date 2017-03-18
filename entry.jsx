import React from 'react';
import ReactDOM from 'react-dom';
import Root from './js/root';
import {requestAllVideos, requestVideo} from './actions/video_actions';
import {fetchAllVideos} from './util/api_util';
import {configureStore} from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  window.fetchAllVideos = fetchAllVideos;
  window.requestAllVideos = requestAllVideos;
  window.requestVideo = requestVideo;
  const store = configureStore();
  window.store = store;
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store}/>, root);
});
