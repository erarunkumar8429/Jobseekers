import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="gov-header shadow-sm">
      <div className="header-wrapper">
        
        {/* LEFT: Branding */}
        <div className="header-left">
          <Link to="/" className="brand-link">
            <i className="fa fa-university me-2 text-warning"></i>
            <span>Gov<span className="gold-text">One</span></span>
          </Link>
        </div>

        {/* CENTER: Navigation with Nested Menus */}
        <nav className="header-center">
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            
            {/* Dropdown Item 1 */}
            <li className="nav-dropdown">
              <Link to="/jobs">
                Govt Jobs <i className="fa fa-chevron-down ms-1 tiny-icon"></i>
              </Link>
              <ul className="sub-menu">
                <li><Link to="/jobs/central">Central Govt Jobs</Link></li>
                <li><Link to="/jobs/state">State Govt Jobs</Link></li>
                <li><Link to="/jobs/railway">Railway Recruitment</Link></li>
                <li><Link to="/Dashboard">Admin Dashboard</Link></li>
                <li><Link to="/UserDashboard">User Dashboard</Link></li>
                <li><Link to="/pages/EditorDashboard">Editor Dashboard</Link></li>
                <li><Link to="/pages/DecisionAnalytics">DecisionAnalytics</Link></li>
              </ul>
            </li>

            {/* Dropdown Item 2 */}
            <li className="nav-dropdown">
              <Link to="/exams">
                Exams <i className="fa fa-chevron-down ms-1 tiny-icon"></i>
              </Link>
              <ul className="sub-menu">
                <li><Link to="/exams/upsc">UPSC / SSC</Link></li>
                <li><Link to="/exams/admit-card">Admit Cards</Link></li>
                <li><Link to="/exams/results">Exam Results</Link></li>
              </ul>
            </li>

            <li><Link to="/schemes">Schemes</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* RIGHT: Auth Section */}
        <div className="header-right">
          <Link to="/login" className="btn-login">Login</Link>
          <Link to="/signup" className="btn-signup-gov">Sign Up</Link>
        </div>

      </div>
    </header>
  );
};

export default Header;