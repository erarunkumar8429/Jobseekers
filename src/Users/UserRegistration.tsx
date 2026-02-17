import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserRegistration.css";
import bgImage from "../Images/bg_image.jpg"; // src/Images ke andar image

const api = axios.create({
  baseURL: "https://localhost:7107/api/",
});

const UserRegistration: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [completed, setCompleted] = useState<number[]>([]);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);

  const [masters, setMasters] = useState({
    states: [] as any[],
    districts: [] as any[],
    qualifications: [] as any[],
    universities: [] as any[],
    categories: [] as any[],
  });

  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    otp: "",
    email: "",
    dob: "",
    stateId: "",
    districtId: "",
    city: "",
    pincode: "",
    qualificationId: "",
    stream: "",
    passingYear: "",
    universityId: "",
    govtType: "",
    categoryId: "",
    languages: [] as string[],
  });

  const [errors, setErrors] = useState<any>({});

  const tabs = [
    "Personal",
    "Location",
    "Education",
    "Job Preferences",
    "Category",
    "Language",
  ];

  // ---------------- LOAD MASTER DATA ----------------
  useEffect(() => {
    loadMasters();
  }, []);

  const loadMasters = async () => {
    try {
      const [states, qualifications, universities, categories] = await Promise.all([
        api.get("Master/states"),
        api.get("Master/qualifications"),
        api.get("Master/universities"),
        api.get("Master/categories"),
      ]);
      setMasters({
        states: states?.data || [],
        qualifications: qualifications?.data || [],
        universities: universities?.data || [],
        categories: categories?.data || [],
        districts: [],
      });
    } catch (err) {
      console.log("Master Load Error:", err);
    }
  };

  const loadDistricts = async (stateCode: string) => {
    try {
      const res = await api.get(`Master/districts/${stateCode}`);
      setMasters(prev => ({ ...prev, districts: res?.data || [] }));
    } catch (err) {
      console.log("District Load Error:", err);
    }
  };

  // ---------------- OTP TIMER ----------------
  useEffect(() => {
    if (otpTimer <= 0) return;
    const interval = setInterval(() => setOtpTimer(prev => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [otpTimer]);

  // ---------------- HANDLERS ----------------
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "mobile") setOtpVerified(false);
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleLanguage = (lang: string) => {
    setForm(prev => ({
      ...prev,
      languages: prev.languages.includes(lang)
        ? prev.languages.filter(l => l !== lang)
        : [...prev.languages, lang],
    }));
  };

  // ---------------- VALIDATION ----------------
  const validate = () => {
    let e: any = {};
    if (activeTab === 1) {
      if (!form.fullName) e.fullName = "Required";
      if (!form.mobile) e.mobile = "Required";
      if (!otpVerified) e.otp = "Verify OTP first";
    }
    if (activeTab === 2) { if (!form.stateId) e.stateId = "Required"; if (!form.districtId) e.districtId = "Required"; }
    if (activeTab === 3) { if (!form.qualificationId) e.qualificationId = "Required"; if (!form.universityId) e.universityId = "Required"; }
    if (activeTab === 4) { if (!form.govtType) e.govtType = "Required"; }
    if (activeTab === 5) { if (!form.categoryId) e.categoryId = "Required"; }
    if (activeTab === 6) { if (form.languages.length === 0) e.languages = "Select at least one language"; }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // ---------------- OTP ----------------
  const sendOtp = async () => {
    if (!form.mobile) return alert("Enter mobile first");
    try { 
      await api.post("UserAuthentication/send-otp", { mobile: form.mobile }); 
      setOtpTimer(60); 
      setOtpVerified(false); 
    } 
    catch { alert("OTP send failed"); }
  };

  const verifyOtp = async () => {
    try {
      const res = await api.post("UserAuthentication/verify-otp", { mobile: form.mobile, otp: form.otp });
      if (res?.data?.success) setOtpVerified(true);
      else alert("Invalid OTP");
    } catch { alert("OTP verification failed"); }
  };

  // ---------------- STEP CONTROL ----------------
  const next = () => {
    if (!validate()) return;
    setCompleted(prev => prev.includes(activeTab) ? prev : [...prev, activeTab]);
    setActiveTab(prev => prev + 1);
  };
  const prev = () => setActiveTab(prev => prev - 1);

  // ---------------- FINAL SUBMIT ----------------
  const submit = async () => {
    if (!validate()) return;

    try {
      const payload = {
        ...form,
        dob: form.dob ? new Date(form.dob) : null,
        qualificationId: form.qualificationId ? Number(form.qualificationId) : null,
        universityId: form.universityId ? Number(form.universityId) : null,
        categoryId: form.categoryId ? Number(form.categoryId) : null,
        languages: form.languages.length ? form.languages : null,
      };

      await api.post("User/final-submit", payload, {
        headers: { "Content-Type": "application/json" }
      });

      alert("Form Submitted Successfully");
      setForm({
        fullName:"", mobile:"", otp:"", email:"", dob:"",
        stateId:"", districtId:"", city:"", pincode:"",
        qualificationId:"", stream:"", passingYear:"", universityId:"",
        govtType:"", categoryId:"", languages:[]
      });
      setActiveTab(1);
      setCompleted([]);
      setOtpVerified(false);

    } catch(err:any) {
      console.log(err.response?.data || err);
      alert("Submit failed: " + (err.response?.data || err.message));
    }
  };

  // ---------------- UI ----------------
  return (
    <div className="portal-bg" style={{
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "40px 20px",
      position: "relative",
      filter: "blur(0px)" // you can add blur here or in overlay
    }}>
      {/* Overlay for opacity blur effect */}
      <div style={{
        position:"absolute", top:0, left:0, width:"100%", height:"100%",
        backgroundColor:"rgba(0,0,0,0.3)",
        backdropFilter:"blur(3px)",
        zIndex:0
      }}></div>

      <div className="portal-container" style={{ position:"relative", zIndex:1 }}>

        <div className="steps-wrapper">
          {tabs.map((t,i) => {
            const step = i+1;
            return (
              <div 
                key={step} 
                className={`step-card ${activeTab===step ? "active":""} ${completed.includes(step) ? "done":""}`}
                style={{ backgroundColor: completed.includes(step) ? "#28a745" : undefined }}
              >
                {t}
              </div>
            )
          })}
        </div>

        <div className="form-card">

          {activeTab===1 && <>
            <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name"/>
            <span className="error">{errors.fullName}</span>
            <div className="otp-row">
              <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile"/>
              <button type="button" disabled={otpTimer>0} onClick={sendOtp}>{otpTimer>0 ? `Resend ${otpTimer}s`:"Send OTP"}</button>
            </div>
            <span className="error">{errors.mobile}</span>
            <div className="otp-row">
              <input name="otp" value={form.otp} onChange={handleChange} placeholder="Enter OTP"/>
              <button type="button" onClick={verifyOtp}>Verify</button>
            </div>
            <span className="error">{errors.otp}</span>
            {otpVerified && <span style={{color:"green"}}>OTP Verified ✓</span>}
          </>}

          {activeTab===2 && <>
            <select name="stateId" value={form.stateId} onChange={e=>{ const value=e.target.value; setForm(prev=>({...prev,stateId:value,districtId:""})); if(value) loadDistricts(value); }}>
              <option value="">Select State</option>
              {masters.states.map((s:any)=>(<option key={s.stateCode} value={s.stateCode}>{s.stateName}</option>))}
            </select>
            <select name="districtId" value={form.districtId} onChange={handleChange}>
              <option value="">Select District</option>
              {masters.districts.map((d:any)=>(<option key={d.districtCode} value={d.districtCode}>{d.districtName}</option>))}
            </select>
            <input name="city" value={form.city} onChange={handleChange} placeholder="City"/>
            <input name="pincode" value={form.pincode} onChange={handleChange} placeholder="Pincode"/>
          </>}

          {activeTab===3 && <>
            <select name="qualificationId" value={form.qualificationId} onChange={handleChange}>
              <option value="">Qualification</option>
              {masters.qualifications.map((q:any)=>(<option key={q.id} value={q.id}>{q.qualificationName}</option>))}
            </select>
            <input name="stream" value={form.stream} onChange={handleChange} placeholder="Stream"/>
            <input name="passingYear" value={form.passingYear} onChange={handleChange} placeholder="Passing Year"/>
            <select name="universityId" value={form.universityId} onChange={handleChange}>
              <option value="">University</option>
              {masters.universities.map((u:any)=>(<option key={u.id} value={u.id}>{u.universityName}</option>))}
            </select>
          </>}

          {activeTab===4 && <>
            <select name="govtType" value={form.govtType} onChange={handleChange}>
              <option value="">Central / State / Both</option>
              <option>Central</option>
              <option>State</option>
              <option>Both</option>
            </select>
          </>}

          {activeTab===5 && <>
            <select name="categoryId" value={form.categoryId} onChange={handleChange}>
              <option value="">Select Category</option>
              {masters.categories.map((c:any)=>(<option key={c.id} value={c.id}>{c.categoryName}</option>))}
            </select>
          </>}

          {activeTab===6 && <>
            <div className="checkbox-group">
              {["Hindi","English"].map(lang=>(<label key={lang}><input type="checkbox" checked={form.languages.includes(lang)} onChange={()=>handleLanguage(lang)}/> {lang}</label>))}
            </div>
          </>}

          <div className="button-row">
            {activeTab>1 && <button onClick={prev}>Previous</button>}
            {activeTab<6 ? <button onClick={next}>Save & Next</button> : <button onClick={submit}>Final Submit</button>}
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
