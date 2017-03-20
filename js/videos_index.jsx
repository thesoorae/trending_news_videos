import React from 'react';
import VideoIndexItem from './video_index_item';
import {Loader} from './loader';


class VideoIndex extends React.Component{
  componentDidMount(){
    if(this.props.videos == "none"){
    this.props.requestAllVideos();
    }

  }

  render(){
    const videos = this.props.videos;
    return videos == "none" ?
    <Loader/>:
      (<div className="video-index">

          {videos.map(video => <VideoIndexItem key={video.nid} video={video} />)}

      </div>
    );
  }
}

export default VideoIndex;
