import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Left Section */}
        <div className="footer-left">
          <div className="brand">
            <div className="brand-icon">〽</div>
            <h3>Graphy</h3>
          </div>

          <p className="description">
            Graphy empowers teams to transform raw data into clear, compelling
            visuals — making insights easier to share, understand, and act on.
          </p>

          <div className="socials">
            <span>✕</span>
            <span>⌘</span>
            <span>in</span>
            <span>◯</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Integrations</a>
            <a href="#">Changelog</a>
          </div>

          <div>
            <h4>Resources</h4>
            <a href="#">Documentation</a>
            <a href="#">Tutorials</a>
            <a href="#">Blog</a>
            <a href="#">Support</a>
          </div>

          <div>
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
            <a href="#">Partners</a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2025 Graphy. All rights reserved.</p>

        <div className="policies">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
