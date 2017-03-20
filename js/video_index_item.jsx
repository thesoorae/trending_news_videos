import React from 'react';
import { hashHistory } from 'react-router';



class VideoIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    const nid = this.props.video.nid;
    hashHistory.push(`/videos/${nid}`);
  }
  render(){
    let video = this.props.video;
    let date = video.created;
    date = date.slice(0, 10);
    date = new Date(date);
    console.log(date);
    return (
      <div className="video-index-item" onClick={this.handleClick}>
          <span>{video.title}</span>
          <img src={video.image} alt={video.title} />
          <span>{video.description}</span>
      </div>

    );
  }
}
export default VideoIndexItem;
