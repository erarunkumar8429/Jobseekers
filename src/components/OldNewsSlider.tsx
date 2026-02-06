import { useEffect, useState } from "react";
import { getVideos } from "../services/videoService";
import type { Video } from "../models/Video";

const OldNewsSlider = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    getVideos().then(setVideos);
  }, []);

  return (
    <section>
      <h2 style={{ margin: "16px" }}>Latest Updates</h2>

      <div style={{
        display: "flex",
        gap: "16px",
        overflowX: "auto",
        padding: "16px",
        scrollBehavior: "smooth"
      }}>
        {videos.map(v => (
          <div key={v.videoId} style={{
            minWidth: "260px",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 2px 6px rgba(0,0,0,.15)"
          }}>
            <iframe
              height="160"
              width="100%"
              src={`https://www.youtube.com/embed/${v.videoUrl.split("v=")[1]}`}
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

export default OldNewsSlider;
