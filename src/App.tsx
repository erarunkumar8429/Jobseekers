import { Routes, Route ,Navigate} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"; 
import BasicDetails from "./pages/BasicDetails"; 
import MainLayout from "./pages/DashboardLayout";
import Signup from "./pages/signup";
import DashboardLayout from "./Admin/MainLayout";
import DashboardHome from "./Admin/DashboardHome";
import Profile from "./Admin/Profile";
import AddNewJob from "./Admin/AddNewJob";


import UserLayout from "./Users/MainLayout";
import UserDashboard from "./Users/UserDashboard";
import FillUserDetails from "./Users/FillUserDetails";
import UserRegistration from "./Users/UserRegistration";


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
        <Route path="AddNewJob" element={<AddNewJob/>} />
      </Route>

      {/* Admin Dashboard Pages (not default) */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="AddNewJobForm" element={<AddNewJob />} />
        {/* <Route path="AdminJobForm" element={<AdminJobForm />} /> */}
      </Route>
      
     {/* User Dashboard Pages (not default) */}
      <Route path="/UserDashboard" element={<UserLayout />}>
        <Route index element={<UserDashboard />} />
        <Route path="FillUserDetails" element={<FillUserDetails />} />
        <Route path="UserRegistration" element={<UserRegistration />} />
         
      </Route>

      {/* Unknown route */}
      <Route path="*" element={<Navigate to="/" />} />
   </Routes>
 
    </div>
  );
};

export default App;
