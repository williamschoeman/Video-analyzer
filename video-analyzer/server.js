import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { loadVideo, analyzeVideoProperties, checkFFmpegInstallation } from './src/utils/videoProcessor.js';
import fs from 'fs';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Check FFmpeg installation on server startup
checkFFmpegInstallation()
    .then((message) => console.log(message))
    .catch((error) => {
        console.error(error.message);
        process.exit(1); // Exit the server if FFmpeg is not installed
    });

// Serve static files (e.g., index.html, videos)
app.use(express.static(__dirname));

// Endpoint to get the list of available videos
app.get('/videos', (req, res) => {
    const videosDir = path.join(__dirname, 'videos');
    const videoFiles = fs.readdirSync(videosDir).filter((file) => file.endsWith('.mp4'));
    res.json(videoFiles);
});

// Endpoint to analyze a specific video
app.get('/analyze', async (req, res) => {
    const videoName = req.query.video;
    if (!videoName) {
        return res.status(400).json({ error: 'No video specified' });
    }

    const videoPath = path.join(__dirname, 'videos', videoName);
    if (!fs.existsSync(videoPath)) {
        return res.status(404).json({ error: 'Video not found' });
    }

    try {
        await loadVideo(videoPath);
        const properties = await analyzeVideoProperties(videoPath);
        res.json({ file: videoName, properties });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
});
