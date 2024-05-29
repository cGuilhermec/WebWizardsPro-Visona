import React from 'react';
import videoBg from '../../assets/videos/teste.mp4'

const VideoComponent = () => {
    return(
        <div className='video'>
            <video src={videoBg} autoPlay loop muted/>
        </div>
    )
}

export default VideoComponent;