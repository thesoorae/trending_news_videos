import React from 'react';

class Video extends React.Component{
  render(){
    return(
      <div>Video{this.props.params.id}</div>
    );
  }
}

export default Video;
