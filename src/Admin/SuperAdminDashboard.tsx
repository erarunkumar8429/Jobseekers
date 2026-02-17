import React from "react";
import "./SuperAdminDashboard.css";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const Dashboard = () => {
  const monthlyJobs = [
    { month: "Jan", value: 40 },
    { month: "Feb", value: 60 },
    { month: "Mar", value: 50 },
    { month: "Apr", value: 80 },
    { month: "May", value: 70 },
    { month: "Jun", value: 90 },
    { month: "Jul", value: 85 },
    { month: "Aug", value: 78 },
    { month: "Sep", value: 72 },
    { month: "Oct", value: 88 },
    { month: "Nov", value: 95 },
    { month: "Dec", value: 67 },
  ];

  const departments = [
    { name: "SSC", value: 400 },
    { name: "Railway", value: 300 },
    { name: "Police", value: 300 },
    { name: "Bank", value: 200 },
  ];

  const COLORS = ["#6366f1", "#16a34a", "#f97316", "#e11d48"];

  return (
    <div className="dashboard">

      <h2 className="title">Admin Control Dashboard</h2>

      {/* KPI SECTION */}
      <div className="kpi-grid">
        <div className="kpi-card"><h4>Total Users</h4><p>12,540</p></div>
        <div className="kpi-card"><h4>Active Users Today</h4><p>1,230</p></div>
        <div className="kpi-card"><h4>Total Jobs Posted</h4><p>3,210</p></div>
        <div className="kpi-card"><h4>Active Vacancies</h4><p>850</p></div>
        <div className="kpi-card"><h4>Closed Jobs</h4><p>1,120</p></div>
        <div className="kpi-card"><h4>Pending Approvals</h4><p>34</p></div>
      </div>

      {/* MAIN CHART ROW */}
      <div className="main-chart-row">

        {/* Monthly Jobs */}
        <div className="chart-card large">
          <h4>Jobs Posted (Monthly)</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyJobs} barCategoryGap="25%">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="value"
                fill="#6366f1"
                barSize={22}
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Right Side Cards */}
        <div className="side-cards">

          <div className="mini-card">
            <h4>Quick Stats</h4>
            <div className="mini-stat">
              <span>Total Applications</span>
              <strong>8,430</strong>
            </div>
            <div className="mini-stat">
              <span>Link Clicks</span>
              <strong>5,210</strong>
            </div>
            <div className="mini-stat">
              <span>Top Department</span>
              <strong>SSC</strong>
            </div>
          </div>

          <div className="mini-card">
            <h4>Application Click Trend</h4>
            <ResponsiveContainer width="100%" height={160}>
              <LineChart data={monthlyJobs}>
                <XAxis dataKey="month" hide />
                <YAxis hide />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#16a34a"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>

      {/* SECOND ROW CHARTS */}
      <div className="chart-grid">

        <div className="chart-card">
          <h4>Users Growth</h4>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={monthlyJobs}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#16a34a"
                fill="#dcfce7"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h4>Top Departments</h4>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={departments}
                dataKey="value"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={4}
              >
                {departments.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* ADMIN CONTROLS */}
      <div className="control-panel">
        <h3>Admin Controls</h3>
        <div className="control-grid">
          <div className="control-card">Create / Edit / Delete Jobs</div>
          <div className="control-card">User Management</div>
          <div className="control-card">Role Assignment</div>
          <div className="control-card">Content Approval Workflow</div>
          <div className="control-card">Notifications Control</div>
          <div className="control-card">Banner / Slider Management</div>
          <div className="control-card">CMS Pages</div>
          <div className="control-card">FAQ / Helpdesk</div>
          <div className="control-card">Logs & Audit Trail</div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
