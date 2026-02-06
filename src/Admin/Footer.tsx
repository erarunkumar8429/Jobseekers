import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LightFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-top py-5 px-4 mt-auto">
      <div className="container">
        <div className="row g-4">
          
          {/* COLUMN 1: BRAND & STATUS */}
          <div className="col-lg-4">
            <h5 className="fw-bold text-dark mb-3">Job<span className="text-primary">Portal</span></h5>
            <p className="text-muted small mb-4" style={{ maxWidth: '300px' }}>
              A centralized platform for candidate registration and job management. 
              Securely saving data section by section for a better user experience.
            </p>
            <div className="d-flex align-items-center gap-2">
              <div className="pulse-dot-light"></div>
              <span className="text-muted fw-bold" style={{ fontSize: '0.7rem' }}>
                SYSTEM STATUS: <span className="text-success">ACTIVE</span>
              </span>
            </div>
          </div>

          {/* COLUMN 2: CONTACT INFORMATION */}
          <div className="col-lg-4">
            <h6 className="fw-bold text-dark text-uppercase small mb-3" style={{ letterSpacing: '1px' }}>
              Contact Support
            </h6>
            <div className="d-flex flex-column gap-2">
              <a href="mailto:support@jobportal.com" className="text-decoration-none text-muted small hover-primary">
                <i className="bi bi-envelope me-2 text-primary"></i> support@jobportal.com
              </a>
              <a href="tel:+911234567890" className="text-decoration-none text-muted small hover-primary">
                <i className="bi bi-telephone me-2 text-primary"></i> +91 123 456 7890
              </a>
              <p className="text-muted small mt-2">
                <i className="bi bi-geo-alt me-2 text-primary"></i> 123 Admin Block, Lucknow, UP
              </p>
            </div>
          </div>

          {/* COLUMN 3: SOCIAL MEDIA */}
          <div className="col-lg-4">
            <h6 className="fw-bold text-dark text-uppercase small mb-3" style={{ letterSpacing: '1px' }}>
              Follow Us
            </h6>
            <p className="text-muted small mb-3">Stay updated with our latest features.</p>
            <div className="d-flex gap-2">
              <a href="#" className="social-icon-light facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-icon-light twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="social-icon-light linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM STRIP */}
        <div className="border-top mt-5 pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="text-muted x-small mb-0">
            &copy; {currentYear} JobPortal Admin. All rights reserved.
          </p>
          <div className="d-flex gap-4">
            <a href="#" className="text-decoration-none text-muted x-small hover-dark">Privacy Policy</a>
            <a href="#" className="text-decoration-none text-muted x-small hover-dark">Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        .x-small { font-size: 0.75rem; }
        .hover-primary:hover { color: #0d6efd !important; }
        .hover-dark:hover { color: #212529 !important; }
        
        .pulse-dot-light {
          width: 8px;
          height: 8px;
          background-color: #198754;
          border-radius: 50%;
          animation: pulse-simple 2s infinite;
        }

        @keyframes pulse-simple {
          0% { opacity: 1; }
          50% { opacity: 0.4; }
          100% { opacity: 1; }
        }

        .social-icon-light {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f9fa;
          border: 1px solid #dee2e6;
          color: #6c757d;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .facebook:hover { background: #e7f0ff; color: #1877f2; border-color: #1877f2; }
        .twitter:hover { background: #f1f1f1; color: #000; border-color: #000; }
        .linkedin:hover { background: #e7f3ff; color: #0a66c2; border-color: #0a66c2; }
      `}</style>
    </footer>
  );
};

export default LightFooter;