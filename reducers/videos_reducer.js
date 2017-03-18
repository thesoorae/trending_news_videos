import { merge } from 'lodash';

import {
  RECEIVE_ALL_VIDEOS,
  RECEIVE_VIDEO
} from '../actions/video_actions';

const VideosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      return merge({}, {videos: action.videos});
    case RECEIVE_VIDEO:
      return merge({}, state, {current_video: action.video});
    default:
      return state;
  }
};

export default VideosReducer;
