import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';

export const checkFFmpegInstallation = () => {
    return new Promise((resolve, reject) => {
        ffmpeg.getAvailableFormats((err) => {
            if (err) {
                reject(new Error('FFmpeg or FFprobe is not installed or not accessible. Please install them from the official repositories: https://ffmpeg.org/download.html'));
            } else {
                resolve('FFmpeg and FFprobe are installed and working correctly.');
            }
        });
    });
};

export const loadVideo = (videoPath) => {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(videoPath)) {
            return reject(new Error('Video file does not exist.'));
        }
        resolve(videoPath);
    });
};

export const analyzeVideoProperties = (videoPath) => {
    return new Promise((resolve, reject) => {
        ffmpeg.ffprobe(videoPath, (err, metadata) => {
            if (err) return reject(err);
            const { duration, width, height } = metadata.streams[0];
            resolve({
                duration,
                videoWidth: width,
                videoHeight: height,
                hasAudio: metadata.streams.some((stream) => stream.codec_type === 'audio'),
            });
        });
    });
};

export const detectSphericalObjects = () => {
    throw new Error('Spherical object detection is not supported in Node.js.');
};