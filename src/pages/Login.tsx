import React, { useState } from 'react';
import type { FormEvent } from 'react'; 
import { Carousel } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha"; // Ensure you've run: npm i react-google-recaptcha and npm i --save-dev @types/react-google-recaptcha
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const AuthPage: React.FC = () => {
  const [mobile, setMobile] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

const handleSendOtp = async () => {
  if (!captchaToken) return alert("Verify captcha");
  if (mobile.length !== 10) return alert("Enter valid mobile");

  try {
    await axios.post(
      "https://localhost:7107/api/login/send-otp",
      { mobile }
    );

    setIsOtpSent(true);
  } catch (error) {
    alert("Error sending OTP");
  }
};



 const handleVerifyAndLogin = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (otp.length !== 6) return alert("Enter valid 6 digit OTP");

  try {
    const response = await axios.post(
      "https://localhost:7107/api/login/verify-otp",
      {
        mobile,
        otp,
      }
    );

    // ✅ JWT Save
    localStorage.setItem("token", response.data.token);

    alert("Login Successful");

    // ✅ Redirect
    window.location.href = "/dashboard";

  } catch (error) {
    alert("Invalid OTP");
  }
};


  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row shadow rounded-4 overflow-hidden bg-white" style={{ maxWidth: '760px', width: '100%', maxHeight: '420px' }}>
        
        {/* LEFT SIDE: Carousel */}
        <div className="col-md-6 d-none d-md-block p-0 bg-dark">
          <Carousel id="adminCarousel" variant="light" interval={2000} pause={false} indicators={true}>
            <Carousel.Item>
              <img className="d-block w-100" src="/SiderImage/sider3.jpg" alt="1" style={{ height: '420px', objectFit: 'cover', opacity: '0.7' }} />
              <Carousel.Caption style={{ fontSize: '0.8rem' }}>
                <h6 className="fw-bold">Secure Access</h6>
                <p>Verify your identity via OTP.</p>
              </Carousel.Caption>
            </Carousel.Item>
             <Carousel.Item>
              <img className="d-block w-100" src="/SiderImage/sider1.jpg" alt="1" style={{ height: '420px', objectFit: 'cover', opacity: '0.7' }} />
              <Carousel.Caption style={{ fontSize: '0.8rem' }}>
                <h6 className="fw-bold">Secure Access</h6>
                <p>Verify your identity via OTP.</p>
              </Carousel.Caption>
            </Carousel.Item>
             <Carousel.Item>
              <img className="d-block w-100" src="/SiderImage/sider2.jpg" alt="1" style={{ height: '420px', objectFit: 'cover', opacity: '0.7' }} />
              <Carousel.Caption style={{ fontSize: '0.8rem' }}>
                <h6 className="fw-bold">Secure Access</h6>
                <p>Verify your identity via OTP.</p>
              </Carousel.Caption>
            </Carousel.Item>
            {/* Add more items if needed */}
          </Carousel>
        </div>

        {/* RIGHT SIDE: OTP Form */}
        <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
          <div className="mb-3">
            <h4 className="fw-bold text-dark mb-1">Admin Login</h4>
            <p className="text-muted small">
              {isOtpSent ? "Enter the 6-digit code sent to phone" : "Enter mobile to receive OTP"}
            </p>
          </div>

          <form onSubmit={handleVerifyAndLogin}>
            {!isOtpSent ? (
              <>
                {/* Mobile Input Step */}
                <div className="mb-2">
                  <label className="form-label fw-bold" style={{ fontSize: '0.75rem' }}>Mobile Number</label>
                  <input
                    type="tel"
                    className="form-control form-control-sm"
                    placeholder="Enter 10 digit number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                    required
                  />
                </div>

                <div className="mb-3 d-flex justify-content-center">
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Testing key
                    onChange={(token) => setCaptchaToken(token)}
                    size="compact"
                  />
                </div>

                <button 
                  type="button" 
                  className="btn btn-primary btn-sm w-100 py-2" 
                  onClick={handleSendOtp}
                  disabled={!captchaToken}
                >
                  Send OTP
                </button>
              </>
            ) : (
              <>
                {/* OTP Entry Step */}
                <div className="mb-3">
                  <label className="form-label fw-bold text-center w-100" style={{ fontSize: '0.75rem' }}>OTP Code</label>
                  <input
                    type="text"
                    className="form-control form-control-lg text-center fw-bold"
                    style={{ letterSpacing: '8px' }}
                    maxLength={6}
                    placeholder="000000"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                    autoFocus
                    required
                  />
                </div>

                <button type="submit" className="btn btn-dark btn-sm w-100 py-2">
                  Verify & Login
                </button>
                
                <button 
                  type="button" 
                  className="btn btn-link btn-sm w-100 mt-2 text-decoration-none text-muted"
                  onClick={() => setIsOtpSent(false)}
                >
                  Change Number
                </button>
              </>
            )}
          </form>
        </div>

      </div>
    </div>
  );
};

export default AuthPage;