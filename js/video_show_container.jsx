import {connect} from 'react-redux';
import {selectTenVideos} from '../reducers/selectors';
import {requestAllVideos} from '../actions/video_actions';
import VideoShow from './videos_show';
const mapStateToProps = state => ({
  video: selectTenVideos(state.videos)
});
const mapDispatchToProps = dispatch => ({
  requestAllVideos: () =>  dispatch(requestAllVideos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoShow);
