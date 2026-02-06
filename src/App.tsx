import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import BasicDetails from "./pages/BasicDetails";
 import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
     

      <Header/> 
  
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/BasicDetails" element={<BasicDetails />} />
      </Routes>
      <Footer/> 
    </div>
  );
};

export default App;
