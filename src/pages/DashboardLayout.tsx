// layouts/DashboardLayout.tsx
import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "../pages/Footer";

const DashboardLayout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="body">
        
        <main className="content">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
