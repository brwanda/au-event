"use client";
import React, { useRef, useState, useEffect, createRef } from 'react';
import './home.css';
import { useRouter } from 'next/navigation';

function VideoPlayerNow() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); 
  const [isFullScreen, setIsFullScreen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const video = videoRef.current;
  
    const updateVideoTime = () => {
      if (video) setCurrentTime(video.currentTime);
    };
  
    const updateVideoDuration = () => {
      if (video) setDuration(video.duration);
    };
  
    if (video) {
      video.addEventListener('timeupdate', updateVideoTime);
      video.addEventListener('loadedmetadata', updateVideoDuration);
  
      return () => {
        video.removeEventListener('timeupdate', updateVideoTime);
        video.removeEventListener('loadedmetadata', updateVideoDuration);
      };
    }
  }, []);
  

  const togglePlayPause = () => {
    const video = videoRef.current;
    setIsPlaying(!isPlaying);

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  const handleSkipBackward = () => {
    const video = videoRef.current;
    video.currentTime -= 10; // Skip backward 10 seconds
  };

  const handleSkipForward = () => {
    const video = videoRef.current;
    video.currentTime += 10; // Skip forward 10 seconds
  };

  const handleVolumeChange = (e) => {
    const video = videoRef.current;
    const newVolume = parseFloat(e.target.value);
    video.volume = newVolume;
    setVolume(newVolume);
  };

  const handleToggleFullScreen = () => {
    const video = videoRef.current;

    if (!document.fullscreenElement) {
      video.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }

    setIsFullScreen(!isFullScreen);
  };

  return (
    <section className='py-3'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h2 className='section-title'>ThrowBack</h2>   
            <center>
              <div className='containersas show-controls'>
                <div className='wrappersasa'>
                  <ul className='video-controls'>
                    <li className='options left'>
                      <button className='volume'>
                        <i className='fa-solid fa-volume-high'></i>
                      </button>
                      <input
                        type='range'
                        min='0'
                        max='1'
                        step='any'
                        onChange={handleVolumeChange}
                        value={volume}
                      />
                    </li>
                    <li className='options center'>
                      <button className='skip-backward' onClick={handleSkipBackward}>
                        <i className='fas fa-backward'></i>
                      </button>
                      <button className='play-pause' onClick={togglePlayPause}>
                        <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                      </button>
                      <button className='skip-forward' onClick={handleSkipForward}>
                        <i className='fas fa-forward'></i>
                      </button>
                      <button className='fullscreen' onClick={handleToggleFullScreen}>
                        <i className={`fa-solid ${isFullScreen ? 'fa-compress' : 'fa-expand'}`}></i>
                      </button>
                    </li>
                    <li className='options right'>
                      <div className='video-timer'>
                        <span className='current-time'>{currentTime}</span>
                        <span className='separator'> / </span>
                        <span className='video-duration'>{duration}</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='video-name'>CrossOver 2023</div>
                <video ref={videoRef} src="https://res.cloudinary.com/dxtjjbk95/video/upload/v1708851646/Authentic%20Events/CrossOver2023_xsledz.mp4"></video>
              </div>
            </center>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoPlayerNow;
