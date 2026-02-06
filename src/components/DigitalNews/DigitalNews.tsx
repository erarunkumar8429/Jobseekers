import "./DigitalNewsSlider.css";
import { useEffect, useRef } from "react";
import type { Video } from "../../models/Video";

const DigitalNewsSlider = ({ videos }: { videos: Video[] }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      if (ref.current) ref.current.scrollLeft += 300;
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="digital-slider" ref={ref}>
      {videos.map((v) => (
        <div key={v.videoId} className="digital-card">
          <iframe
            src={`https://www.youtube.com/embed/${v.videoUrl.split("v=")[1]}`}
          />
          <p>{v.title}</p>
        </div>
      ))}
    </div>
  );
};

export default DigitalNewsSlider;
