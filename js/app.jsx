import React from 'react';
import { Link } from 'react-router';
import VideoIndexContainer from './videos_index_container';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children || <VideoIndexContainer />}
      </div>
    );
  }
}

export default App;
