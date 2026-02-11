import "./Footer.css";

function Footer() {
  return (
    <footer className="gov-footer-section">
      {/* Top Section */}
      <div className="footer-container">
        <div className="row g-4">
          
          {/* BRAND COL */}
          <div className="col-lg-4 col-md-6">
            <h3 className="footer-brand">
              Gov<span className="gold-text">One</span>
            </h3>
            <p className="footer-about">
              Trusted government job awareness portal providing verified 
              job notifications, exam updates, and important announcements. 
              Dedicated to serving job seekers across India.
            </p>
            <div className="social-links-footer">
              <a href="#"><i className="fab fa-x-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#">Latest Jobs</a></li>
              <li><a href="#">Admit Card</a></li>
              <li><a href="#">Results</a></li>
              <li><a href="#">Exam Calendar</a></li>
            </ul>
          </div>

          {/* CATEGORIES */}
          <div className="col-lg-3 col-md-6 col-6">
            <h5 className="footer-heading">Job Categories</h5>
            <ul className="footer-links">
              <li><a href="#">UPSC / SSC Jobs</a></li>
              <li><a href="#">Railway Recruitment</a></li>
              <li><a href="#">Teaching Jobs</a></li>
              <li><a href="#">Banking Sector</a></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">Help & Support</h5>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Disclaimer</a></li>
              <li><a href="#">Contact Support</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom-bar">
        <div className="container-fluid px-5 d-flex justify-content-between align-items-center flex-wrap">
          <p className="mb-0">© 2026 GovOne. Ministry of Information Awareness (Mock).</p>
          <p className="mb-0">Made with ❤️ for Indian Job Seekers 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;