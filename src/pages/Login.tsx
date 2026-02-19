import React, { useState } from 'react';
import type { FormEvent } from 'react';
import { Carousel } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const AuthPage: React.FC = () => {
  const [mobile, setMobile] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // ✅ SEND OTP
  const handleSendOtp = async () => {
    if (!captchaToken) return alert("Verify captcha");
    if (mobile.length !== 10) return alert("Enter valid mobile");

    try {
      setLoading(true);

      const res = await axios.post(
        "https://localhost:7107/api/login/send-otp",
        { mobile }
      );

      alert(res.data?.message || "OTP Sent Successfully");
      setIsOtpSent(true);
    } catch (error: any) {
      const msg = error.response?.data?.message;

      if (msg) {
        alert(msg);

        // ❌ Not registered → redirect signup
        if (msg.toLowerCase().includes("register")) {
          setTimeout(() => {
            window.location.href = "/signup";
          }, 900);
        }
      } else {
        alert("Error sending OTP");
      }
    } finally {
      setLoading(false);
    }
  };

  // ✅ VERIFY OTP + ROLE BASED REDIRECT
  const handleVerifyAndLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (otp.length !== 6) return alert("Enter valid 6 digit OTP");

    try {
      setLoading(true);

      const response = await axios.post(
        "https://localhost:7107/api/login/verify-otp",
        {
          mobile,
          otp,
        }
      );

      const { token, role } = response.data;

      // ✅ save token + role
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      alert("Login Successful");

      // ✅ ROLE BASED REDIRECT
      if (role === "Admin") {
        window.location.href = "/dashboard/SuperAdminDashboard";
      } else {
        window.location.href = "/UserDashboard";
      }

    } catch (error: any) {
      const msg = error.response?.data;
      alert(msg || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div
        className="row shadow rounded-4 overflow-hidden bg-white"
        style={{ maxWidth: '760px', width: '100%', maxHeight: '420px' }}
      >
        {/* LEFT SIDE */}
        <div className="col-md-6 d-none d-md-block p-0 bg-dark">
          <Carousel
            id="adminCarousel"
            variant="light"
            interval={2000}
            pause={false}
            indicators={true}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/SiderImage/sider3.jpg"
                alt="1"
                style={{ height: '420px', objectFit: 'cover', opacity: '0.7' }}
              />
              <Carousel.Caption style={{ fontSize: '0.8rem' }}>
                <h6 className="fw-bold">Secure Access</h6>
                <p>Verify your identity via OTP.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/SiderImage/sider1.jpg"
                alt="2"
                style={{ height: '420px', objectFit: 'cover', opacity: '0.7' }}
              />
              <Carousel.Caption style={{ fontSize: '0.8rem' }}>
                <h6 className="fw-bold">Secure Access</h6>
                <p>Verify your identity via OTP.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/SiderImage/sider2.jpg"
                alt="3"
                style={{ height: '420px', objectFit: 'cover', opacity: '0.7' }}
              />
              <Carousel.Caption style={{ fontSize: '0.8rem' }}>
                <h6 className="fw-bold">Secure Access</h6>
                <p>Verify your identity via OTP.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
          <div className="mb-3">
            <h4 className="fw-bold text-dark mb-1">Login</h4>
            <p className="text-muted small">
              {isOtpSent
                ? "Enter the 6-digit code sent to phone"
                : "Enter mobile to receive OTP"}
            </p>
          </div>

          <form onSubmit={handleVerifyAndLogin}>
            {!isOtpSent ? (
              <>
                {/* MOBILE */}
                <div className="mb-2">
                  <label className="form-label fw-bold" style={{ fontSize: '0.75rem' }}>
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    className="form-control form-control-sm"
                    placeholder="Enter 10 digit number"
                    value={mobile}
                    onChange={(e) =>
                      setMobile(e.target.value.replace(/\D/g, ''))
                    }
                    required
                  />
                </div>

                {/* CAPTCHA */}
                <div className="mb-3 d-flex justify-content-center">
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={(token) => setCaptchaToken(token)}
                    size="compact"
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-primary btn-sm w-100 py-2"
                  onClick={handleSendOtp}
                  disabled={!captchaToken || loading}
                >
                  {loading ? "Sending..." : "Send OTP"}
                </button>
              </>
            ) : (
              <>
                {/* OTP */}
                <div className="mb-3">
                  <label className="form-label fw-bold text-center w-100" style={{ fontSize: '0.75rem' }}>
                    OTP Code
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg text-center fw-bold"
                    style={{ letterSpacing: '8px' }}
                    maxLength={6}
                    placeholder="000000"
                    value={otp}
                    onChange={(e) =>
                      setOtp(e.target.value.replace(/\D/g, ''))
                    }
                    autoFocus
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-dark btn-sm w-100 py-2"
                  disabled={loading}
                >
                  {loading ? "Verifying..." : "Verify & Login"}
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
