import React, { useState, useEffect } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUpPage: React.FC = () => {
  const [step, setStep] = useState(1);
 
  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row shadow rounded-4 overflow-hidden bg-white" 
           style={{ maxWidth: '1000px', width: '100%', height: '600px' }}>
        
        {/* LEFT SIDE: CAROUSEL (Fixed branding) */}
        <div className="col-md-4 d-none d-md-block p-0 bg-dark">
          <Carousel id="regCarousel" ride="carousel" interval={3000} controls={false} indicators={true}>
            <Carousel.Item>
              <img className="d-block w-100" src="/SiderImage/sider1.jpg" style={{ height: '600px', objectFit: 'cover', opacity: '0.6' }} alt="1" />
              <Carousel.Caption className="pb-5">
                <h5 className="fw-bold">Step {step}: {step === 1 ? 'Personal' : step === 2 ? 'Location' : step === 3 ? 'Education' : 'Preferences'}</h5>
                <p className="small text-white-50">Please fill all mandatory fields accurately.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* RIGHT SIDE: CARDS & FORM */}
        <div className="col-md-8 p-4 d-flex flex-column bg-white">
          
          {/* TOP 4 CARDS (Step Indicators) */}
          <div className="row g-2 mb-4">
            {[
              { id: 1, label: 'Basic' },
              { id: 2, label: 'Location' },
              { id: 3, label: 'Education' },
              { id: 4, label: 'Pref.' }
            ].map((item) => (
              <div key={item.id} className="col-3">
                <Card 
                  className={`text-center border-0 shadow-sm py-2 ${step === item.id ? 'bg-primary text-white' : 'bg-light'}`}
                  style={{ cursor: 'pointer', transition: '0.3s' }}
                  onClick={() => setStep(item.id)}
                >
                  <Card.Body className="p-0">
                    <div className="small fw-bold">{item.id}</div>
                    <div className="x-small" style={{ fontSize: '0.65rem' }}>{item.label}</div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>

          {/* DYNAMIC FORM AREA */}
          <div className="flex-grow-1 overflow-auto pe-2" style={{ maxHeight: '400px' }}>
            <form onSubmit={(e) => e.preventDefault()}>
              
              {/* STEP 1: BASIC DETAILS */}
              {step === 1 && (
                <div className="row g-2 animate-fade-in">
                  <h6 className="fw-bold mb-3">1. Basic Details</h6>
                  <div className="col-12"><input type="text" className="form-control form-control-sm" placeholder="Full Name" /></div>
                  <div className="col-md-6"><input type="tel" className="form-control form-control-sm" placeholder="Mobile Number" /></div>
                  <div className="col-md-6"><input type="email" className="form-control form-control-sm" placeholder="Email ID" /></div>
                  <div className="col-md-6"><label className="small fw-bold">DOB</label><input type="date" className="form-control form-control-sm" /></div>
                  <div className="col-md-6"><label className="small fw-bold">Gender</label><select className="form-select form-select-sm"><option>Male</option><option>Female</option></select></div>
                </div>
              )}

              {/* STEP 2: LOCATION */}
              {step === 2 && (
                <div className="row g-2 animate-fade-in">
                  <h6 className="fw-bold mb-3">2. Location Information</h6>
                  <div className="col-md-6"><input type="text" className="form-control form-control-sm" placeholder="State" /></div>
                  <div className="col-md-6"><input type="text" className="form-control form-control-sm" placeholder="District" /></div>
                  <div className="col-md-6"><input type="text" className="form-control form-control-sm" placeholder="City / Block" /></div>
                  <div className="col-md-6"><input type="text" className="form-control form-control-sm" placeholder="Pin code" /></div>
                </div>
              )}

              {/* STEP 3: EDUCATION */}
              {step === 3 && (
                <div className="row g-2 animate-fade-in">
                  <h6 className="fw-bold mb-3">3. Educational Background</h6>
                  <div className="col-12"><input type="text" className="form-control form-control-sm" placeholder="Highest Qualification" /></div>
                  <div className="col-md-8"><input type="text" className="form-control form-control-sm" placeholder="Stream / Subject" /></div>
                  <div className="col-md-4"><input type="text" className="form-control form-control-sm" placeholder="Passing Year" /></div>
                  <div className="col-12"><input type="text" className="form-control form-control-sm" placeholder="University / Board" /></div>
                </div>
              )}

              {/* STEP 4: PREFERENCES */}
              {step === 4 && (
                <div className="row g-2 animate-fade-in">
                  <h6 className="fw-bold mb-3">4. Job Preferences</h6>
                  <div className="col-md-6"><select className="form-select form-select-sm"><option>Central / State / Both</option></select></div>
                  <div className="col-md-6"><select className="form-select form-select-sm"><option>Category (GEN/OBC/SC/ST)</option></select></div>
                  <div className="col-12"><input type="text" className="form-control form-control-sm" placeholder="Interested Departments" /></div>
                  <div className="col-12"><textarea className="form-control form-control-sm" placeholder="Exam Types (SSC, UPSC, etc.)" rows={2}></textarea></div>
                  <div className="col-12 mt-2">
                    <label className="small fw-bold me-3">Language:</label>
                    <div className="form-check form-check-inline small"><input className="form-check-input" type="checkbox" id="h" /><label className="form-check-label" htmlFor="h">Hindi</label></div>
                    <div className="form-check form-check-inline small"><input className="form-check-input" type="checkbox" id="e" /><label className="form-check-label" htmlFor="e">English</label></div>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* BOTTOM BUTTONS */}
          <div className="d-flex gap-2 mt-4 pt-3 border-top">
            {step > 1 && <button className="btn btn-outline-secondary btn-sm w-100 fw-bold" onClick={prevStep}>Back</button>}
            {step < 4 ? (
              <button className="btn btn-primary btn-sm w-100 fw-bold shadow-sm" onClick={nextStep}>Save & Continue</button>
            ) : (
              <button className="btn btn-success btn-sm w-100 fw-bold shadow-sm">Submit Profile</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;