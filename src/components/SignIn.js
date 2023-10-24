// SignIn.js

import React, { useState } from "react";
import "./SignIn.css"; // Import your CSS file for styling

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [logIn, setLogIn] = useState("signUp");

  const [isChecked, setChecked] = React.useState(false);

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

  function handleChange(event) {
    setChecked(event.target.checked);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here using formData
    console.log("Form submitted:", formData);
    // You can perform authentication, API calls, etc. here
  };

  return (
    <div className="bg">
      <div className="signin-container">
        <h2 className="header-container">
          <div onClick={() => setLogIn("signUp")} className="sign-div">
            Sign Up
          </div>
          <div className="pipe-div">|</div>
          <div onClick={() => setLogIn("login")}>Log In</div>
        </h2>
        <div className="form-container">
          {logIn == "login" ? (
            <form onSubmit={handleSubmit}>
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
              <br />

              <label class="custom-field two">
                <input
                  type="password"
                  name="confirmPassword"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="&nbsp;"
                  minLength={3}
                  maxLength={16}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  required
                />
                <span class="placeholder">Password</span>
                {error && <p style={{ color: "red" }}>{error}</p>}
              </label>
              <br />
              <div className="container">
                <input type="checkbox" className="left-component" size={20} />
                <p className="right-component">
                  Keep the signed in with this device
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button type="submit">LOG IN</button>
              </div>
            </form>
          ) : (
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
                  minLength={3}
                  maxLength={16}
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
                  minLength={3}
                  maxLength={16}
                  required
                />
                <span class="placeholder">Confirm Password</span>

                {error && <p style={{ color: "red" }}>{error}</p>}
              </label>

              <div className="radio-container">
                <p>Role</p>
                <div className="radio1 ml-20">
                  <input type="radio" className="left-radio1" />
                  <p className="right-radio1">Student</p>
                </div>
                <div className="radio2 ml-20">
                  <input type="radio" className="left-radio2" />
                  <p className="right-radio2">College</p>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
