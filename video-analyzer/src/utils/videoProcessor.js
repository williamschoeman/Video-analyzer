// This file contains utility functions for processing the video.

export const loadVideo = (videoPath) => {
    return new Promise((resolve, reject) => {
        const video = document.createElement('video');
        video.src = videoPath;
        video.onloadedmetadata = () => resolve(video);
        video.onerror = (error) => reject(error);
        video.load();
    });
};

export const analyzeVideoProperties = (video) => {
    return {
        duration: video.duration,
        videoWidth: video.videoWidth,
        videoHeight: video.videoHeight,
        hasAudio: video.audioTracks.length > 0,
    };
};