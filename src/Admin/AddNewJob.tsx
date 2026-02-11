import React, { useState } from 'react';

const JobEntryForm: React.FC = () => {
  // 1. Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    title: '',
    category: '',
    salary: '',
    description: '',
    file: null as File | null
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Required";
    if (!formData.lastName.trim()) newErrors.lastName = "Required";
    if (!formData.email.includes('@')) newErrors.email = "Invalid email";
    if (!formData.title) newErrors.title = "Title required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) alert("Success!");
  };

  return (
    /* margin: 0 5% creates the 5% left/right gap on a 100% width base */
    <div className="container-fluid py-4" style={{ backgroundColor: '#f4f7fa', minHeight: '100vh' }}>
      <div> 
        <div className="card shadow-sm border-0 rounded-3">
          <div className="card-header bg-white border-bottom py-3">
            <h4 className="fw-bold mb-0 text-primary px-3">Add New Job Form</h4>
          </div>

          <div className="card-body p-md-5">
            <form onSubmit={handleSubmit} noValidate>
              
              {/* Row 1: Name Fields */}
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-bold">First Name <span className="text-danger">*</span></label>
                  <input 
                    type="text" 
                    className={`form-control py-2 ${errors.firstName ? 'is-invalid' : ''}`}
                    placeholder="Enter first name"
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                  {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold">Last Name <span className="text-danger">*</span></label>
                  <input 
                    type="text" 
                    className={`form-control py-2 ${errors.lastName ? 'is-invalid' : ''}`}
                    placeholder="Enter last name"
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                  {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                </div>
              </div>

              {/* Row 2: Email & Document Title */}
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-bold">Official Email <span className="text-danger">*</span></label>
                  <input 
                    type="email" 
                    className={`form-control py-2 ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="example@gov.in"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold">Title of Document <span className="text-danger">*</span></label>
                  <input 
                    type="text" 
                    className={`form-control py-2 ${errors.title ? 'is-invalid' : ''}`}
                    placeholder="e.g. Annual Report 2026"
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                  />
                  {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                </div>
              </div>

              {/* Row 3: Category & Salary (2 fields per column example) */}
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <label className="form-label fw-bold">Category</label>
                  <select className="form-select py-2">
                    <option>Administration</option>
                    <option>Technical</option>
                    <option>External</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold">Budget/Salary Range</label>
                  <input type="text" className="form-control py-2" placeholder="$11K - $15K" />
                </div>
              </div>

              {/* Description (Full Width) */}
              <div className="mb-4">
                <label className="form-label fw-bold">Detailed Description</label>
                <textarea 
                  className="form-control" 
                  rows={3} 
                  placeholder="Provide context for the document..."
                ></textarea>
              </div>

              {/* Upload Zone (Full Width) */}
              <div className="mb-2">
                <label className="form-label fw-bold">Upload Document <span className="text-danger">*</span></label>
                <div className="upload-zone p-2  text-center border-2 border-dashed rounded-3 bg-light">
                  <i className="fa fa-cloud-upload-alt fs-1 text-primary mb-2"></i>
                  <h6 className="fw-bold">Browse Files</h6>
                  <p className="text-muted small">Max file size: 5MB (PDF, PNG, JPG)</p>
                  <input type="file" className="d-none" id="fileInput" />
                  <label htmlFor="fileInput" className="btn btn-outline-primary px-4">Select File</label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-flex justify-content-end gap-3">
                <button type="button" className="btn btn-light px-5 py-2">Cancel</button>
                <button type="submit" className="btn btn-primary px-5 py-2 fw-bold shadow-sm">Submit Form</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .border-dashed { border-style: dashed !important; }
        .upload-zone { border: 2px dashed #cbd5e0; transition: 0.3s; }
        .upload-zone:hover { background-color: #f1f5f9 !important; border-color: #0d6efd; }
        .form-control:focus, .form-select:focus { 
          border-color: #002651; 
          box-shadow: 0 0 0 0.25rem rgba(0, 38, 81, 0.1); 
        }
      `}</style>
    </div>
  );
};

export default JobEntryForm;