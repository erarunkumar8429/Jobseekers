import React, { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from "react-router-dom";
 import "./Common.css";
interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
}

const GovSidebar: React.FC<SidebarProps> = ({ isCollapsed, setIsCollapsed }) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div 
      className="shadow-lg d-flex flex-column"
      style={{ 
        width: isCollapsed ? '80px' : '280px', 
        backgroundColor: '#002651', 
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh', // Keeps sidebar exactly screen height
        zIndex: 1050,
        color: '#ffffff',
        borderRight: '4px solid #FFD700',
        overflow: 'hidden' // Prevents the whole sidebar from scrolling
      }}
    >

 {/* 2. FIXED TOGGLE BUTTON */}
      <div className="px-3 my-3 text-center" style={{ flexShrink: 0 }}>
        <button 
          className="btn btn-outline-light  d-flex align-items-center justify-content-center bi bi-list" 
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={{ height: '35px' }}
        >
          <i className="fa fa-bars"></i> 
          {!isCollapsed && <span className="ms-2 fw-bold" style={{ fontSize: '0.8rem' }}></span>}
        </button>
      </div>

      {/* 1. FIXED HEADER: BRANDING */}
      {/* <div className="p-3 text-center border-bottom border-secondary" style={{ minHeight: '100px', flexShrink: 0 }}>
        {!isCollapsed ? (
          <div className="py-2">
            <h6 className="fw-bold mb-0" style={{ letterSpacing: '1px', color: '#FFD700' }}>
              ADMINISTRATION PORTAL
            </h6>
            <small className="text-uppercase" style={{ fontSize: '0.65rem', opacity: 0.8 }}>
              Government of India
            </small>
          </div>
        ) : (
          <div className="text-warning">
             <i className="fa fa-university fs-3"></i>
             <div style={{ fontSize: '0.5rem', marginTop: '4px', color: '#fff' }}>GOI</div>
          </div>
        )}
      </div> */}

     

      {/* 3. SCROLLABLE NAVIGATION AREA */}
      <div 
        className="px-2 flex-grow-1 custom-scrollbar" 
        style={{ 
            overflowY: 'auto', 
            overflowX: 'hidden' 
        }}
      >
        <ul className="list-unstyled">
          <li className="mb-2">
            <Link to="/UserDashboard" className={`gov-nav-link ${isActive('/UserDashboard') ? 'active' : ''}`}>
              <i className="fa fa-tachometer-alt gov-icon"></i>
              {!isCollapsed && <span className="ms-3 fw-bold">User Dashboard</span>}
            </Link>
          </li>

          <li className="mb-2">
            <Link to="FillUserDetails" className={`gov-nav-link ${isActive('/UserDashboard/FillUserDetails') ? 'active' : ''}`}>
              <i className="fa fa-file-signature gov-icon"></i>
              {!isCollapsed && <span className="ms-3 fw-bold">Fill Details</span>}
            </Link>
          </li>

          {/* Example of many links - Personnel Dropdown */}
          <li className="mb-2">
            <div 
              className={`gov-nav-link dropdown-trigger ${openSubMenu === 'recruitment' ? 'parent-active' : ''}`}
              onClick={() => {
                if(isCollapsed) setIsCollapsed(false);
                setOpenSubMenu(openSubMenu === 'recruitment' ? null : 'recruitment');
              }}
              style={{ cursor: 'pointer' }}
            >
              <i className="fa-solid fa-user-tie"></i>
              {!isCollapsed && (
                <>
                  <span className="ms-3 fw-bold flex-grow-1">Personnel Dept.</span>
                  <i className={`bi bi-caret-right-fill ${openSubMenu === 'recruitment' ? 'rotate-90' : ''}`}></i>
                </>
              )}
            </div>

            {!isCollapsed && openSubMenu === 'recruitment' && (
              <div className="bg-black bg-opacity-25 py-2 rounded mt-1 mx-2">
                <Link to="/candidates/add" className={`gov-inner-link ${isActive('/candidates/add') ? 'inner-active' : ''}`}>
                  <i className="fa fa-plus-square me-2" style={{ fontSize: '0.7rem' }}></i> Register Candidate
                </Link>
                <Link to="/candidates/manage" className={`gov-inner-link ${isActive('/candidates/manage') ? 'inner-active' : ''}`}>
                  <i className="fa fa-clipboard-list me-2" style={{ fontSize: '0.7rem' }}></i> Master Roll
                </Link>
              </div>
            )}
          </li>
          
          {/* Add more <li> items here to test scrolling... */}
        </ul>
      </div>

      {/* 4. FIXED FOOTER */}
      <div className="mt-auto p-3 bg-black bg-opacity-50 text-center border-top border-secondary" style={{ flexShrink: 0 }}>
        {!isCollapsed ? (
          <div className="animate-fade-in">
            <p className="mb-1 fw-bold" style={{ fontSize: '0.7rem', color: '#FFD700' }}>GOV SUPPORT</p>
            <p className="mb-0 text-white-50" style={{ fontSize: '0.6rem' }}>
              © 2026 Job Information Center
            </p>
          </div>
        ) : (
          <i className="fa fa-shield-alt text-secondary"></i>
        )}
      </div>

      <style>{`
        /* Enhanced Scrollbar for a modern look */
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 215, 0, 0.2); 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 215, 0, 0.5);
        }

        .gov-nav-link {
          display: flex;
          align-items: center;
          padding: 12px 18px;
          text-decoration: none !important;
          color: #ffffff;
          border-left: 4px solid transparent;
          transition: all 0.2s;
          font-size: 0.85rem;
          white-space: nowrap; /* Prevents text wrapping during scroll */
        }

        .gov-nav-link:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: #FFD700;
          border-left: 4px solid rgba(255, 215, 0, 0.5);
        }

        .gov-nav-link.active {
          background-color: #003a7a;
          border-left: 4px solid #FFD700;
          color: #FFD700;
        }

        .gov-inner-link {
          display: flex;
          align-items: center;
          padding: 8px 15px 8px 30px;
          text-decoration: none !important;
          color: #cbd5e0;
          font-size: 0.75rem;
          transition: 0.2s;
        }

        .gov-icon {
          width: 25px;
          text-align: center;
          font-size: 1.1rem;
          color: #FFD700;
          flex-shrink: 0;
        }

        .arrow-icon { transition: transform 0.2s; font-size: 0.8rem; }
        .rotate-90 { transform: rotate(90deg); }

        .animate-fade-in { animation: fadeIn 0.4s ease-in; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
};

export default GovSidebar;