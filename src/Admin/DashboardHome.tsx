import ExecutiveDashboard from "./ExecutiveDashboard";
import "./Common.css";

const DashboardHome = () => {
  return (
    // 'container-fluid' ensures the carousel takes full width of the available space
    <div className="container-fluid p-0 animate-fade-in">
      <div className="row">
        <div className="col-12">
          {/* The Carousel will now scale based on the width of this col-12 */}
          <ExecutiveDashboard />
        </div>
      </div>
      
      {/* Optional: Add some spacing or welcome text below */}
      {/* <div className="mt-4">
        <h4 className="fw-bold text-dark">Welcome back, Administrator</h4>
        <p className="text-muted">Here is the latest overview of the Job Portal.</p>
      </div> */}
    </div>
  );
};

export default DashboardHome;