"use client";
import React, { useRef, useState, useEffect, createRef } from 'react';
import './home.css';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon, PlayIcon, PauseIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { ExpandIcon  } from 'lucide-react';

function VideoPlayerNow() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); 
  const [isFullScreen, setIsFullScreen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const video = videoRef.current as HTMLVideoElement | null;

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
    const video = videoRef.current as HTMLVideoElement | null;
  
    if (video) {
      setIsPlaying(!isPlaying);
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };
  const handleSkipBackward = () => {
    const video = videoRef.current as HTMLVideoElement | null;
    if(video){
    video.currentTime -= 10;
    } // Skip backward 10 seconds
  };

  const handleSkipForward = () => {
    const video = videoRef.current as HTMLVideoElement | null;
    if(video){
    video.currentTime += 10; 
    }// Skip forward 10 seconds
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current as HTMLVideoElement | null;
  
    if (video) {
      const newVolume = parseFloat(e.target.value);
      video.volume = newVolume;
      setVolume(newVolume);
    }
  };

  const handleToggleFullScreen = () => {
    const video = videoRef.current as HTMLVideoElement | null;
    if(video){

    if (!document.fullscreenElement) {
      video.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }

    setIsFullScreen(!isFullScreen);
}
  };

  return (
    <section className='py-3'>
      <div className='container'>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">Highlights</p>
            <div className="mt-5 max-w-md mx-auto">
              <div className="text-center">
              
              </div>
            </div>
          </div>
            <center>
              <div className='containersas show-controls'>
                <div className='wrappersasa'>
                  <ul className='video-controls'>
                    <li className='options left'>
    
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
                      <ArrowLeftIcon className="h-6 w-6" />
                      </button>
                      <button className='play-pause' onClick={togglePlayPause}>
                      {isPlaying ? <PauseIcon className="h-6 w-6" /> : <PlayIcon className="h-6 w-6" />}
                      </button>
                      <button className='skip-forward' onClick={handleSkipForward}>
                      <ArrowRightIcon className="h-6 w-6" />
                      </button>
                     
                    </li>
                    <li className='options right'>
                    <button className='fullscreen' onClick={handleToggleFullScreen}>
                      {isFullScreen ? <ExpandIcon className="h-6 w-6" /> : <ExpandIcon className="h-6 w-6" />}
                      </button>
                    </li>
                  </ul>
                </div>
                <div className='video-name'>CrossOver 2024</div>
                <video ref={videoRef} src="https://res.cloudinary.com/dxtjjbk95/video/upload/v1708851646/Authentic%20Events/CrossOver2023_xsledz.mp4"></video>
              </div>
            </center>
          </div>
        </div>

    </section>
  );
}

export default VideoPlayerNow;
