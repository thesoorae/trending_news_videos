import React from 'react';
import { Link } from 'react-router';
//
// <Link to={`/videos/${video.nid}`}>
//     </Link>

class VideoIndexItem extends React.Component {

  render(){
    let video = this.props.video;
    return (
      <div className="video-index-item">
          <span>{video.title}</span>
          <img src={video.image} alt={video.title} />
          <span>{video.description}</span>
      </div>
    );
  }
}
export default VideoIndexItem;
