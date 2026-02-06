import { useEffect, useState } from "react";
import type { Video } from "../models/Video";
import { getVideos } from "../services/videoService";
import "./VideoSection.css";

const VideoSection = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    getVideos().then(setVideos);
  }, []);

  return (
    <section className="video-section">
      <h2>डिजिटल न्यूज़</h2>

      <div className="video-slider">
        {videos.map((video) => (
          <div key={video.videoId} className="video-card">
            <iframe
              src={video.videoUrl}
              title={video.title}
              allowFullScreen
            />
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;
