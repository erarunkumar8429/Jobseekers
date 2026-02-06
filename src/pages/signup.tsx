import React, { useState } from 'react';
import type { FormEvent } from 'react';
import { Carousel } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUpPage: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1); // 1: Info, 2: OTP
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: ''
  });
  const [otp, setOtp] = useState<string>('');

  const handleSendOtp = (e: FormEvent) => {
    e.preventDefault();
    // Validate fields then move to OTP step
    setStep(2);
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row shadow rounded-4 overflow-hidden bg-white" style={{ maxWidth: '760px', width: '100%', maxHeight: '450px' }}>
        
        {/* LEFT SIDE: Carousel (Keep branding consistent) */}
        <div className="col-md-6 d-none d-md-block p-0 bg-dark">
          <Carousel id="authCarousel" variant="light" interval={2000} pause={false} indicators={true}>
            <Carousel.Item>
              <img className="d-block w-100" src="/SiderImage/sider1.jpg" alt="1" style={{ height: '450px', objectFit: 'cover', opacity: '0.6' }} />
              <Carousel.Caption style={{ fontSize: '0.8rem' }}>
                <h6 className="fw-bold">Join the Admin Portal</h6>
                <p>Create an account to get started.</p>
              </Carousel.Caption>
            </Carousel.Item>
 <Carousel.Item>
              <img className="d-block w-100" src="/SiderImage/sider2.jpg" alt="1" style={{ height: '450px', objectFit: 'cover', opacity: '0.6' }} />
              <Carousel.Caption style={{ fontSize: '0.8rem' }}>
                <h6 className="fw-bold">Join the Admin Portal</h6>
                <p>Create an account to get started.</p>
              </Carousel.Caption>
            </Carousel.Item>
 <Carousel.Item>
              <img className="d-block w-100" src="/SiderImage/sider3.jpg" alt="1" style={{ height: '450px', objectFit: 'cover', opacity: '0.6' }} />
              <Carousel.Caption style={{ fontSize: '0.8rem' }}>
                <h6 className="fw-bold">Join the Admin Portal</h6>
                <p>Create an account to get started.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* RIGHT SIDE: Sign Up Form */}
        <div className="col-md-6 p-4 d-flex flex-column justify-content-center" style={{ overflowY: 'auto' }}>
          <div className="mb-3">
            <h4 className="fw-bold text-dark mb-0">Create Account</h4>
            <p className="text-muted small">Step {step} of 2</p>
          </div>

          <form onSubmit={step === 1 ? handleSendOtp : (e) => e.preventDefault()}>
            {step === 1 ? (
              <>
                {/* Full Name */}
                <div className="mb-2">
                  <label className="form-label fw-bold" style={{ fontSize: '0.7rem' }}>Full Name</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="John Doe"
                    required
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>

                {/* Email */}
                <div className="mb-2">
                  <label className="form-label fw-bold" style={{ fontSize: '0.7rem' }}>Email Address</label>
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    placeholder="john@example.com"
                    required
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                {/* Mobile */}
                <div className="mb-3">
                  <label className="form-label fw-bold" style={{ fontSize: '0.7rem' }}>Mobile Number</label>
                  <input
                    type="tel"
                    className="form-control form-control-sm"
                    placeholder="9876543210"
                    required
                    onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                  />
                </div>

                <button type="submit" className="btn btn-dark btn-sm w-100 py-2">
                  Continue to OTP
                </button>
              </>
            ) : (
              <div className="animate-fade-in">
                <label className="small fw-bold d-block text-center mb-2">Verify Mobile: {formData.mobile}</label>
                <input
                  type="text"
                  className="form-control form-control-lg text-center fw-bold mb-3"
                  style={{ letterSpacing: '8px' }}
                  maxLength={6}
                  placeholder="000000"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  autoFocus
                />
                <button type="button" className="btn btn-primary btn-sm w-100 mb-2">
                  Complete Registration
                </button>
                <button type="button" className="btn btn-link btn-sm w-100 text-muted" onClick={() => setStep(1)}>
                  ← Back to details
                </button>
              </div>
            )}
          </form>

          <div className="mt-3 text-center">
            <p className="small text-muted mb-0">
              Already have an account? <a href="/login" className="text-dark fw-bold text-decoration-none">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;