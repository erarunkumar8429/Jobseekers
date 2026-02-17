import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminJobForm: React.FC = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    recruitingOrganization: "",
    postName: "",
    totalVacancies: "",
    categoryWiseBreakup: "",
    qualificationRequired: "",
    ageLimit: "",
    salaryPayLevel: "",
    jobLocation: "",
    selectionProcess: "",
    applicationStartDate: "",
    lastDate: "",
    examDate: "",
    applyLink: "",
    sourceDepartmentWebsite: "",
    status: "Draft",
  });

  const [officialNotification, setOfficialNotification] =
    useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type !== "application/pdf") {
        alert("Only PDF file allowed");
        return;
      }
      setOfficialNotification(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const data = new FormData();

      data.append("JobTitle", formData.jobTitle);
      data.append("RecruitingOrganization", formData.recruitingOrganization);
      data.append("PostName", formData.postName);
      data.append("TotalVacancies", formData.totalVacancies);
      data.append("CategoryWiseBreakup", formData.categoryWiseBreakup);
      data.append("QualificationRequired", formData.qualificationRequired);
      data.append("AgeLimit", formData.ageLimit);
      data.append("SalaryPayLevel", formData.salaryPayLevel);
      data.append("JobLocation", formData.jobLocation);
      data.append("SelectionProcess", formData.selectionProcess);
      data.append("ApplicationStartDate", formData.applicationStartDate);
      data.append("LastDate", formData.lastDate);
      data.append("ExamDate", formData.examDate);
      data.append("ApplyLink", formData.applyLink);
      data.append(
        "SourceDepartmentWebsite",
        formData.sourceDepartmentWebsite
      );
      data.append("Status", formData.status);

      if (officialNotification) {
        data.append("OfficialNotification", officialNotification);
      }

      // 🔐 If using JWT
      const token = localStorage.getItem("token");

      await axios.post(
        "https://localhost:7107/api/Admin/SaveJob",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
        }
      );

      setMessage("✅ Job Saved Successfully!");
      setLoading(false);

      // Reset form
      setFormData({
        jobTitle: "",
        recruitingOrganization: "",
        postName: "",
        totalVacancies: "",
        categoryWiseBreakup: "",
        qualificationRequired: "",
        ageLimit: "",
        salaryPayLevel: "",
        jobLocation: "",
        selectionProcess: "",
        applicationStartDate: "",
        lastDate: "",
        examDate: "",
        applyLink: "",
        sourceDepartmentWebsite: "",
        status: "Draft",
      });

      setOfficialNotification(null);

    } catch (err: any) {
      console.error(err);
      setError(
        err.response?.data?.message ||
          "❌ Error saving job. Check CORS / JWT / Backend."
      );
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="card shadow-lg border-0 rounded-4 p-4">
        <h3 className="text-center text-primary fw-bold mb-4">
          Admin Job Entry Form
        </h3>

        {message && (
          <div className="alert alert-success text-center">{message}</div>
        )}

        {error && (
          <div className="alert alert-danger text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="row g-3">

            <div className="col-md-6">
              <label className="form-label">Job Title</label>
              <input type="text" name="jobTitle" className="form-control"
                value={formData.jobTitle}
                onChange={handleChange} required />
            </div>

            <div className="col-md-6">
              <label className="form-label">Recruiting Organization</label>
              <input type="text" name="recruitingOrganization"
                className="form-control"
                value={formData.recruitingOrganization}
                onChange={handleChange} required />
            </div>

            <div className="col-md-6">
              <label className="form-label">Post Name</label>
              <input type="text" name="postName"
                className="form-control"
                value={formData.postName}
                onChange={handleChange} required />
            </div>

            <div className="col-md-6">
              <label className="form-label">Total Vacancies</label>
              <input type="number" name="totalVacancies"
                className="form-control"
                value={formData.totalVacancies}
                onChange={handleChange} required />
            </div>

            <div className="col-md-12">
              <label className="form-label">Category-wise Breakup</label>
              <textarea name="categoryWiseBreakup"
                className="form-control"
                rows={2}
                value={formData.categoryWiseBreakup}
                onChange={handleChange}></textarea>
            </div>

            <div className="col-md-6">
              <label className="form-label">Qualification Required</label>
              <input type="text" name="qualificationRequired"
                className="form-control"
                value={formData.qualificationRequired}
                onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Age Limit</label>
              <input type="text" name="ageLimit"
                className="form-control"
                value={formData.ageLimit}
                onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Salary / Pay Level</label>
              <input type="text" name="salaryPayLevel"
                className="form-control"
                value={formData.salaryPayLevel}
                onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Job Location</label>
              <input type="text" name="jobLocation"
                className="form-control"
                value={formData.jobLocation}
                onChange={handleChange} />
            </div>

            <div className="col-md-12">
              <label className="form-label">Selection Process</label>
              <textarea name="selectionProcess"
                className="form-control"
                rows={2}
                value={formData.selectionProcess}
                onChange={handleChange}></textarea>
            </div>

            <div className="col-md-4">
              <label className="form-label">Application Start Date</label>
              <input type="date" name="applicationStartDate"
                className="form-control"
                value={formData.applicationStartDate}
                onChange={handleChange} required />
            </div>

            <div className="col-md-4">
              <label className="form-label">Last Date</label>
              <input type="date" name="lastDate"
                className="form-control"
                value={formData.lastDate}
                onChange={handleChange} required />
            </div>

            <div className="col-md-4">
              <label className="form-label">Exam Date</label>
              <input type="date" name="examDate"
                className="form-control"
                value={formData.examDate}
                onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Apply Link</label>
              <input type="text" name="applyLink"
                className="form-control"
                value={formData.applyLink}
                onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Source Department Website</label>
              <input type="text" name="sourceDepartmentWebsite"
                className="form-control"
                value={formData.sourceDepartmentWebsite}
                onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Status</label>
              <select name="status"
                className="form-select"
                value={formData.status}
                onChange={handleChange}>
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
                <option value="Closed">Closed</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Official Notification (PDF)</label>
              <input type="file"
                className="form-control"
                accept="application/pdf"
                onChange={handleFileChange} />
            </div>

          </div>

          <div className="text-center mt-4">
            <button type="submit"
              className="btn btn-primary px-5 py-2 rounded-pill"
              disabled={loading}>
              {loading ? "Saving..." : "Save Job"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AdminJobForm;
