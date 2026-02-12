import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
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

  // TIMER STATE: 90 seconds = 1.5 minutes
  const [timeLeft, setTimeLeft] = useState<number>(90);

  // TIMER LOGIC: Starts when step becomes 2
 // TIMER LOGIC: Starts when step becomes 2
  useEffect(() => {
    // Use 'number' type for the browser environment
    let timer: number | undefined;

    if (step === 2 && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      if (timer) window.clearInterval(timer);
    };
  }, [step, timeLeft]);

  // FORMATTER: Converts seconds to 0:00 format
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleSendOtp = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, trigger your API call here
    setTimeLeft(90); // Reset timer to 1.5 minutes
    setStep(2);
  };

  const handleResendOtp = () => {
    // Trigger resend API call here
    setTimeLeft(90);
    setOtp('');
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row shadow rounded-4 overflow-hidden bg-white" style={{ maxWidth: '760px', width: '100%', maxHeight: '450px' }}>
        
        {/* LEFT SIDE: Carousel */}
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
              <img className="d-block w-100" src="/SiderImage/sider2.jpg" alt="2" style={{ height: '450px', objectFit: 'cover', opacity: '0.6' }} />
              <Carousel.Caption style={{ fontSize: '0.8rem' }}>
                <h6 className="fw-bold">Seamless Management</h6>
                <p>Everything you need in one place.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="/SiderImage/sider3.jpg" alt="3" style={{ height: '450px', objectFit: 'cover', opacity: '0.6' }} />
              <Carousel.Caption style={{ fontSize: '0.8rem' }}>
                <h6 className="fw-bold">Secure Access</h6>
                <p>Your data is protected with us.</p>
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
                    value={formData.fullName}
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
                    value={formData.email}
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
                    value={formData.mobile}
                    onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                  />
                </div>

                <button type="submit" className="btn btn-dark btn-sm w-100 py-2">
                  Continue to OTP
                </button>
              </>
            ) : (
              <div className="animate-fade-in text-center">
                <label className="small fw-bold d-block mb-2">Verify Mobile: {formData.mobile}</label>
                <input
                  type="text"
                  className="form-control form-control-lg text-center fw-bold mb-1"
                  style={{ letterSpacing: '8px' }}
                  maxLength={6}
                  placeholder="000000"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  autoFocus
                />

                {/* Timer Display */}
                <div className="mb-3">
                  {timeLeft > 0 ? (
                    <span className="small text-muted">
                      OTP expires in: <span className="text-danger fw-bold">{formatTime(timeLeft)}</span>
                    </span>
                  ) : (
                    <button 
                      type="button" 
                      className="btn btn-link btn-sm text-decoration-none p-0" 
                      onClick={handleResendOtp}
                    >
                      Resend OTP
                    </button>
                  )}
                </div>

                <button 
                  type="button" 
                  className="btn btn-primary btn-sm w-100 mb-2" 
                  disabled={timeLeft === 0 || otp.length < 6}
                >
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
              Already have an account? 
               <Link to="/login" className="text-dark fw-bold text-decoration-none">Login</Link>
             
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;