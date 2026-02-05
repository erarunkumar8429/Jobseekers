import { useEffect, useState } from "react";
import "./Home.css";

import slide1 from "../assets/slider/gov5.png";
import slide2 from "../assets/slider/gov2.png";
import slide3 from "../assets/slider/gov3.jpg";
import slide4 from "../assets/slider/gov4.png";

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
      {/* 🔷 SLIDER */}
      <div className="slider">
        <img src={slides[current]} alt="slider" />

        <div className="slider-text">
          <h1>Government Job Alert</h1>
          <p>Sarkari Naukri | Rojgar Samachar</p>
        </div>
      </div>

      {/* 🔷 JOB CARDS */}
      <section className="job-section">
        <h2>Latest Job Alerts</h2>

        <div className="card-container">
          <div className="job-card">
            <h3>SSC CGL 2026</h3>
            <p>Graduate Pass</p>
            <span>Last Date: 15 Feb</span>
            <button>Apply</button>
          </div>

          <div className="job-card">
            <h3>UP Police</h3>
            <p>12th Pass</p>
            <span>Last Date: 20 Feb</span>
            <button>Apply</button>
          </div>

          <div className="job-card">
            <h3>Railway Group D</h3>
            <p>10th Pass</p>
            <span>Last Date: 28 Feb</span>
            <button>Apply</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
