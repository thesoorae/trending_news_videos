import { merge } from 'lodash';

import {
  RECEIVE_ALL_VIDEOS,
  RECEIVE_VIDEO,
  RECEIVE_EMOTIONS
} from '../actions/video_actions';

const videosReducer = (state = {videos: "none", current_video:"", current_emotion: ""}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      return merge({}, state, {videos: action.videos});
    case RECEIVE_VIDEO:
      return merge({}, state, {current_video: action.video});
    case RECEIVE_EMOTIONS:
      return merge({}, state, {current_emotion: action.emotions});
    default:
      return state;
  }
};

export default videosReducer;
