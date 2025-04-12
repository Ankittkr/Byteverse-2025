import React from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
export default function Login() {
  return (
    <div className="login-page">
      <div className="left-panel">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3302/3302245.png"
          alt="HealthMentor Logo"
          className="logo"
        />
        <h1 className="brand">HealthMentor</h1>
      </div>
      <div className="right-panel">
        <h2>Login / Sign Up</h2>

        <button className="google-button">
        <FcGoogle />
          Continue with Google
        </button>

        <div className="divider">
          <hr />
          <span>Or</span>
          <hr />
        </div>

        <form className="login-form">
          <input type="text" placeholder="Name" />
          <div className="horizontal-inputs">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <button className="signup-btn">Sign Up</button>
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}