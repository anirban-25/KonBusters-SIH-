import React from 'react';

const VideoPlayer = () => {
  return (
    <div className=' fixed top-0  left-0 w-[100%] h-[100%] overflow-hidden -z-1 opacity-20'>
      <video autoPlay muted loop width="640" height="360" className='cover w-[100%] h-[100%]'>
        <source src="/networking.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
