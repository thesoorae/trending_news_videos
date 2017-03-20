import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_EMOTIONS = 'RECEIVE_EMOTIONS';

export const receiveAllVideos = videos =>({
  type: RECEIVE_ALL_VIDEOS,
  videos
});

export const receiveVideo = video =>({
  type: RECEIVE_VIDEO,
  video
});

export const receiveEmotions = emotions =>({
  type: RECEIVE_EMOTIONS,
  emotions
});

export const requestAllVideos = () => (dispatch) => {
  return APIUtil.fetchAllVideos()
    .then(obj => dispatch(receiveAllVideos(obj.data)));
};

export const requestVideo = (id) => (dispatch) => {
  return APIUtil.fetchVideo(id)
    .then(video => dispatch(receiveVideo(video)));
};


export const postReaction = video => dispatch => {
  return APIUtil.postEmotion(video)
  .then(newEmotion => {
    console.log("new Emotion", newEmotion);
    dispatch(receiveEmotions(newEmotion));
  });
};

export const requestEmotions = (id) => dispatch => {
  return APIUtil.fetchEmotions(id)
  .then(newEmotion => {
    dispatch(receiveEmotions(newEmotion.reactions));
  });
};
