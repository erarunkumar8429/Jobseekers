import "./LatestNews.css";
import type{ Video } from "../../models/Video";
import NewsCard from "../NewsCard/NewsCard";

const LatestNews = ({ videos }: { videos: Video[] }) => {
  return (
    <div className="latest-news">
      {videos.map((v) => (
        <NewsCard key={v.videoId} video={v} />
      ))}
    </div>
  );
};

export default LatestNews;
