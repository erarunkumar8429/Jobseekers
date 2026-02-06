import { useEffect, useState } from "react";
import type { Video } from "../models/Video";
import { getVideos } from "../services/videoService";
import CategoryFilter from "./CategoryFilter";

const DigitalNewsSlider = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    getVideos().then(setVideos);
  }, []);

  const categories = ["All", ...new Set(videos.map(v => v.category))];

  const filtered =
    category === "All"
      ? videos
      : videos.filter(v => v.category === category);

  return (
    <section>
      <h2 style={{ margin: "16px" }}>डिजिटल न्यूज़</h2>

      <CategoryFilter
        categories={categories}
        selected={category}
        onSelect={setCategory}
      />

      <div style={{
        display: "flex",
        overflowX: "auto",
        gap: "16px",
        padding: "16px"
      }}>
        {filtered.map(video => (
          <div key={video.videoId} style={{ minWidth: "300px" }}>
            <iframe
              height="180"
              width="100%"
              src={`https://www.youtube.com/embed/${video.videoUrl.split("v=")[1]}`}
              allowFullScreen
            />
            <p style={{ fontWeight: "bold" }}>{video.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalNewsSlider;
