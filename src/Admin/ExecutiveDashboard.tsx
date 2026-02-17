import React from "react";
import "./SuperAdminDashboard.css";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const sourceData = [
  { name: "Career Page", value: 400 },
  { name: "Friends", value: 300 },
  { name: "Newsletter", value: 200 },
  { name: "Others", value: 100 },
  { name: "Social Media", value: 500 },
];

const barData = [
  { month: "Jan", value: 75 },
  { month: "Feb", value: 98 },
  { month: "Mar", value: 55 },
  { month: "Apr", value: 80 },
  { month: "May", value: 50 },
  { month: "Jun", value: 90 },
  { month: "Jul", value: 85 },
  { month: "Aug", value: 80 },
  { month: "Sep", value: 75 },
  { month: "Oct", value: 88 },
  { month: "Nov", value: 95 },
  { month: "Dec", value: 70 },
];

const COLORS = ["#f97316", "#facc15", "#22c55e", "#3b82f6", "#7c3aed"];

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">

      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h2>Dashboard <span className="pro-badge">PRO PLAN</span></h2>
        </div>
        <div className="admin-profile">
          <div className="notification">3</div>
          <div className="profile-circle">AD</div>
          <div>
            <strong>Admin Portal</strong>
            <p>Super User</p>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="chart-row">

        <div className="card">
          <h3>Applicant Source Breakdown</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={sourceData}
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {sourceData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <button className="report-btn">Get full report</button>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Website Performance</h3>
            <button className="view-btn">View report</button>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#6d28d9" radius={[6,6,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* Table */}
      <div className="card table-card">
        <table>
          <thead>
            <tr>
              <th>Name of Jobs</th>
              <th>Type</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Product Designer</strong>
                <p>at AXA</p>
              </td>
              <td><span className="badge full">Fulltime</span></td>
              <td>$11K - $15K</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>
                <strong>UI/UX Designer</strong>
                <p>at OVO</p>
              </td>
              <td><span className="badge contract">Contract</span></td>
              <td>$11K - $15K</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Dashboard;
