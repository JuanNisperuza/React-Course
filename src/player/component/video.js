import React, {Component} from 'react';
import './video.css';

class Video extends Component{
    render() {
        console.log(this.props.src)
        return (
            <div className="Video">
            <video
                controls
                autoPlay
                src={this.props.src}
            />
            </div>
        )
    }

}
export default Video
