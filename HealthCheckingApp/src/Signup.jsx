import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
export default function Signup() {
  return (
    <div className="Signup-page">
      <div className="left-panel">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3302/3302245.png"
          alt="HealthMentor Logo"
          className="logo"
        />
        <h1 className="brand">HealthMentor</h1>
      </div>
      <div className="right-panel">
        <h2 style={{textAlign:"center"}}>Sign Up</h2>

        <button className="google-button">
        <FcGoogle />
          Continue with Google
        </button>

        <div className="divider">
          <hr />
          <span>Or</span>
          <hr />
        </div>

        <form className="Signup-form">
          <input type="text" placeholder="Name" />
          <div className="horizontal-inputs">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="tel" placeholder="Phone Number.." />
          </div>
          <button className="signup-btn" style={{fontWeight:"700"}}><Link to="/" style={{color:"white",textDecoration:"none"}}>Sign Up</Link></button>
        </form>

        <p className="Signup-link">
          Already have an account? <a href="/Login">Login</a>
        </p>
      </div>
    </div>
  );
}