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
         <Link to="/">Home</Link> |{" "}
        <a href="#">
          Products <span className="arrow">▾</span>
        </a>
        <a href="#">
           <Link to="/SaveBasicInformation" className="signup">Add Information</Link> <span className="arrow">▾</span>
        </a>
        <a href="#">Pricing</a>
      </nav>

      {/* Right - Auth */}a
       <div className="auth">
      
      {/* React Router Link */}
      <Link to="/signup" className="signup">
          Sign up 
      </Link>
  <Link to="/Login" className="signup">Login</Link>  
    </div>
    </header>
  );
}

export default Header;
