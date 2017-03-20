import React from 'react';

class VideoShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      emotions: "",
      voted: false
    };
    this.toggleEmotion = this.toggleEmotion.bind(this);
  }
  componentDidMount(){
    this.props.requestVideo(this.props.params.id);
    this.props.requestEmotions(this.props.params.id);
  }
  componentWillReceiveProps(nextProps){
    this.setState({emotions: nextProps.emotions});
  }
  toggleEmotion(e){
      if(!this.state.voted){

        let emotion = e.currentTarget.id;
        let newEmotions = this.state.emotions;
        newEmotions[emotion]['total'] += 1;
        this.setState({emotions: newEmotions});
      }
    }


  render(){

    let video = this.props.video;
    let emotions = this.state.emotions;

    let thumbnail = video.thumbnail;
    if (thumbnail == null){
      // let images = video.styled_images;
      // let image = images[0];
      // thumbnail = image.styled_image_base_url + image.styled_image_url;
      thumbnail = video.image;
    }

    let emotionsBar = [];
    const emojis = {
      happy: "http://pix.iemoji.com/images/emoji/apple/ios-9/256/smiling-face-with-smiling-eyes.png",
      wow: "http://pix.iemoji.com/images/emoji/apple/ios-9/256/face-screaming-in-fear.png",
      angry: "http://pix.iemoji.com/images/emoji/apple/ios-9/256/pouting-face.png",
      sad: "http://pix.iemoji.com/images/emoji/apple/ios-9/256/crying-face.png"
    };
    for(var emotion in emotions){
      emotionsBar.push(<div className="emotion clickable" id={emotion} onClick={this.toggleEmotion}>
      <img className="emoji" src={emojis[emotion]} />
      <div className="emoji-title">{emotion}</div>
      <div className="votes">Votes: {emotions[emotion]['total']}</div>
      </div>);
    }

    return  video === "" ? <div>Loading</div> :
    (<div className="video-show">
      <div className="title"><h2>{video.title}</h2></div>
      <div className="description">{video.description}</div>
      <div className="date">{video.created}</div>
      <img src={thumbnail} />
      <div className="emotions-bar">
        {emotionsBar}
      </div>

      </div>
    );
  }
}

export default VideoShow;
