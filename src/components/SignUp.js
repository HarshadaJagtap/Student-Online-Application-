// SignUpForm.js
import React, { useState } from "react";
import "./SignUp.css"; // Import the CSS file

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword.length > 3 && newPassword.length > 16) {
      setError("Password cannot exceed 16 characters");
    } else {
      setError("");
    }
  };

  const handleConfirmedPasswordChange = (e) => {
    const newPassword = e.target.value;
    setConfirmPassword(newPassword);
    if (newPassword.length > 3 && newPassword.length > 16) {
      setError("Password cannot exceed 16 characters");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add logic to send data to the server
  };

  return (
    <div className="bg">
      <div className="signup-container">
        <h2 className="header-container">Sign Up | Log In</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label class="custom-field two">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                placehxolder="&nbsp;"
              />
              <span class="placeholder">Username</span>
            </label>

            <label class="custom-field two">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="&nbsp;"
                required
              />
              <span class="placeholder">Email</span>
            </label>

            <label class="custom-field two">
              <input
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="&nbsp;"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                required
              />
              <span class="placeholder">Password</span>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </label>

            <label class="custom-field two">
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmedPasswordChange}
                placeholder="&nbsp;"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                required
              />
              <span class="placeholder">Confirm Password</span>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </label>

            <div className="radio-container">
              <p>Role</p>
              <div className="radio1 ml-20">
                <input
                  type="radio"
                  className="left-radio1"
                  name="role"
                  value="Student"
                />
                <label className="right-radio1">Student</label>
              </div>
              <div className="radio2 ml-20">
                <input
                  type="radio"
                  className="left-radio2"
                  name="role"
                  value="College"
                />
                <label className="right-radio2">College</label>
              </div>
            </div>

            <div className="container">
              <input type="checkbox" className="left-component" />
              <h className="right-component">
                I agree with terms and conditions
              </h>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button type="submit">REGISTER</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
