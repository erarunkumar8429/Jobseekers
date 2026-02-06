import { Routes, Route ,Navigate} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"; 
import BasicDetails from "./pages/BasicDetails"; 
import MainLayout from "./pages/DashboardLayout";
import Signup from "./pages/signup";
import DashboardLayout from "./Admin/MainLayout";
import DashboardHome from "./Admin/DashboardHome";
import JobEntryForm from "./Admin/JobEntryForm";
import SaveBasicInformation from "./Admin/SaveBasicInformation";
import Profile from "./Admin/Profile";
 import Header from "./pages/Header";
import Footer from "./pages/Footer"; 
 import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
        <Routes>

      {/* Default → Normal Pages */}
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />     {/* 👈 default page */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="BasicDetails" element={<BasicDetails />} />
        <Route path="SaveBasicInformation" element={<SaveBasicInformation />} />
      </Route>

      {/* Dashboard Pages (not default) */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="JobEntryForm" element={<JobEntryForm />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* Unknown route */}
      <Route path="*" element={<Navigate to="/" />} />
   </Routes>
 
    </div>
  );
};

export default App;
