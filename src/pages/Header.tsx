import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      {/* Left - Logo */}
      <div className="logo">
        <div className="logo-icon"></div>
        <span>Untitled UI</span>
      </div>

      {/* Center - Menu */}
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">
          Products <span className="arrow">▾</span>
        </a>
        <a href="#">
          Resources <span className="arrow">▾</span>
        </a>
        <a href="#">Pricing</a>
      </nav>

      {/* Right - Auth */}
       <div className="auth">
      <a href="#" className="login">Log in</a>

      {/* React Router Link */}
      <Link to="/BasicDetails" className="signup">
          Sign up
      </Link>

      <button className="signup">Login </button>
    </div>
    </header>
  );
}

export default Header;
