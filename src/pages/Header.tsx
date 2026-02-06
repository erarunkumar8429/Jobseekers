import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        GovOne
      </div>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Govt Jobs</a>
        <a href="#">Exams</a>
        <a href="#">Admit Card</a>
        <a href="#">Results</a>
        <a href="#">Schemes</a>
        <a href="#">Notifications</a>
        <a href="#">Contact</a>
        <a href="#" className="btn btn-success">Login</a>
        <a href="#">Register</a>
      </nav>
    </header>
  );
}

export default Header;
