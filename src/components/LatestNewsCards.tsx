import { useEffect, useState } from "react";
import { getVideos } from "../services/videoService";
import type { Video } from "../models/Video";

const LatestNewsCards = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    getVideos().then(setVideos);
  }, []);

  return (
    <section style={{ padding: "20px" }}>
      <h2>Latest Updates</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "16px",
        }}
      >
        {videos.map(v => (
          <div
            key={v.videoId}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <iframe
              height="160"
              src={`https://www.youtube.com/embed/${v.videoUrl.split("v=")[1]}`}
              title={v.title}
              allowFullScreen
            />
            <div style={{ padding: "10px" }}>
              <p>{v.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNewsCards;
