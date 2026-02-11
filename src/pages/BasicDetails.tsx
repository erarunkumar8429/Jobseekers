import "./BasicDetails.css";
 
const VehicleForm: React.FC = () => {
 
  return (
     <form className="form-container" > 
      {/* onSubmit={handleSubmit} */}
    <div className="container">
      {/* Left Stepper */}
      <div className="left-card">
      <h5 className="card-title">Important Information</h5>

      <div className="scroll-box">
        <ul className="info-list">
          <li>
            <strong>Vehicle Registration</strong>
            <span>Ensure registration number is correct</span>
          </li>

          <li>
            <strong>Engine Details</strong>
            <span>Engine & chassis must match RC</span>
          </li>

          <li>
            <strong>Manufacturing Year</strong>
            <span>Select accurate month and year</span>
          </li>

          <li>
            <strong>Purchase Amount</strong>
            <span>Enter on-road purchase value</span>
          </li>

          <li>
            <strong>Document Upload</strong>
            <span>Upload clear vehicle image</span>
          </li>
        </ul>
      </div>
    </div>

      {/* Right Form */}
      <div className="form-section">
         
        <div className="card">
            <h2>Basic Details</h2>
          <div className="grid">
            <div>
               <label>Full Name<span> * </span></label>
              <input type="text" placeholder="Full Name" />
            </div>

            <div>
              <label>Mobile Number (OTP Verification) <span>* </span></label>
              <input type="text" placeholder="Mobile Number" />
            </div>

            <div>
                <label> <span> </span>.</label>
                 <input type="button"value="OTP" />
             
            </div>
 
          </div>
            <br></br>
           <div className="grid">
            <div>
               <label>Date Of Birth<span> * </span></label>
              <input type="text" placeholder="Full Name" />
            </div>

            <div>
              <label> Gender <span>* </span></label>
              <input type="text" placeholder="Mobile Number" />
            </div>

            <div>
              <label>Email ID<span>* </span>  </label>
              <input type="text" placeholder="Email ID" />
            </div>
 
            </div>
        <br/>
        <br/>
            <h2>Location</h2>
          <div className="grid">
            <div>
               <label> State <span> * </span></label>
              <input type="text" placeholder="Full Name" />
            </div>

            <div>
              <label>District <span>* </span></label>
              <input type="text" placeholder="Mobile Number" />
            </div>

            <div>
               <label>Area Type <span>* </span></label>
                 <input type="button"value="OTP" />
             
            </div>
 
          </div>
            <br></br>
           <div className="grid">
            <div>
               <label>City/Block<span> * </span></label>
              <input type="text" placeholder="Full Name" />
            </div>

            <div>
              <label> <span> </span>.</label>
              <input type="text" placeholder="Mobile Number" />
            </div>

            <div>
              <label>Email ID<span>* </span>  </label>
              <input type="text" placeholder="Email ID" />
            </div>
 
            </div>
      <br/>
       <br/>
        <br/>
            <h2>Education</h2>
          <div className="grid">
            <div>
               <label> Highest Qualification <span> * </span></label>
              <input type="text" placeholder="Full Name" />
            </div>

            <div>
              <label>Stream Subject <span>* </span></label>
              <input type="text" placeholder="Mobile Number" />
            </div>

            <div>
               <label>Univercity / Board<span>* </span></label>
                 <input type="button"value="OTP" />
             
            </div>
 
          </div>
            <br></br>
           <div className="grid">
            <div>
               <label>Passing Year<span> * </span></label>
              <input type="text" placeholder="Full Name" />
            </div>
 
 
            </div>
      <br/>
      
 <br/>
        <br/>
            <h2>Job Preference </h2>
          <div className="grid">
            <div>
               <label> Central / State / Both<span> * </span></label>
              <input type="text" placeholder="Full Name" />
            </div>

            <div>
              <label>Department Intrested In <span>* </span></label>
              <input type="text" placeholder="Mobile Number" />
            </div>

            <div>
               <label>Exam Type (SSC,Railway , UPSC, Police , Technical etc.)<span>* </span></label>
                 <input type="button"value="OTP" />
             
            </div>
 
          </div>
            <br></br>
           <div className="grid">
            <div>
               <label>Category (Optional)<span>( Gen,OBC,SC,ST,PWD/EWS) </span></label>
              <input type="text" placeholder="Full Name" />
            </div>
 
 <div>
               <label>Language Preference <span>(Hindi/English) </span></label>
              <input type="text" placeholder="Full Name" />
            </div>
            </div>
      <br/>
      

        <div className="actions">
          <button className="next-btn">Save →</button>
        </div>
          </div>
      </div>
    </div>
    </form>
  );
};

export default VehicleForm;
