
import { useEffect ,useRef} from "react";
import "./Home.css";
import { Carousel } from 'react-bootstrap';
  

const Home = () => {
  
   const marquee = useRef<HTMLDivElement>(null);
useEffect(() => {
  const timer = setInterval(() => {
    // future logic
  }, 3000);

  return () => clearInterval(timer);
}, []);


  return (
    <>
      {/* ================= SLIDER ================= */}
       <div className="custom-slider-wrapper shadow-lg mb-4">
      <Carousel interval={3000} fade={false} indicators={true} controls={true}>
        
        {/* Slide 1 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/SiderImage/sider1.jpg"
            alt="First slide"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption >
            <h3 >Latest Government Jobs</h3>
            <p>Verified notifications for Central & State departments.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/SiderImage/sider2.jpg"
            alt="Second slide"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption >
            <h3 >Exam Results & Admit Cards</h3>
            <p>Download hall tickets and check selection lists instantly.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/SiderImage/sider3.jpg"
            alt="Third slide"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption >
            <h3 >Official Schemes 2026</h3>
            <p>Explore all active welfare schemes and eligibility criteria.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
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
