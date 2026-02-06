import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const AdminSidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  
  // Track which specific inner link or main link is active
  const [activeLink, setActiveLink] = useState('dashboard');

  const handleInnerClick = (id: string) => {
    setActiveLink(id);
  };

  return (
    <div 
      className="border-end d-flex flex-column shadow-sm"
      style={{ 
        width: isCollapsed ? '85px' : '260px', 
        minHeight: '100vh',
        backgroundColor: '#FBFBFD',
        transition: 'width 0.3s ease'
      }}
    >
      {/* HEADER */}
      <div className="p-4 d-flex align-items-center justify-content-between">
        {!isCollapsed && <h5 className="fw-bold mb-0 text-primary">ADMIN<span className="text-dark">HUB</span></h5>}
        <button className="btn btn-sm btn-light border" onClick={() => setIsCollapsed(!isCollapsed)}>
          <i className={`fa fa-${isCollapsed ? 'indent' : 'outdent'}`}></i>
        </button>
      </div>

      {/* NAVIGATION */}
      <div className="px-3">
        <ul className="list-unstyled">
          
          {/* DASHBOARD LINK */}
          <li className="mb-2">
            <button 
              onClick={() => setActiveLink('dashboard')}
              className={`sidebar-btn w-100 d-flex align-items-center border-0 rounded-3 py-2 px-3 ${activeLink === 'dashboard' ? 'active-main' : ''}`}
            >
              <i className="fa fa-th-large icon-width"></i>
              {!isCollapsed && <span className="ms-3 fw-bold small">Dashboard</span>}
            </button>
          </li>

          <li className="mb-2">
            <button 
              onClick={() => setActiveLink('dashboard')}
              className={`sidebar-btn w-100 d-flex align-items-center border-0 rounded-3 py-2 px-3 ${activeLink === 'dashboard' ? 'active-main' : ''}`}
            >
              <i className="fa fa-th-large icon-width"></i>
              {!isCollapsed && <span className="ms-3 fw-bold small">  <Link to="JobEntryForm" >
         Add Jobs
      </Link></span>}
            </button>
          </li>

          {/* CANDIDATES WITH INNER LINKS */}
          <li className="mb-2">
            <button 
              className={`sidebar-btn w-100 d-flex align-items-center border-0 rounded-3 py-2 px-3 ${openSubMenu === 'candidates' ? 'parent-open' : ''}`}
              onClick={() => setOpenSubMenu(openSubMenu === 'candidates' ? null : 'candidates')}
            >
              <i className="fa fa-user-friends icon-width"></i>
              {!isCollapsed && (
                <>
                  <span className="ms-3 fw-bold small flex-grow-1 text-start">Candidates</span>
                  <i className={`fa fa-chevron-right arrow-icon ${openSubMenu === 'candidates' ? 'rotate-90' : ''}`}></i>
                </>
              )}
            </button>

            {/* INNER LINKS */}
            {!isCollapsed && openSubMenu === 'candidates' && (
              <ul className="list-unstyled ms-4 ps-3 border-start mt-1">
                {[
                  { id: 'add-new', label: 'Add New Candidate' },
                  { id: 'manage-all', label: 'Manage All' },
                  { id: 'drafts', label: 'Draft Entries' }
                ].map((item) => (
                  <li key={item.id} className="py-1">
                    <button 
                      onClick={() => handleInnerClick(item.id)}
                      className={`inner-link-btn w-100 text-start border-0 py-1 px-2 rounded-2 small ${activeLink === item.id ? 'active-inner' : ''}`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>

        </ul>
      </div>

      <style>{`
        .icon-width { width: 25px; text-align: center; color: #6c757d; }
        
        .sidebar-btn {
          background: transparent;
          color: #495057;
          transition: all 0.2s ease;
        }

        .sidebar-btn:hover, .active-main {
          background-color: #f0f7ff !important;
          color: #0d6efd !important;
          border: 1px solid #cfe2ff !important;
        }

        .parent-open {
          color: #0d6efd !important;
        }

        .arrow-icon {
          font-size: 0.7rem;
          transition: transform 0.3s ease;
        }
        .rotate-90 { transform: rotate(90deg); }

        /* INNER LINK BUTTON STYLE */
        .inner-link-btn {
          background: transparent;
          color: #6c757d;
          transition: all 0.2s ease;
          position: relative;
        }

        .inner-link-btn:hover {
          color: #0d6efd;
          padding-left: 12px !important;
        }

        /* HIGHLIGHT FOR CLICKED INNER LINK */
        .active-inner {
          color: #0d6efd !important;
          font-weight: 700 !important;
          background-color: #f0f7ff !important;
        }

        .active-inner::before {
          content: "";
          position: absolute;
          left: -17px; /* Matches the border-start position */
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          background-color: #0d6efd;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default AdminSidebar;