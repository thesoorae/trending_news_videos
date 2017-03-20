import React from 'react';
import { Link } from 'react-router';
import VideoIndexContainer from './videos_index_container';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Link to={`/`}>
        <div className="header">
        <img className="logo" src="http://www.ajplus.net/english/favicon-196x196.png"/>
        <h1>Top Ten Trending Videos</h1>
      </div>
      </Link>
        {this.props.children || <VideoIndexContainer />}
      </div>
    );
  }
}

export default App;
