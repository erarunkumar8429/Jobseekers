import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha"; 
import 'bootstrap/dist/css/bootstrap.min.css';

const AuthPage: React.FC = () => {
  const [mobile, setMobile] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(90);

  // Timer Logic
  useEffect(() => {
    let timer: number | undefined;
    if (isOtpSent && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      if (timer) window.clearInterval(timer);
    };
  }, [isOtpSent, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleSendOtp = () => {
    if (!captchaToken) return alert("Please verify the captcha first!");
    if (mobile.length < 10) return alert("Please enter a valid mobile number");
    
    setTimeLeft(90);
    setIsOtpSent(true);
  };

  const handleResendOtp = () => {
    setTimeLeft(90);
    setOtp('');
    // Logic for API call goes here
  };

  const handleVerifyAndLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (timeLeft === 0) return alert("OTP Expired. Please resend.");
    console.log("Verifying OTP:", otp);
  };

  return (
    <div 
      className="container-fluid vh-100 d-flex align-items-center justify-content-center"
       style={{
        backgroundImage: "url('/images/photo_SignUp.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div 
        className="row shadow-lg rounded-4 overflow-hidden bg-white" 
        style={{ maxWidth: '760px', width: '100%', maxHeight: '420px', border: '1px solid #dee2e6' }}
      >
        
        {/* LEFT SIDE: Carousel */}
        <div className="col-md-6 d-none d-md-block p-0 bg-dark">
          <Carousel id="adminCarousel" variant="light" interval={2000} pause={false} indicators={true}>
            {[1, 2, 3].map((num) => (
              <Carousel.Item key={num}>
                <img 
                  className="d-block w-100" 
                  src={`/SiderImage/sider${num}.jpg`} 
                  alt={`Slide ${num}`} 
                  style={{ height: '420px', objectFit: 'cover', opacity: '0.7' }} 
                />
                <Carousel.Caption style={{ fontSize: '0.8rem' }}>
                  <h6 className="fw-bold">Secure Access</h6>
                  <p>Verify your identity via OTP.</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* RIGHT SIDE: Form */}
        <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
          <div className="mb-3">
            <h4 className="fw-bold text-dark mb-1">Admin Login</h4>
            <p className="text-muted small">
              {isOtpSent ? `Verify +91 ${mobile}` : "Enter mobile to receive OTP"}
            </p>
          </div>

          <form onSubmit={handleVerifyAndLogin}>
            {!isOtpSent ? (
              <>
                <div className="mb-2">
                  <label className="form-label fw-bold" style={{ fontSize: '0.75rem' }}>Mobile Number</label>
                  <input
                    type="tel"
                    className="form-control form-control-sm"
                    placeholder="Enter 10 digit number"
                    maxLength={10}
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                    required
                  />
                </div>

                {/* Horizontal reCAPTCHA with scaling */}
                <div className="mb-3 captcha-wrapper" style={{ width: '100%', overflow: 'hidden' }}>
                  <div style={{ transform: 'scale(0.85)', transformOrigin: 'left top' }}>
                    <ReCAPTCHA
                      sitekey="6LdrSGgsAAAAAPEsSSog0ex8PgVFDRethLcH6dEJ"
                      onChange={(token) => setCaptchaToken(token)}
                      size="normal" 
                    />
                  </div>
                </div>
                                                                        
                <button 
                  type="button" 
                  className="btn btn-primary btn-sm w-100 py-2 fw-bold" 
                  onClick={handleSendOtp}
                  disabled={!captchaToken || mobile.length < 10}
                >
                  Send OTP
                </button>
              </>
            ) : (
              <>
                <div className="mb-2">
                  <label className="form-label fw-bold text-center d-block" style={{ fontSize: '0.75rem' }}>Enter 6-Digit OTP</label>
                  <input
                    type="text"
                    className="form-control form-control-lg text-center fw-bold border-2"
                    style={{ letterSpacing: '8px', fontSize: '1.5rem' }}
                    maxLength={6}
                    placeholder="000000"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                    autoFocus
                    required
                  />
                </div>

                <div className="text-center mb-3">
                  {timeLeft > 0 ? (
                    <small className="text-muted">
                      Resend in <span className="text-primary fw-bold">{formatTime(timeLeft)}</span>
                    </small>
                  ) : (
                    <button 
                      type="button" 
                      className="btn btn-link btn-sm p-0 text-decoration-none fw-bold" 
                      onClick={handleResendOtp}
                    >
                      Resend OTP
                    </button>
                  )}
                </div>

                <button 
                  type="submit" 
                  className="btn btn-dark btn-sm w-100 py-2 fw-bold"
                  disabled={otp.length < 6 || timeLeft === 0}
                >
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