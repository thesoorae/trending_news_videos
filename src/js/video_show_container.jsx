import {connect} from 'react-redux';
import {selectTenVideos} from '../reducers/selectors';
import {requestVideo, requestEmotions, postReaction} from '../actions/video_actions';
import VideoShow from './video_show';

const mapStateToProps = (state, ownProps) => ({
  video: state.current_video,
  nid: ownProps.params.batchId,
  emotions: state.current_emotion
});

const mapDispatchToProps = dispatch => ({
  requestVideo: (id) =>  dispatch(requestVideo(id)),
  requestEmotions: (id) => dispatch(requestEmotions(id)),
  postReaction: data => dispatch(postReaction(data))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoShow);
