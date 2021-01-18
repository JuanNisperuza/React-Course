import React, {Component} from 'react';
import VideoPlayerLayout from '../component/video-player-layout'
import Video from '../component/video'

class VideoPlayer extends Component {
    render() {
        return (
            <VideoPlayerLayout>
               <Video src={this.props.src}></Video>
            </VideoPlayerLayout>
        )
    }
}
export default VideoPlayer