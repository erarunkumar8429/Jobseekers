import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const StylishAdminHeader: React.FC = () => {
  // State to control dropdown visibility
  const [showProfile, setShowProfile] = useState(false);
  const [showNotify, setShowNotify] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg sticky-top px-4 py-3" 
         style={{ 
           background: 'rgba(255, 255, 255, 0.85)', 
           backdropFilter: 'blur(15px)', 
           borderBottom: '1px solid rgba(0,0,0,0.08)',
           zIndex: 1050 
         }}>
      <div className="container-fluid">
        
        {/* LOGO */}
        <a className="navbar-brand fw-bolder fs-3" href="#" style={{ letterSpacing: '-1px' }}>
          <span style={{ background: 'linear-gradient(45deg, #0d6efd, #6610f2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            ADMIN
          </span>
          <span className="text-dark">HUB</span>
        </a>

        <div className="ms-auto d-flex align-items-center gap-3">
          
          {/* 1. NOTIFICATION DROPDOWN */}
          <div className="position-relative">
            <div 
              className={`p-2 rounded-circle shadow-sm cursor-pointer ${showNotify ? 'bg-primary text-white' : 'bg-light'}`}
              onClick={() => { setShowNotify(!showNotify); setShowProfile(false); }}
              style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >
              <i className={`bi bi-bell${showNotify ? '-fill' : ''}`}></i>
            </div>
            {/* Notification Badge */}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.6rem' }}>3</span>

            {/* Notification Menu */}
            {showNotify && (
              <ul className="dropdown-menu dropdown-menu-end show shadow-lg border-0 mt-3 rounded-4 p-2 animate-fade-in" style={{ minWidth: '250px', display: 'block' }}>
                <li><p className="dropdown-header fw-bold">Recent Alerts</p></li>
                <li><a className="dropdown-item rounded-3 small py-2" href="#">New Candidate Registered</a></li>
                <li><a className="dropdown-item rounded-3 small py-2" href="#">Education section saved</a></li>
              </ul>
            )}
          </div>

          {/* 2. PROFILE & SETTINGS DROPDOWN */}
          <div className="position-relative">
            <div 
              className="d-flex align-items-center p-1 pe-3 bg-white border rounded-pill shadow-sm" 
              onClick={() => { setShowProfile(!showProfile); setShowNotify(false); }}
              style={{ cursor: 'pointer' }}
            >
              <img 
                src="https://ui-avatars.com/api/?name=Admin&background=0D6EFD&color=fff&bold=true" 
                alt="Profile" className="rounded-circle me-2" width="32" height="32" 
              />
              <div className="d-none d-sm-block">
                <p className="mb-0 fw-bold small text-dark lh-1">Admin Name</p>
                <span className="text-muted" style={{ fontSize: '0.65rem' }}>Full Access</span>
              </div>
            </div>

            {/* Profile Menu */}
            {showProfile && (
              <ul className="dropdown-menu dropdown-menu-end show shadow-lg border-0 mt-3 rounded-4 p-2" style={{ minWidth: '200px', display: 'block' }}>
                <li><a className="dropdown-item rounded-3 py-2" href="#"><i className="bi bi-person me-2 text-primary"></i> Profile</a></li>
                <li><a className="dropdown-item rounded-3 py-2" href="#"><i className="bi bi-gear me-2 text-primary"></i> Settings</a></li>
                <li><hr className="dropdown-divider mx-2" /></li>
                <li>
                  <button className="dropdown-item rounded-3 py-2 text-danger fw-bold" onClick={() => alert('Logged Out')}>
                    <i className="bi bi-box-arrow-right me-2"></i> Logout
                  </button>
                </li>
              </ul>
            )}
          </div>

        </div>
      </div>
      
      {/* Click outside to close - Overlay */}
      {(showProfile || showNotify) && (
        <div 
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} 
          onClick={() => { setShowProfile(false); setShowNotify(false); }}
        />
      )}
    </nav>
  );
};

export default StylishAdminHeader;