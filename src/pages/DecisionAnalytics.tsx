// ======================= DecisionAnalytics.tsx =======================
import "./DecisionAnalytics.css";
import { BarChart3, Map, GraduationCap, TrendingUp, BellRing, Share2 } from "lucide-react";

const DecisionAnalytics = () => {
  const states = [
    { name: "Uttar Pradesh", users: 12450 },
    { name: "Bihar", users: 8420 },
    { name: "Madhya Pradesh", users: 6230 },
    { name: "Rajasthan", users: 5980 }
  ];

  const districts = [
    { name: "Lucknow", reach: "High" },
    { name: "Kanpur", reach: "Medium" },
    { name: "Prayagraj", reach: "Medium" },
    { name: "Varanasi", reach: "Low" }
  ];

  const qualifications = ["12th Pass", "Graduate", "Post Graduate", "Diploma"];
  const popularExams = ["SSC CGL", "UP Police", "Railway NTPC", "UPSSSC PET"];

  return (
    <div className="da-wrapper">
      <h2 className="da-title">Decision Making Analytics</h2>

      <div className="da-grid">
        {/* State-wise Users */}
        <div className="da-card">
          <div className="da-head"><Map size={18}/> State-wise Users</div>
          <div className="da-list">
            {states.map((s, i) => (
              <div className="da-row" key={i}>
                <span>{s.name}</span>
                <b>{s.users.toLocaleString()}</b>
              </div>
            ))}
          </div>
        </div>

        {/* District Reach */}
        <div className="da-card">
          <div className="da-head"><BarChart3 size={18}/> District-wise Reach</div>
          <div className="da-list">
            {districts.map((d, i) => (
              <div className="da-row" key={i}>
                <span>{d.name}</span>
                <span className={`badge ${d.reach.toLowerCase()}`}>{d.reach}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Qualification Trends */}
        <div className="da-card">
          <div className="da-head"><GraduationCap size={18}/> Qualification Trends</div>
          <div className="chip-wrap">
            {qualifications.map((q, i) => (
              <span className="chip" key={i}>{q}</span>
            ))}
          </div>
        </div>

        {/* Popular Exams */}
        <div className="da-card">
          <div className="da-head"><TrendingUp size={18}/> Popular Exams</div>
          <div className="chip-wrap">
            {popularExams.map((e, i) => (
              <span className="chip blue" key={i}>{e}</span>
            ))}
          </div>
        </div>

        {/* Notification CTR */}
        <div className="da-card">
          <div className="da-head"><BellRing size={18}/> Notification CTR</div>
          <div className="ctr-box">
            <div className="ctr-circle">
              <span>18%</span>
            </div>
            <p className="muted">Average click-through rate</p>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="da-card">
          <div className="da-head"><Share2 size={18}/> Traffic Sources</div>
          <div className="traffic">
            <div className="traffic-row">
              <span>Search</span>
              <div className="bar"><div style={{width:"55%"}}/></div>
            </div>
            <div className="traffic-row">
              <span>Social</span>
              <div className="bar"><div style={{width:"30%"}}/></div>
            </div>
            <div className="traffic-row">
              <span>App</span>
              <div className="bar"><div style={{width:"15%"}}/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionAnalytics;
