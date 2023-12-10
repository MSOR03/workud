import React from 'react';
import '../Styles/Video.css'

const YouTubeVideo = () => {
  return (
    <div>
      <h2>Videos Introducción</h2>
      <iframe className='play-video'
        width="320"
        height="180"
        src="https://www.youtube.com/embed/cKarWm9NHlU"
        title="Reproductor de YouTube"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <iframe className='play-video'
        width="320"
        height="180"
        src="https://www.youtube.com/embed/wlk3dA-cNf4"
        title="Reproductor de YouTube"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <iframe className='play-video'
        width="320"
        height="180"
        src="https://www.youtube.com/embed/F69Q64zfxLU"
        title="Reproductor de YouTube"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
