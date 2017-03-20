import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component{
  componentDidMount(){
    if(this.props.videos == "none"){
    this.props.requestAllVideos();
    }

  }

  render(){
    const videos = this.props.videos;
    console.log(this.props.videos);
    return videos == "none" ?
    <div>Loading</div> :
      (<div className="video-index">
        
          {videos.map(video => <VideoIndexItem key={video.nid} video={video} />)}

      </div>
    );
  }
}

export default VideoIndex;
