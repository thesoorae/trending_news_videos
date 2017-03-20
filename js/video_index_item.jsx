import React from 'react';
import { hashHistory } from 'react-router';

import {formatDate} from '../reducers/selectors';


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
    date = formatDate(date);

    return (
      <div className="video-index-item" onClick={this.handleClick}>
        <div className="thumbnail">
        <img src={video.image} alt={video.title} />
        </div>
          <h2>{video.title}</h2>
          <div className="date">{date}</div>
          <span>{video.description}</span>
      </div>

    );
  }
}
export default VideoIndexItem;
