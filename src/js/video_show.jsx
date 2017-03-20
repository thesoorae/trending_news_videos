import React from 'react';
import {formatDate} from '../reducers/selectors';
import {Loader} from './loader';

class VideoShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      emotions: "",
      voted: false,
      play: false
    };
    this.toggleEmotion = this.toggleEmotion.bind(this);
    this.playVideo = this.playVideo.bind(this);
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
        let data = {nid: this.props.nid, reaction: emotion};
        this.setState({emotions: newEmotions, voted: true},
          this.props.postReaction(data));
      }
    }

  playVideo(){
    this.setState({play: true});
  }

  render(){
    if(this.props.video === ""){
      return(<Loader />);
    }else{
        let video = this.props.video;
        let emotions = this.state.emotions;

        let thumbnail_link = video.large_video_thumbnail;
        if (thumbnail_link == null){
          // let images = video.styled_images;
          // let image = images[0];
          // thumbnail = image.styled_image_base_url + image.styled_image_url;
          thumbnail_link = video.image;
        }
        let videoLink = video.video;
        let dimensions = video.dimensions.split('x');
        let width = dimensions[0];
        let height = dimensions[1];
        let thumbnail = <img width={width} className="clickable" onClick={this.playVideo} src={thumbnail_link} />;
        let clickImageText = "(Click image to watch)";
        if(this.state.play){
          clickImageText = "";
          thumbnail = <iframe width={width} height={height} className="video-frame" src={videoLink} allowFullScreen />;
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

        let date = video.created;
        if(date){
          date = (formatDate(date));
        }


        return  (<div className="video-show">
          <div className="title"><h1>{video.title}</h1></div>
            <div className="date">{date}</div>
          <div className="description">{video.description} {clickImageText}</div>
          {thumbnail}
          <div className="emotions-bar">
            {emotionsBar}
          </div>

          </div>
        );
      }

  }
}

export default VideoShow;
