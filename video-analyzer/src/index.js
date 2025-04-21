import { loadVideo, analyzeVideoProperties } from './utils/videoProcessor.js';
import path from 'path'; // Correct import for Node.js built-in module
import fs from 'fs'; // Correct import for Node.js built-in module

console.log('Script loaded successfully');

const videosDir = path.resolve('./videos');
const videoFiles = fs.readdirSync(videosDir).filter((file) => file.endsWith('.mp4'));

console.log('Available videos:', videoFiles);

videoFiles.forEach((file) => {
    const videoPath = path.join(videosDir, file);
    analyzeVideo(videoPath);
});

function analyzeVideo(videoPath) {
    loadVideo(videoPath)
        .then(() => analyzeVideoProperties(videoPath))
        .then((properties) => {
            console.log(`Analysis for ${path.basename(videoPath)}:`, properties);
        })
        .catch((error) => {
            console.error(`Error analyzing video ${path.basename(videoPath)}:`, error);
        });
}