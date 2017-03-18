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
