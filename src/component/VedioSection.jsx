import React, { useRef } from 'react';
import vedio1 from '../assets/images/vedio1.mp4';
import vedio2 from '../assets/images/vedio2.mp4';
import '../assets/css/VedioSection.css'
const VideoSection = () => {
  const videoRefs = useRef([]);

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video) {
        video.pause(); // Pause other videos
      }
    });
  };

  return (
    <div>
      {/* Video Section 1 */}
      <div className="video-section">
        <video
          ref={(el) => (videoRefs.current[0] = el)}
          src={vedio1}
          controls
          onPlay={() => handlePlay(0)}
          width="100%" // You can adjust the width and height
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Video Section 2 */}
      <div className="video-section2">
        <video
          ref={(el) => (videoRefs.current[1] = el)}
          src={vedio2}
          controls
          onPlay={() => handlePlay(1)}
          width="100%" // You can adjust the width and height
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoSection;

