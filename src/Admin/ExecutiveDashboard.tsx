import {useState} from 'react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend 
} from 'recharts';

// --- MOCK DATA ---
const sourceData = [
  { name: 'Social Media', value: 30, color: '#6f42c1' },
  { name: 'Friends', value: 25, color: '#ffc107' },
  { name: 'Career Page', value: 20, color: '#fd7e14' },
  { name: 'Newsletter', value: 15, color: '#28a745' },
  { name: 'Others', value: 10, color: '#0d6efd' },
];

const performanceData = [
  { month: 'Jan', rating: 75 }, { month: 'Feb', rating: 95 },
  { month: 'Mar', rating: 55 }, { month: 'Apr', rating: 80 },
  { month: 'May', rating: 50 }, { month: 'Jun', rating: 90 },
  { month: 'Jul', rating: 85 }, { month: 'Aug', rating: 80 },
  { month: 'Sep', rating: 75 }, { month: 'Oct', rating: 88 },
  { month: 'Nov', rating: 95 }, { month: 'Dec', rating: 70 },
];

const jobs = [
  { id: 1, title: 'Product Designer', company: 'AXA', type: 'Fulltime', salary: '$11K - $15K' },
  { id: 2, title: 'UI/UX Designer', company: 'OVO', type: 'Contract', salary: '$11K - $15K' },
  { id: 3, title: 'Graphic Designer', company: 'Doku Wallet', type: 'Fulltime', salary: '$11K - $15K' },
];


const ExecutiveDashboard = () => {

//  For table 

 // 1. State for Data (Initial list)
  const [jobList, setJobList] = useState(jobs); // 'jobs' is your mock array
  
  // 2. State for Modal Management
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [showEditModal, setShowEditModal] = useState(false);

  // --- ACTION HANDLERS ---
  
  // Delete Function
  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this notification?")) {
      setJobList(jobList.filter(job => job.id !== id));
    }
  };

  // Open Edit Modal
  const openEdit = (job: any) => {
    setSelectedJob({ ...job }); // Clone the object
    setShowEditModal(true);
  };

  // Save Changes
  const handleSave = () => {
    setJobList(jobList.map(j => j.id === selectedJob.id ? selectedJob : j));
    setShowEditModal(false);
  };


  return (
    <div className="p-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      
      {/* TOP CHARTS ROW */}
      <div className="row g-4 mb-4">
        {/* Applicant Source Breakdown (Donut Chart) */}
        <div className="col-md-4">
          <div className="card border-0 shadow-sm p-3 h-100">
            <h6 className="fw-bold">Applicant Source Breakdown</h6>
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
                  <Legend verticalAlign="bottom" align="right" layout="vertical" iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <button className="btn btn-outline-secondary btn-sm mt-3">Get full report</button>
          </div>
        </div>

        {/* Website Performance (Bar Chart) */}
        <div className="col-md-8">
          <div className="card border-0 shadow-sm p-3 h-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-bold">Website Performance</h6>
              <button className="btn btn-light btn-sm">View report</button>
            </div>
            <div style={{ width: '100%', height: 250 }}>
              <ResponsiveContainer>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip cursor={{fill: 'transparent'}} />
                  <Bar dataKey="rating" fill="#6f42c1" radius={[4, 4, 0, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
 

 
 
    <div className="p-4">
      {/* ... Charts code from previous step ... */}

      <div className="card border-0 shadow-sm p-4 mt-4">
        <div className="table-responsive">
          <table className="table align-middle">
            <thead className="table-light">
              <tr>
                <th>Name of Jobs</th>
                <th>Type</th>
                <th>Salary</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobList.map((job) => (
                <tr key={job.id}>
                  <td>
                    <div className="fw-bold">{job.title}</div>
                    <small className="text-muted">at {job.company}</small>
                  </td>
                  <td><span className="badge bg-success-subtle text-success">{job.type}</span></td>
                  <td>{job.salary}</td>
                  <td className="text-end">
                    {/* EDIT BUTTON */}
                    <button 
                      className="btn btn-sm btn-outline-primary me-2" 
                      onClick={() => openEdit(job)}
                    >
                      <i className="fa fa-edit"></i> Edit
                    </button>
                    {/* DELETE BUTTON */}
                    <button 
                      className="btn btn-sm btn-outline-danger" 
                      onClick={() => handleDelete(job.id)}
                    >
                      <i className="fa fa-trash"></i> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- EDIT MODAL --- */}
      {showEditModal && (
        <div className="modal show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">Edit Job Notification</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowEditModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label fw-bold">Job Title</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={selectedJob?.title || ''} 
                    onChange={(e) => setSelectedJob({...selectedJob, title: e.target.value})}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Company</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={selectedJob?.company || ''} 
                    onChange={(e) => setSelectedJob({...selectedJob, company: e.target.value})}
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Type</label>
                    <select 
                      className="form-select" 
                      value={selectedJob?.type}
                      onChange={(e) => setSelectedJob({...selectedJob, type: e.target.value})}
                    >
                      <option value="Fulltime">Fulltime</option>
                      <option value="Contract">Contract</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Salary Range</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={selectedJob?.salary || ''} 
                      onChange={(e) => setSelectedJob({...selectedJob, salary: e.target.value})}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer bg-light">
                <button className="btn btn-secondary" onClick={() => setShowEditModal(false)}>Cancel</button>
                <button className="btn btn-primary px-4" onClick={handleSave}>Update Changes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
 
    </div>
  );
};

export default ExecutiveDashboard;