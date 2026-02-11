import  { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Users/Header";
import Sidebar from "../Users/Sidebar";
import Footer from "../Users/Footer";
import "./Common.css";
const DashboardLayout = () => {
  // Shared state to control the layout width
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Define widths for consistency
  const sidebarWidth = isCollapsed ? "80px" : "260px";

  return (
    <div className="layout-container">
      {/* 1. Fixed Sidebar */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* 2. Main Wrapper: Adjusts margin dynamically */}
      <div 
        className="main-wrapper" 
        style={{ 
          marginLeft: sidebarWidth, 
          transition: "margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {/* Header (passes state to adjust its own width internaly) */}
        <Header sidebarCollapsed={isCollapsed} />

        {/* Content Area (contains DashboardHome/Carousel) */}
        <main className="flex-grow-1 p-4">
          <Outlet /> 
        </main>

        <Footer/>
      </div>
    </div>
  );
};

export default DashboardLayout;