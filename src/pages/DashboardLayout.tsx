import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "../pages/Footer";

const DashboardLayout = () => {
  return (
    <div className="layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      {/* paddingTop: 85px (75px header + 10px gap)
          flex: 1 ensures the footer stays at the bottom even on short pages
      */}
      <div className="body" style={{ paddingTop: '75px', flex: '1 0 auto' }}>
        
        {/* margin: 0 5% provides the consistent left and right spacing */}
        <main className="content" >
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardLayout;