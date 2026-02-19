import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import type { FormEvent } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const SignUpPage: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: ''
  });
  const [otp, setOtp] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState<number>(90);
  const [loading, setLoading] = useState(false);

  // ================= TIMER =================
  useEffect(() => {
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

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // ================= SEND OTP =================
  const handleSendOtp = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(
        "https://localhost:7107/api/Auth/send-otp",
        {
          mobile: formData.mobile
        }
      );

      setTimeLeft(90);
      setStep(2);
      alert("OTP sent successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // ================= RESEND OTP =================
  const handleResendOtp = async () => {
    try {
      await axios.post(
        "https://localhost:7107/api/Auth/send-otp",
        {
          mobile: formData.mobile
        }
      );

      setTimeLeft(90);
      setOtp('');
      alert("OTP resent");
    } catch {
      alert("Failed to resend OTP");
    }
  };

  // ================= VERIFY + REGISTER =================
  const handleVerifyOtp = async () => {
    try {
      setLoading(true);

      await axios.post(
        "https://localhost:7107/api/Auth/verify-register",
        {
          fullName: formData.fullName,
          email: formData.email,
          mobile: formData.mobile,
          otp: otp
        }
      );

      alert("🎉 Registration successful");

      // optional reset
      setStep(1);
      setOtp('');
      setFormData({ fullName: '', email: '', mobile: '' });

    } catch (err: any) {
      console.error(err);
      alert(err?.response?.data || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // ================= UI =================
  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row shadow rounded-4 overflow-hidden bg-white" style={{ maxWidth: '760px', width: '100%', maxHeight: '450px' }}>
        
        {/* LEFT SIDE */}
        <div className="col-md-6 d-none d-md-block p-0 bg-dark">
          <Carousel interval={2000} pause={false}>
            <Carousel.Item>
              <img className="d-block w-100" src="/SiderImage/sider1.jpg" alt="1" style={{ height: '450px', objectFit: 'cover', opacity: '0.6' }} />
              <Carousel.Caption style={{ fontSize: '0.8rem' }}>
                <h6 className="fw-bold">Join the Admin Portal</h6>
                <p>Create an account to get started.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
          <div className="mb-3">
            <h4 className="fw-bold text-dark mb-0">Create Account</h4>
            <p className="text-muted small">Step {step} of 2</p>
          </div>

          <form onSubmit={step === 1 ? handleSendOtp : (e) => e.preventDefault()}>
            {step === 1 ? (
              <>
                <div className="mb-2">
                  <label className="form-label fw-bold" style={{ fontSize: '0.7rem' }}>Full Name</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div className="mb-2">
                  <label className="form-label fw-bold" style={{ fontSize: '0.7rem' }}>Email Address</label>
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold" style={{ fontSize: '0.7rem' }}>Mobile Number</label>
                  <input
                    type="tel"
                    className="form-control form-control-sm"
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-dark btn-sm w-100 py-2" disabled={loading}>
                  {loading ? "Sending..." : "Continue to OTP"}
                </button>
              </>
            ) : (
              <div className="text-center">
                <label className="small fw-bold d-block mb-2">
                  Verify Mobile: {formData.mobile}
                </label>

                <input
                  type="text"
                  className="form-control form-control-lg text-center fw-bold mb-1"
                  style={{ letterSpacing: '8px' }}
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                />

                <div className="mb-3">
                  {timeLeft > 0 ? (
                    <span className="small text-muted">
                      OTP expires in:
                      <span className="text-danger fw-bold"> {formatTime(timeLeft)}</span>
                    </span>
                  ) : (
                    <button type="button" className="btn btn-link btn-sm p-0" onClick={handleResendOtp}>
                      Resend OTP
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleVerifyOtp}
                  className="btn btn-primary btn-sm w-100 mb-2"
                  disabled={timeLeft === 0 || otp.length < 6 || loading}
                >
                  {loading ? "Verifying..." : "Complete Registration"}
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
              <Link to="/login" className="text-dark fw-bold text-decoration-none"> Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
