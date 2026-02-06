import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        GovOne
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
         <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Govt Jobs</a>
        <a href="#">Exams</a>
        <a href="#">Admit Card</a>
        <a href="#">Results</a>
        <a href="#">Schemes</a>
        <a href="#">Notifications</a>
        <a href="#">Contact</a>
         <Link to="/signup" className="btn btn-success">
          Login
      </Link>
        <Link to="/signup" className="signup">
          Sign up 
      </Link>
      </nav>
      <div> 
    </div> 
    </header>
  );
}

export default Header;
