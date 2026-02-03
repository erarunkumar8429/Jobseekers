import React, { useState } from "react";
import "./BasicDetails.css";

const steps = [
  "Vehicle Information",
  "Owner / Registration Info",
  "User & Insurance Info",
  "Accessories & Service",
  "Upload & Review",
];

const VehicleForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="container">
      {/* Left Stepper */}
      <div className="stepper">
        <h4>Step {currentStep + 1} of {steps.length}</h4>
        <ul>
          {steps.map((step, index) => (
            <li
              key={index}
              className={index === currentStep ? "active" : ""}
            >
              {step}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Form */}
      <div className="form-section">
        <h2>Vehicle Information</h2>
        <p className="subtitle">
          Group fields related to uniquely identifying the vehicle.
        </p>

        <div className="card">
          <div className="grid">
            <div>
              <label>Registration Number *</label>
              <input type="text" placeholder="Enter registration number" />
            </div>

            <div>
              <label>Engine Number *</label>
              <input type="text" placeholder="Enter engine number" />
            </div>

            <div>
              <label>Chassis Number *</label>
              <input type="text" placeholder="Enter chassis number" />
            </div>

            <div className="upload-box">
              <p>Upload Vehicle Picture</p>
              <button>Browse files</button>
            </div>
          </div>
        </div>

        <h3>Vehicle Classification</h3>
        <div className="card">
          <div className="grid">
            <div>
              <label>Class of Vehicle *</label>
              <select>
                <option>Select</option>
              </select>
            </div>

            <div>
              <label>Maker's Name *</label>
              <select>
                <option>Select</option>
              </select>
            </div>

            <div>
              <label>Model *</label>
              <input type="text" />
            </div>

            <div>
              <label>Fuel Type *</label>
              <select>
                <option>Select</option>
              </select>
            </div>

            <div>
              <label>Color of Vehicle *</label>
              <select>
                <option>Select</option>
              </select>
            </div>
          </div>
        </div>

        <h3>Manufacturing Details</h3>
        <div className="card">
          <div className="grid">
            <div>
              <label>Year of Manufacturing *</label>
              <select>
                <option>Select</option>
              </select>
            </div>

            <div>
              <label>Month *</label>
              <select>
                <option>Select</option>
              </select>
            </div>

            <div>
              <label>Model Year *</label>
              <input type="text" />
            </div>
          </div>
        </div>

        <h3>Purchase Information</h3>
        <div className="card">
          <div className="grid">
            <div>
              <label>Purchased Amount (On-road cost) *</label>
              <input type="number" />
            </div>

            <div>
              <label>Mode of Purchase *</label>
              <select>
                <option>Select</option>
              </select>
            </div>
          </div>
        </div>

        <div className="actions">
          <button className="next-btn">Next →</button>
        </div>
      </div>
    </div>
  );
};

export default VehicleForm;
