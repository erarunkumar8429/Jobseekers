// import "./HeroSlider.css";
import type{ Video } from "../../models/Video";

const HeroSlider = ({ videos }: { videos: Video[] }) => {
  return (
    <div className="hero-slider">
      {videos.slice(0, 5).map((v) => (
        <div className="hero-slide" key={v.videoId}>
          <iframe
            src={`https://www.youtube.com/embed/${v.videoUrl.split("v=")[1]}`}
            title={v.title}
            allowFullScreen
          />
          <div className="hero-title">{v.title}</div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
