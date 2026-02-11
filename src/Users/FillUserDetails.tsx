import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [unlockedSteps, setUnlockedSteps] = useState<number[]>([1]); // Only Step 1 is open initially
  const [isSaving, setIsSaving] = useState(false);

  // Function to simulate saving to database and unlocking the next part
  const handleSaveAndUnlock = (currentStep: number) => {
    setIsSaving(true);
    
    // Simulate API Call
    setTimeout(() => {
      setIsSaving(false);
      const nextStep = currentStep + 1;
      
      if (!unlockedSteps.includes(nextStep) && nextStep <= 4) {
        setUnlockedSteps([...unlockedSteps, nextStep]);
      }
      
      if (nextStep <= 4) {
        setActiveTab(nextStep);
      } else {
        alert("All sections saved! You can now do the Final Submission.");
      }
    }, 1000);
  };

  return (
    <div className="container py-4 min-vh-100 bg-light text-center p-5">
      
      {/* 1. TOP STEP BUTTONS (Locked/Unlocked State) */}
      <div className="row g-4 mb-4">
        {[
          { id: 1, name: 'Personal', icon: '👤' },
          { id: 2, name: 'Location', icon: '📍' },
          { id: 3, name: 'Education', icon: '🎓' },
          { id: 4, name: 'Job Pref.', icon: '💼' }
        ].map((tab) => {
          const isUnlocked = unlockedSteps.includes(tab.id);
          const isActive = activeTab === tab.id;

          return (
            <div key={tab.id} className="col-3 w-75" >
              <button 
                disabled={!isUnlocked}
                onClick={() => setActiveTab(tab.id)}
                className={`card w-100 border-0 shadow-sm text-center py-3 transition-all ${
                  isActive ? 'bg-primary text-white' : isUnlocked ? 'bg-white text-dark' : 'bg-secondary text-white opacity-50'
                }`}
                style={{ borderRadius: '12px', cursor: isUnlocked ? 'pointer' : 'not-allowed' }}
              >
                <div className="fs-5">{tab.icon}</div>
                <div className="fw-bold d-none d-md-block" style={{fontSize: '0.75rem'}}>
                   {tab.name} {!isUnlocked && '🔒'}
                </div>
              </button>
            </div>
          );
        })}
      </div>

      {/* 2. MAIN CONTENT CARD */}
      <div className="card border-0 shadow-sm rounded-4">
        <div className="card-body p-4">
          <h5 className="fw-bold mb-4">
            Step {activeTab}: {activeTab === 1 ? 'Personal Details' : activeTab === 2 ? 'Location' : activeTab === 3 ? 'Education' : 'Preferences'}
          </h5>

          <form onSubmit={(e) => e.preventDefault()}>
            {/* --- FIELDS ACCORDING TO field.PNG --- */}
            
            {activeTab === 1 && (
              <div className="row g-3">
                <div className="col-12"><input type="text" className="form-control" placeholder="Full Name" /></div>
                <div className="col-md-6"><input type="tel" className="form-control" placeholder="Mobile (OTP)" /></div>
                <div className="col-md-6"><input type="email" className="form-control" placeholder="Email ID" /></div>
                <div className="col-md-6"><label className="small fw-bold">DOB</label><input type="date" className="form-control" /></div>
                <div className="col-md-6"><label className="small fw-bold">Gender</label><select className="form-select"><option>Male</option><option>Female</option></select></div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="row g-3">
                <div className="col-md-6"><input type="text" className="form-control" placeholder="State" /></div>
                <div className="col-md-6"><input type="text" className="form-control" placeholder="District" /></div>
                <div className="col-md-8"><input type="text" className="form-control" placeholder="City / Block" /></div>
                <div className="col-md-4"><input type="text" className="form-control" placeholder="Pincode" /></div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="row g-3">
                <div className="col-12"><input type="text" className="form-control" placeholder="Highest Qualification" /></div>
                <div className="col-md-8"><input type="text" className="form-control" placeholder="Stream / Subject" /></div>
                <div className="col-md-4"><input type="text" className="form-control" placeholder="Passing Year" /></div>
                <div className="col-12"><input type="text" className="form-control" placeholder="University / Board" /></div>
              </div>
            )}

            {activeTab === 4 && (
              <div className="row g-3">
                <div className="col-md-6"><select className="form-select"><option>Central / State / Both</option></select></div>
                <div className="col-md-6"><select className="form-select"><option>Category (GEN/OBC/SC/ST...)</option></select></div>
                <div className="col-12"><textarea className="form-control" placeholder="Exam Types (SSC, UPSC, etc.)" rows={2}></textarea></div>
                <div className="col-12">
                   <div className="form-check form-check-inline"><input className="form-check-input" type="checkbox" id="h" /><label className="form-check-label" htmlFor="h">Hindi</label></div>
                   <div className="form-check form-check-inline"><input className="form-check-input" type="checkbox" id="e" /><label className="form-check-label" htmlFor="e">English</label></div>
                </div>
              </div>
            )}

            {/* ACTION BUTTONS */}
            <div className="mt-5 d-flex justify-content-between">
              <button 
                type="button"
                className="btn btn-secondary px-4" 
                disabled={activeTab === 1}
                onClick={() => setActiveTab(activeTab - 1)}
              >
                Previous
              </button>
              
              <div className="d-flex gap-2">
                <button 
                  type="button" 
                  className="btn btn-primary px-4 fw-bold"
                  disabled={isSaving}
                  onClick={() => handleSaveAndUnlock(activeTab)}
                >
                  {isSaving ? 'Saving...' : 'Save & Unlock Next'}
                </button>
                
                {unlockedSteps.length === 4 && activeTab === 4 && (
                  <button type="submit" className="btn btn-success px-5 fw-bold shadow">
                    Final Submit All Data
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPortal;