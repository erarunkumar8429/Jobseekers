// ======================= PublicDashboard.tsx =======================
import { useState } from "react";
import "./UserRegistration.css";
import {
  Bell,
  Bookmark,
  Calendar,
  Globe,
  User,
  Briefcase
} from "lucide-react";

const PublicDashboard = () => {
  const [language, setLanguage] = useState("EN");

  // ===== data =====
  const savedJobs = [
    { id: 1, title: "Frontend Developer", company: "TechSoft" },
    { id: 2, title: "React Developer", company: "CodeCraft" },
    { id: 3, title: "UI Developer", company: "WebNova" }
  ];

  const appliedJobs = [
    { id: 1, title: "Full Stack Developer", company: "InnovateX", status: "Under Review" },
    { id: 2, title: "Angular Developer", company: "DevSpark", status: "Interview" }
  ];

  const notifications = [
    "🔥 New Govt Job Posted",
    "📢 Admit Card Released",
    "🚀 Fresh Private Jobs Added",
    "🆕 New Exam Calendar Added"
  ];

  return (
    <div className="pd-wrapper">
      {/* ===== top header ===== */}
      <div className="pd-header">
        <h2>User Dashboard</h2>

        <div className="pd-right">
          {/* language switch */}
          <div className="lang-switch">
            <Globe size={16} />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="EN">EN</option>
              <option value="HI">HI</option>
            </select>
          </div>

          {/* bell */}
          <div className="bell">
            <Bell size={18} />
            <span>4</span>
          </div>
        </div>
      </div>

      {/* ===== dashboard cards grid ===== */}
      <div className="pd-grid">
        {/* Profile Summary */}
        <div className="card profile-card">
          <div className="card-head">
            <User size={18} /> Profile Summary
          </div>

          <div className="profile-box">
            <div className="avatar">RD</div>
            <div className="profile-info">
              <h4>Ratna Dixit</h4>
              <p>BTech CSE Student</p>

              <div className="progress-bar">
                <div className="progress" style={{ width: "90%" }} />
              </div>
              <small>Profile Completion: 90%</small>
            </div>
          </div>
        </div>

        {/* Saved Jobs */}
        <div className="card">
          <div className="card-head">
            <Bookmark size={18} /> Saved Jobs
          </div>

          <div className="list">
            {savedJobs.map((job) => (
              <div className="list-row" key={job.id}>
                <div>
                  <strong>{job.title}</strong>
                  <p>{job.company}</p>
                </div>
                <span className="pill blue">Saved</span>
              </div>
            ))}
          </div>
        </div>

        {/* Applied Tracking */}
        <div className="card">
          <div className="card-head">
            <Briefcase size={18} /> Applied Tracking
          </div>

          <div className="list">
            {appliedJobs.map((job) => (
              <div className="list-row" key={job.id}>
                <div>
                  <strong>{job.title}</strong>
                  <p>{job.company}</p>
                </div>
                <span className="pill yellow">{job.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts Subscribed / Notifications */}
        <div className="card">
          <div className="card-head">
            <Bell size={18} /> New Notifications
          </div>

          <div className="ticker">
            <div className="ticker-track">
              {notifications.concat(notifications).map((n, i) => (
                <span key={i}>{n}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Exam Calendar */}
        <div className="card">
          <div className="card-head">
            <Calendar size={18} /> Exam Calendar
          </div>

          <div className="exam-list">
            <div className="exam-item">
              <span>UP Police</span>
              <b>25 Mar 2026</b>
            </div>
            <div className="exam-item">
              <span>SSC CGL</span>
              <b>12 Apr 2026</b>
            </div>
            <div className="exam-item">
              <span>Railway NTPC</span>
              <b>05 May 2026</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicDashboard;

