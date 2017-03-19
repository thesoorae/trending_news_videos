import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveAllVideos = videos =>({
  type: RECEIVE_ALL_VIDEOS,
  videos
});

export const receiveVideo = video =>({
  type: RECEIVE_VIDEO,
  video
});

export const requestAllVideos = () => (dispatch) => {
  return APIUtil.fetchAllVideos()
    .then(obj => dispatch(receiveAllVideos(obj.data)));
};

export const requestVideo = (id) => (dispatch) => {
  return APIUtil.fetchVideo(id)
    .then(video => dispatch(receiveVideo(video)));
};
