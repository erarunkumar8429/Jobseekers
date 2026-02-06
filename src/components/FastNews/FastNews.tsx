import "./FastNews.css";
import type{ Video } from "../../models/Video";

const FastNews = ({ videos }: { videos: Video[] }) => {
  return (
    <div className="fast-news">
      <h3>Fast News</h3>
      {videos.slice(0, 6).map((v) => (
        <p key={v.videoId}>• {v.title}</p>
      ))}
    </div>
  );
};

export default FastNews;
