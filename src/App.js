import HomePage from "./components/HomePage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/styles.css"; // Import the CSS file

function App() {
  return (
    <div className="App">
      {/* <SignIn />
      <SignUp /> */}
      <Navbar />
      <div className="content">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
