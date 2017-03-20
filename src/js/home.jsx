import React from 'react';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: ""
    };
    // this.getVideos();
  }



  render(){
    let data = this.state.data;
    return(<div>Hi there</div>);
  }
}


export default Home;
