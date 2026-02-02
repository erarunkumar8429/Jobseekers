import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <h1>App Loaded ✅</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
