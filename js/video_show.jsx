import React from 'react';

class VideoShow extends React.Component{
  render(){
    return(
      <div>Video{this.props.params.id}</div>
    );
  }
}

export default VideoShow;
