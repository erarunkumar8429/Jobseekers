import React, { useEffect, useState } from "react";
import "./EditorDashboard.css";

type TabType =
  | "dashboard"
  | "jobs"
  | "drafts"
  | "approved"
  | "settings";

const EditorDashboard: React.FC = () => {
  const [activeTab, setActiveTab] =
    useState<TabType>("dashboard");

  const notifications = [
    "✅ SSC CGL post approved",
    "🆕 New Railway vacancy added",
    "⚠ Duplicate Police post rejected",
    "📢 UPSSSC notification updated",
    "🔥 Editor task pending review",
  ];

  const tasks = [
    { title: "Verify SSC MTS Vacancy", done: true },
    { title: "Review Railway Notification", done: false },
    { title: "Update Police Bharti", done: false },
    { title: "Check duplicate entries", done: true },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % notifications.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  // ================= TAB CONTENT =================
  const renderContent = () => {
    switch (activeTab) {
      // 📝 Job Entries
      case "jobs":
        return (
          <>
            <div className="card">
              <h3>📝 Job Entries</h3>
              <p>Manage newly submitted job notifications.</p>
            </div>

            <div className="card table-card">
              <h4>Recent Job Entries</h4>
              <table>
                <thead>
                  <tr>
                    <th>Job Title</th>
                    <th>Department</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SSC MTS 2026</td>
                    <td>SSC</td>
                    <td><span className="badge">Pending</span></td>
                    <td>
                      <button className="approve">Approve</button>
                      <button className="reject">Reject</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Railway Group D</td>
                    <td>Railway</td>
                    <td><span className="badge">Pending</span></td>
                    <td>
                      <button className="approve">Approve</button>
                      <button className="reject">Reject</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );

      // 📁 Drafts
   case "drafts":
  return (
    <>
      <div className="card">
        <h3>📁 Draft Posts</h3>
        <p>Posts saved but not yet submitted.</p>
      </div>

      <div className="drafts-grid">
        {[
          { title: "SSC Draft Post", dept: "SSC", date: "18 Feb 2026" },
          { title: "UP Police Draft", dept: "UP Police", date: "17 Feb 2026" },
          { title: "Teaching Draft", dept: "Education", date: "16 Feb 2026" },
        ].map((item, i) => (
          <div key={i} className="drafts-card">
            <div className="drafts-top">
              <h4>{item.title}</h4>
              <span className="badge pending">Draft</span>
            </div>

            <p className="muted">{item.dept}</p>
            <p className="muted small">{item.date}</p>

            <div className="draft-actions">
              <button className="edit">Edit</button>
              <button className="approve">Publish</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );


      // ✅ Approved
   case "approved":
  return (
    <>
      <div className="card">
        <h3>✅ Approved Posts</h3>
        <p>Successfully published jobs.</p>
      </div>

      <div className="approved-table card table-card">
        <table>
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Department</th>
              <th>Approved Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SSC CGL 2025</td>
              <td>SSC</td>
              <td>15 Feb 2026</td>
              <td><span className="badge success">Approved</span></td>
            </tr>
            <tr>
              <td>UPSC NDA</td>
              <td>UPSC</td>
              <td>14 Feb 2026</td>
              <td><span className="badge success">Approved</span></td>
            </tr>
            <tr>
              <td>Bank PO</td>
              <td>IBPS</td>
              <td>13 Feb 2026</td>
              <td><span className="badge success">Approved</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );


      // ⚙ Settings
      case "settings":
        return (
          <div className="card">
            <h3>⚙ Editor Settings</h3>

            <div className="settings-grid">
              <div className="setting-box">
                🔔 Notification Preferences
              </div>
              <div className="setting-box">
                🌐 Language Settings
              </div>
              <div className="setting-box">
                🔐 Change Password
              </div>
              <div className="setting-box">
                🎨 Theme Settings
              </div>
            </div>
          </div>
        );

      // 📊 Dashboard (DEFAULT)
      default:
        return (
          <>
            {/* Stats */}
            <div className="ed-stats">
              <div className="stat-card glow1">
                <h3>24</h3>
                <p>Pending Jobs</p>
              </div>
              <div className="stat-card glow2">
                <h3>12</h3>
                <p>Draft Posts</p>
              </div>
              <div className="stat-card glow3">
                <h3>85</h3>
                <p>Approved</p>
              </div>
              <div className="stat-card glow4">
                <h3>5</h3>
                <p>Rejected</p>
              </div>
            </div>

            {/* Middle */}
            <div className="ed-middle">
              {/* Task */}
              <div className="card">
                <div className="card-header">
                  <h4>📋 Task List</h4>
                  <span className="task-count">
                    {tasks.length} Tasks
                  </span>
                </div>

                <div className="task-modern">
                  {tasks.map((task, i) => (
                    <div key={i} className="task-item">
                      <div
                        className={`check ${
                          task.done ? "done" : ""
                        }`}
                      >
                        {task.done ? "✓" : ""}
                      </div>
                      <span>{task.title}</span>
                      <div className="task-bar">
                        <div
                          className={`task-progress ${
                            task.done ? "full" : ""
                          }`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent */}
              <div className="card">
                <div className="card-header">
                  <h4>🕒 Live Recent Updates</h4>
                  <span className="live-badge">LIVE</span>
                </div>

                <div className="recent-list">
                  {notifications.map((item, i) => (
                    <div
                      key={i}
                      className={`recent-item ${
                        i === index ? "active" : ""
                      }`}
                    >
                      <span className="recent-dot"></span>
                      {item}
                      <span className="time">just now</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ✅ TABLE RESTORED */}
            <div className="card table-card">
              <h4>🗂 Pending Job Entries</h4>
              <table>
                <thead>
                  <tr>
                    <th>Job Title</th>
                    <th>Department</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SSC CHSL 2026</td>
                    <td>SSC</td>
                    <td>20 Feb 2026</td>
                    <td><span className="badge">Pending</span></td>
                    <td>
                      <button className="approve">Approve</button>
                      <button className="reject">Reject</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );
    }
  };

  return (
    <div className="ed-layout">
      <div className="live-bar">
        <span className="live-dot"></span>
        <div className="ticker">{notifications[index]}</div>
      </div>

      <aside className="ed-sidebar">
        <h2 className="logo">GovOne</h2>
        <ul>
          <li className={activeTab==="dashboard"?"active":""} onClick={()=>setActiveTab("dashboard")}>📊 Dashboard</li>
          <li className={activeTab==="jobs"?"active":""} onClick={()=>setActiveTab("jobs")}>📝 Job Entries</li>
          <li className={activeTab==="drafts"?"active":""} onClick={()=>setActiveTab("drafts")}>📁 Drafts</li>
          <li className={activeTab==="approved"?"active":""} onClick={()=>setActiveTab("approved")}>✅ Approved</li>
          <li className={activeTab==="settings"?"active":""} onClick={()=>setActiveTab("settings")}>⚙ Settings</li>
        </ul>
      </aside>

      <main className="ed-main">
        <div className="ed-topbar">
          <h1 className="page-title">Editor Dashboard</h1>
          <div className="profile pulse">👩‍💻 Editor</div>
        </div>

        {renderContent()}
      </main>
    </div>
  );
};

export default EditorDashboard;
