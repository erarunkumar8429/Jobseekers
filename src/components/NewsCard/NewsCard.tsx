import "./NewsCard.css";
import type{ Video } from "../../models/Video";

const NewsCard = ({ video }: { video: Video }) => {
  return (
    <div className="news-card">
      <iframe
        src={`https://www.youtube.com/embed/${video.videoUrl.split("v=")[1]}`}
        title={video.title}
      />
      <p>{video.title}</p>
    </div>
  );
};

export default NewsCard;
