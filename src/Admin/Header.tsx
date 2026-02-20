import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom'; // 1. Import the hook

import Swal from 'sweetalert2';

interface HeaderProps {
  sidebarCollapsed: boolean;
}



const StylishAdminHeader: React.FC<HeaderProps> = ({ sidebarCollapsed }) => {
  const [showProfile, setShowProfile] = useState(false);
  const [showNotify, setShowNotify] = useState(false);

const handleLogout = () => {
  
const navigate = useNavigate();
  Swal.fire({
    title: 'Logout?',
    text: "You will need to login again to access your data.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    confirmButtonText: 'Yes, logout!'
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem('token');
      navigate('/login');
    }
  });
};

  // Define sidebar widths (match these to your Sidebar component)
  const sidebarWidth = sidebarCollapsed ? '80px' : '260px';

  return (
    <nav 
      className="navbar navbar-expand-lg fixed-top px-4 py-2" 
      style={{ 
        background: 'rgba(255, 255, 255, 0.9)', 
        backdropFilter: 'blur(10px)', 
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        zIndex: 1040,
        // THE FIX: Move the header to the right and shrink it so it doesn't overlap sidebar
        left: sidebarWidth,
        width: `calc(100% - ${sidebarWidth})`,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' 
      }}
    >
      <div className="container-fluid">
        
        {/* PAGE TITLE */}
        <div className="d-flex align-items-center">
           <h5 className="mb-0 fw-bold text-dark">Dashboard</h5>
           <span className="badge ms-3 d-none d-md-inline-block" style={{ backgroundColor: '#e7f1ff', color: '#0d6efd', fontSize: '0.7rem' }}>
             PRO PLAN
           </span>
        </div>

        <div className="ms-auto d-flex align-items-center gap-3">
          
          {/* 1. NOTIFICATION DROPDOWN */}
          <div className="position-relative">
            <div 
              className={`p-2 rounded-circle transition-all ${showNotify ? 'bg-primary text-white shadow' : 'bg-light text-secondary'}`}
              onClick={() => { setShowNotify(!showNotify); setShowProfile(false); }}
              style={{ width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >
              <i className={`bi bi-bell${showNotify ? '-fill' : ''}`} style={{ fontSize: '1.1rem' }}></i>
            </div>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-white" style={{ fontSize: '0.6rem' }}>3</span>

            {showNotify && (
              <ul className="dropdown-menu dropdown-menu-end show shadow-lg border-0 mt-3 rounded-4 p-2 animate-fade-in" style={{ minWidth: '280px', display: 'block', position: 'absolute' }}>
                <li><p className="dropdown-header fw-bold text-dark border-bottom mb-2 pb-2">Notifications</p></li>
                <li>
                  <a className="dropdown-item rounded-3 py-2 d-flex align-items-center" href="#">
                    <div className="p-2 rounded-circle me-3" style={{ background: '#e1f5fe' }}>
                      <i className="bi bi-person-plus text-info"></i>
                    </div>
                    <div>
                      <p className="mb-0 small fw-bold">New Candidate</p>
                      <small className="text-muted">2 mins ago</small>
                    </div>
                  </a>
                </li>
                <li><hr className="dropdown-divider opacity-50" /></li>
                <li className="text-center"><a href="#" className="small text-decoration-none py-1 d-block text-primary">View All Alerts</a></li>
              </ul>
            )}
          </div>

          {/* 2. PROFILE DROPDOWN */}
          <div className="position-relative">
            <div 
              className="d-flex align-items-center p-1 pe-3 bg-white border border-light-subtle rounded-pill shadow-sm hover-shadow transition-all" 
              onClick={() => { setShowProfile(!showProfile); setShowNotify(false); }}
              style={{ cursor: 'pointer' }}
            >
              <img 
                src="https://ui-avatars.com/api/?name=Admin&background=0D6EFD&color=fff&bold=true" 
                alt="Profile" className="rounded-circle me-2 border border-2 border-white" width="32" height="32" 
              />
              <div className="d-none d-lg-block">
                <p className="mb-0 fw-bold small text-dark lh-1">Admin Portal</p>
                <span className="text-muted" style={{ fontSize: '0.6rem' }}>Super User</span>
              </div>
              <i className={`bi bi-chevron-down ms-2 small text-muted transition-all ${showProfile ? 'rotate-180' : ''}`}></i>
            </div>

            {showProfile && (
              <ul className="dropdown-menu dropdown-menu-end show shadow-lg border-0 mt-3 rounded-4 p-2" style={{ minWidth: '220px', display: 'block', position: 'absolute' }}>
                <li className="p-3 text-center border-bottom mb-2">
                  <img src="https://ui-avatars.com/api/?name=Admin&background=0D6EFD&color=fff&bold=true" className="rounded-circle mb-2" width="50" height="50" alt="" />
                  <p className="mb-0 fw-bold small">Administrator</p>
                  <p className="text-muted mb-0" style={{ fontSize: '0.7rem' }}>admin@company.com</p>
                </li>
                <li><a className="dropdown-item rounded-3 py-2" href="#"><i className="bi bi-person me-2 text-primary"></i> Account Details</a></li>
                <li><a className="dropdown-item rounded-3 py-2" href="#"><i className="bi bi-shield-check me-2 text-success"></i> Security</a></li>
                <li><hr className="dropdown-divider opacity-50" /></li>
                <li>
                  <button className="dropdown-item rounded-3 py-2 text-danger fw-bold" onClick={handleLogout}>
                    <i className="bi bi-box-arrow-right me-2"></i> Sign Out
                  </button>
                </li>
              </ul>
            )}
          </div>

        </div>
      </div>
      
      {/* Click outside Overlay */}
      {(showProfile || showNotify) && (
        <div 
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} 
          onClick={() => { setShowProfile(false); setShowNotify(false); }}
        />
      )}

      <style>{`
        .rotate-180 { transform: rotate(180deg); }
        .transition-all { transition: all 0.3s ease; }
        .hover-shadow:hover { box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important; }
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
};

export default StylishAdminHeader;