import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component{
  componentDidMount(){
    this.props.requestAllVideos();
  }

  render(){
    const videos = this.props.videos;
    console.log(this.props.videos);
    return videos == "none" ?
    <div>Loading</div> :
      (<div className="video-index">
        <div>
          {videos.map(video => <VideoIndexItem key={video.nid} video={video}/>)}
        </div>
      </div>
    );
  }
}

export default VideoIndex;
