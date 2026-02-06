
import { useEffect, useState,useRef } from "react";
import "./Home.css";

import slide1 from "../assets/slider/gov5.png";
import slide2 from "../assets/slider/gov2.png";
import slide3 from "../assets/slider/gov3.jpg";
import slide4 from "../assets/slider/gov4.png";
import { Link } from "react-router-dom";
const marquee = useRef<HTMLDivElement>(null);


const slides = [slide1, slide2, slide3, slide4];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ================= SLIDER ================= */}
      <div className="slider">
        <img src={slides[current]} alt="slider" />
        <div className="slider-text">
          <h1>Government Job Alert</h1>
          <p>Sarkari Naukri | Rojgar Samachar</p>
        </div>
      </div>

      {/* ================= LATEST JOB ALERT (NEW UI) ================= */}
      <section className="job-section new-job-ui">
        <h2>Latest Job Alerts</h2>

        <div className="job-grid">
          {[1,2,3,4,5,6].map((i) => (
            <div className="job-banner-card" key={i}>
              <div className="job-left">
                <h3>SSC CGL 2026</h3>
                <p>Graduate Pass • 7500+ Posts</p>
                <span>Last Date: 15 Feb 2026</span>
              </div>
              <div className="job-right">
                <button>Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FAST ALERT STRIP ================= */}
      <section className="alert-strip">
        <div ref={marquee}>
 
          🔔 SSC CGL | 🔔 UP Police | 🔔 Railway Group D | 🔔 CTET | 🔔 UPSC Updates
       </div>
      </section>

      {/* ================= VIDEO NEWS (AUTO PLAY) ================= */}
      <section className="video-section">
        <h2>Video News & Exam Updates</h2>

        <div className="video-grid">
          {[1,2,3,4,5,6].map((i) => (
            <div className="video-card" key={i}>
              <video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="video-caption">
                SSC • Railway • Police Exam Update
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SHORTS ================= */}
      <section className="shorts-section">
        <h2>Exam Shorts</h2>

        <div className="short-video-row">
          {[1,2,3,4,5,6,7,8].map((i) => (
            <div className="short-video-card" key={i}>
              <video
                src="https://www.w3schools.com/html/movie.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= LATEST NEWS ================= */}
      <section className="news-section">
        <h2>Latest News</h2>

        <div className="news-row">
          {[1,2,3,4,5,6].map((i) => (
            <div className="news-card" key={i}>
              <img src={`https://picsum.photos/300/180?random=${i}`} />
              <h4>Government Exam & Job Big Update</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ================= IMPORTANT LINKS ================= */}
      <section className="important-links">
        <h2>Important Links</h2>

        <div className="link-row">
          <a href="#">SSC Official Website</a>
          <a href="#">UPSC Official Website</a>
          <a href="#">Railway Recruitment</a>
          <a href="#">UP Police</a>
          <a href="#">Admit Card</a>
          <a href="#">Results</a>
        </div>
      </section>
    </>
  );
};

export default Home;
