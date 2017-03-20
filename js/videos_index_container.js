import {connect} from 'react-redux';
import {selectTenVideos} from '../reducers/selectors';
import {requestAllVideos, requestVideo, requestEmotions} from '../actions/video_actions';
import VideosIndex from './videos_index';

const mapStateToProps = state => ({
  videos: selectTenVideos(state.videos)
});
const mapDispatchToProps = dispatch => ({
  requestAllVideos: () =>  dispatch(requestAllVideos()),
  requestVideo: (id)=> dispatch(requestVideo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideosIndex);
