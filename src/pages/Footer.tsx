import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* ===== TOP FOOTER ===== */}
      <div className="footer-top">

        {/* BRAND / ABOUT */}
        <div className="footer-col brand-col">
          <h3 className="brand-title">GovOne</h3>
          <p className="brand-desc">
            GovOne is a trusted government job awareness portal providing
            verified job notifications, exam updates, results, and important
            announcements in Hindi & English.
          </p>

          <div className="social-icons">
            <span>𝕏</span>
            <span>f</span>
            <span>in</span>
            <span>▶</span>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="#">Latest Jobs</a>
          <a href="#">Admit Card</a>
          <a href="#">Results</a>
          <a href="#">Exam Calendar</a>
          <a href="#">Answer Key</a>
        </div>

        {/* JOB CATEGORIES */}
        <div className="footer-col">
          <h4>Job Categories</h4>
          <a href="#">SSC Jobs</a>
          <a href="#">UPSC Jobs</a>
          <a href="#">Railway Jobs</a>
          <a href="#">Police Jobs</a>
          <a href="#">Teaching Jobs</a>
        </div>

        {/* IMPORTANT */}
        <div className="footer-col">
          <h4>Important</h4>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Disclaimer</a>
          <a href="#">Help & Support</a>
        </div>
      </div>

      {/* ===== DISCLAIMER ===== */}
      <div className="footer-disclaimer">
        <p>
          Disclaimer: GovOne is not affiliated with any government organization.
          All information is collected from official websites and news sources.
          Users are advised to verify details from official notifications.
        </p>
      </div>

      {/* ===== BOTTOM FOOTER ===== */}
      <div className="footer-bottom">
        <p>© 2026 GovOne. All Rights Reserved.</p>
        <p>Designed for Job Seekers 🇮🇳</p>
      </div>
    </footer>
  );
}

export default Footer;
