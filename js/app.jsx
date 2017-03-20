import React from 'react';
import { Link } from 'react-router';
import VideoIndexContainer from './videos_index_container';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Link to={`/`}><img className="logo" src="http://www.ajplus.net/english/favicon-196x196.png"/></Link>
        {this.props.children || <VideoIndexContainer />}
      </div>
    );
  }
}

export default App;
