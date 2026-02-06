import "./ShortsSection.css";
import type { Video } from "../../models/Video";

const ShortsSection = ({ videos }: { videos: Video[] }) => {
  return (
    <div className="shorts">
      {videos.slice(0, 6).map((v) => (
        <iframe
          key={v.videoId}
          src={`https://www.youtube.com/embed/${v.videoUrl.split("v=")[1]}`}
        />
      ))}
    </div>
  );
};

export default ShortsSection;
