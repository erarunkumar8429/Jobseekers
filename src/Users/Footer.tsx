import "./Common.css";
 

const StylishAdminFooter  = ({  }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="py-3 px-4 mt-auto"
      style={{ 
        background: 'rgba(255, 255, 255, 0.8)', 
        backdropFilter: 'blur(10px)', 
        borderTop: '1px solid rgba(0,0,0,0.06)',
       // marginLeft: sidebarCollapsed ? '80px' : '260px',
        width:'100%',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        fontSize: '0.85rem'
      }}
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          
          {/* Copyright Section */}
          <div className="col-md-6 text-center text-md-start">
            <span className="text-muted">
              © {currentYear} <span className="fw-bold text-primary">ADMINHUB</span>. 
              Built for <span className="text-dark">Government Services</span>
            </span>
          </div>

          {/* Status & Links Section */}
          <div className="col-md-6 d-none d-md-flex justify-content-end align-items-center gap-4">
            {/* Server Status Indicator */}
            <div className="d-flex align-items-center">
              <span className="position-relative d-flex h-2 w-2 me-2">
                <span className="animate-ping position-absolute inline-flex h-100 w-100 rounded-circle bg-success opacity-75" style={{width: '8px', height: '8px', animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite'}}></span>
                <span className="relative inline-flex rounded-circle h-2 w-2 bg-success" style={{width: '8px', height: '8px'}}></span>
              </span>
              <span className="text-muted small">Server: Online</span>
            </div>

            <ul className="list-inline mb-0">
              <li className="list-inline-item mx-2">
                <a href="#" className="text-decoration-none text-muted hover-primary">Support</a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="#" className="text-decoration-none text-muted hover-primary">Privacy Policy</a>
              </li>
              <li className="list-inline-item mx-2">
                <span className="badge bg-light text-dark border">v1.2.0</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <style>{`
        .hover-primary:hover {
          color: #0d6efd !important;
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </footer>
  );
};

export default StylishAdminFooter;