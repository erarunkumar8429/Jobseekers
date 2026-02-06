import { useRef } from "react";

import "bootstrap/dist/css/bootstrap.min.css";


const BootstrapForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const form = formRef.current;
    if (!form) return;

    if (!form.checkValidity()) {
      event.stopPropagation();
    } else {
      // ✅ form valid hai
      console.log("Form Submitted Successfully");
    }

    form.classList.add("was-validated");
  };

  return (
    <form
      ref={formRef}
      className="row g-3 needs-validation"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="col-md-4">
        <label htmlFor="firstName" className="form-label">
          First name
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          defaultValue="Mark"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>

      <div className="col-md-4">
        <label htmlFor="lastName" className="form-label">
          Last name
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          defaultValue="Otto"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>

      <div className="col-md-4">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <div className="input-group has-validation">
          <span className="input-group-text">@</span>
          <input
            type="text"
            className="form-control"
            id="username"
            required
          />
          <div className="invalid-feedback">
            Please choose a username.
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <label htmlFor="city" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control"
          id="city"
          required
        />
        <div className="invalid-feedback">
          Please provide a valid city.
        </div>
      </div>

      <div className="col-md-3">
        <label htmlFor="state" className="form-label">
          State
        </label>
        <select className="form-select" id="state" required>
          <option value="">Choose...</option>
          <option>UP</option>
          <option>Delhi</option>
        </select>
        <div className="invalid-feedback">
          Please select a valid state.
        </div>
      </div>

      <div className="col-md-3">
        <label htmlFor="zip" className="form-label">
          Zip
        </label>
        <input
          type="text"
          className="form-control"
          id="zip"
          required
        />
        <div className="invalid-feedback">
          Please provide a valid zip.
        </div>
      </div>

      <div className="col-12">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="terms"
            required
          />
          <label className="form-check-label" htmlFor="terms">
            Agree to terms and conditions
          </label>
          <div className="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
      </div>

      <div className="col-12">
        <button className="btn btn-primary" type="submit">
          Submit form
        </button>
      </div>
    </form>
  );
};

export default BootstrapForm;
