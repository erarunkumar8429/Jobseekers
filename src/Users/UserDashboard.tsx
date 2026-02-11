import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';

// Data based on your "Capture.PNG"
const sourceData = [
  { name: 'Social Media', value: 30, color: '#6f42c1' },
  { name: 'Friends', value: 15, color: '#e83e8c' },
  { name: 'Career Page', value: 25, color: '#fd7e14' },
  { name: 'Newsletter', value: 10, color: '#20c997' },
  { name: 'Others', value: 20, color: '#0dcaf0' },
];

const ProfileDashboard = () => {
  return (
    <div className="container-fluid py-4" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="row g-4">
        
        {/* LEFT: APPLICANT SOURCE (Capture.PNG inspired) */}
        <div className="col-lg-4">
          <div className="card h-100 shadow-sm border-0 p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-bold mb-0">Applicant Source Breakdown</h6>
              <i className="bi bi-three-dots-vertical cursor-pointer"></i>
            </div>
            <div style={{ width: '100%', height: 250 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={sourceData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {sourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <button className="btn btn-outline-secondary btn-sm w-100 mt-3">Get full report</button>
          </div>
        </div>

        {/* CENTER: SUCCESS SCORE (userdas.PNG inspired) */}
        <div className="col-lg-4">
          <div className="card h-100 shadow-sm border-0 p-4 text-center">
             <div className="position-relative d-inline-block mx-auto mb-3" style={{ width: '120px' }}>
                {/* Circular Progress Mockup */}
                <div className="rounded-circle border border-5 d-flex align-items-center justify-content-center" 
                     style={{ width: '120px', height: '120px', borderColor: '#6f42c1 !important', borderTopColor: '#e9ecef !important' }}>
                   <h3 className="fw-bold mb-0">75%</h3>
                </div>
             </div>
             <h5 className="fw-bold">Success Score</h5>
             <p className="text-muted small">You're making progress! Update your profile or skills to increase your chances.</p>
             <button className="btn btn-dark w-100 py-2 mt-2" style={{ backgroundColor: '#1a1a1a' }}>
               Get Improvement Tips
             </button>
          </div>
        </div>

        {/* RIGHT: EXPERT ADVICE (userdas.PNG inspired) */}
        <div className="col-lg-4">
          <div className="card h-100 shadow-sm border-0 p-4 text-center">
            <div className="d-flex justify-content-center mb-3">
               <img src="https://i.pravatar.cc/150?u=1" className="rounded-circle border border-white shadow-sm mx-n2" width="50" alt="adv1" />
               <img src="https://i.pravatar.cc/150?u=2" className="rounded-circle border border-white shadow-sm mx-n2" width="50" alt="adv2" />
               <img src="https://i.pravatar.cc/150?u=3" className="rounded-circle border border-white shadow-sm mx-n2" width="50" alt="adv3" />
            </div>
            <h5 className="fw-bold">Expert Advice</h5>
            <p className="text-muted small">Consult with our industry leaders to get a competitive edge in your career path.</p>
            <button className="btn btn-dark w-100 py-2 mt-auto" style={{ backgroundColor: '#1a1a1a' }}>
              Hire Now
            </button>
          </div>
        </div>

        {/* BOTTOM: JOB TABLE (Capture.PNG inspired) */}
        <div className="col-12 mt-4">
          <div className="card shadow-sm border-0 p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h5 className="fw-bold mb-0">Latest Job Upload</h5>
                <small className="text-muted">Keep track of orders and their categories.</small>
              </div>
              <div className="input-group w-25">
                <span className="input-group-text bg-white border-end-0"><i className="fa fa-search text-muted"></i></span>
                <input type="text" className="form-control border-start-0" placeholder="Search" />
              </div>
            </div>
            
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr className="small text-muted text-uppercase">
                    <th><input type="checkbox" className="form-check-input" /></th>
                    <th>Name of Jobs</th>
                    <th>Type</th>
                    <th>Salary</th>
                    <th>Categories</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { title: 'Product Designer', company: 'AXA', type: 'Fulltime', salary: '$11K - $15K', color: 'success' },
                    { title: 'UI/UX Designer', company: 'OVO', type: 'Contract', salary: '$11K - $15K', color: 'warning' },
                    { title: 'Graphic Designer', company: 'Doku Wallet', type: 'Fulltime', salary: '$11K - $15K', color: 'success' },
                  ].map((job, i) => (
                    <tr key={i}>
                      <td><input type="checkbox" className="form-check-input" /></td>
                      <td>
                        <div className="fw-bold">{job.title}</div>
                        <div className="small text-muted">at {job.company}</div>
                      </td>
                      <td><span className={`badge bg-${job.color} bg-opacity-10 text-${job.color}`}>{job.type}</span></td>
                      <td className="fw-bold">{job.salary}</td>
                      <td>
                        <span className="badge bg-light text-primary me-1">Tech Industries</span>
                        <span className="badge bg-light text-primary me-1">Designer</span>
                        <span className="badge bg-light text-primary">Junior</span>
                      </td>
                      <td>
                        <i className="fa fa-trash text-muted me-3 cursor-pointer"></i>
                        <i className="fa fa-edit text-muted cursor-pointer"></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfileDashboard;