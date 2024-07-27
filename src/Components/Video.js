import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';
import '../Video.css';

const Video = ({ currentVideo }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleTimeUpdate = () => {
            const current = videoElement.currentTime;
            const duration = videoElement.duration;
            setProgress((current / duration) * 100);
        };

        const handlePlayPause = () => {
            if (videoElement.paused || videoElement.ended) {
                videoElement.play();
                setIsPlaying(true);
            } else {
                videoElement.pause();
                setIsPlaying(false);
            }
        };

        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        videoElement.addEventListener('timeupdate', handleTimeUpdate);
        videoElement.addEventListener('click', handlePlayPause);
        document.addEventListener('fullscreenchange', handleFullscreenChange);

        return () => {
            videoElement.removeEventListener('timeupdate', handleTimeUpdate);
            videoElement.removeEventListener('click', handlePlayPause);
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    useEffect(() => {
        const videoElement = videoRef.current;
        videoElement.src = currentVideo;
        videoElement.load();
        videoElement.play().catch(error => {
            console.error('Failed to play video:', error);
        });
        setIsPlaying(true);
    }, [currentVideo]);

    const handleProgressClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const totalWidth = rect.width;
        const newProgress = (offsetX / totalWidth) * videoRef.current.duration;
        videoRef.current.currentTime = newProgress;
    };

    const handleFullscreenClick = () => {
        const videoElement = videoRef.current;
        if (!isFullscreen) {
            if (videoElement.requestFullscreen) {
                videoElement.requestFullscreen();
            } else if (videoElement.mozRequestFullScreen) {
                videoElement.mozRequestFullScreen();
            } else if (videoElement.webkitRequestFullscreen) {
                videoElement.webkitRequestFullscreen();
            } else if (videoElement.msRequestFullscreen) {
                videoElement.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
        setIsFullscreen(!isFullscreen);
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1 className='main fw-light mt-4'>Video Journey</h1>
                </div>
                <div className='col-lg-6 mt-4'>
                    <p className='fw-light'>Enter and visit one of the most famous museums in the world and enjoy masterpieces such as Mona Lisa or Hammurabi's Code</p>
                </div>
            </div>
            <hr className='line'></hr>
            <div className='video-container'>
                <video
                    className="video"
                    ref={videoRef}
                    style={{ width: '100%', borderRadius: '8px' }}
                ></video>
                <div className='controls'>
                    <button className='play-pause-button' onClick={() => setIsPlaying(!isPlaying)}>
                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                    </button>
                    <div className='progress-bar' onClick={handleProgressClick}>
                        <div className='progress' style={{ width: `${progress}%` }}></div>
                    </div>
                    <button className='fullscreen-button' onClick={handleFullscreenClick}>
                        <FontAwesomeIcon icon={isFullscreen ? faCompress : faExpand} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Video;
