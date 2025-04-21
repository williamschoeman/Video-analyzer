# Video Analyzer Application

This application allows users to analyze videos for specific properties and visual features, such as detecting spherical objects. The application provides a simple interface to select and analyze videos.

## Features
- Fetches a list of available videos from the server.
- Dynamically generates buttons for each video in the `videos` directory.
- Allows users to analyze videos by clicking on the corresponding button.
- Displays analysis results in a readable JSON format.

## How It Works
1. The application fetches a list of videos from the `/videos` endpoint.
2. For each video, a button is dynamically created on the webpage.
3. When a button is clicked, the application sends a request to the `/analyze` endpoint with the selected video.
4. The server processes the video and returns the analysis results, which are displayed on the page.

## FFmpeg and FFprobe Installation

This application requires `ffmpeg` and `ffprobe` to be installed and accessible on your system. You can verify their installation by running the following commands in your terminal:

```bash
ffmpeg -version
ffprobe -version
```

If these commands are not recognized, follow the installation instructions below:

### Installation Instructions
- **macOS**:
  ```bash
  brew install ffmpeg
  ```
- **Ubuntu/Debian**:
  ```bash
  sudo apt update
  sudo apt install ffmpeg
  ```
- **Windows**:
  1. Download FFmpeg from the [official website](https://ffmpeg.org/download.html).
  2. Extract the files and add the `bin` directory to your system's PATH.

For more details, refer to the [official FFmpeg documentation](https://ffmpeg.org/documentation.html).

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd video-analyzer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Ensure `ffmpeg` is installed on your system (see above).

4. Start the server:
   ```bash
   npm start
   ```

5. Open the application in your browser:
   ```
   http://127.0.0.1:8080
   ```

## Usage Guidelines

- Place your video files in the `videos` directory.
- The application will dynamically create buttons for all `.mp4` files in the `videos` directory.
- Click on a button to analyze the corresponding video. The results will be displayed on the page.

## Limitations

- Spherical object detection is not supported in the Node.js implementation.

## Contributing

Feel free to submit issues or pull requests if you would like to contribute to the project.