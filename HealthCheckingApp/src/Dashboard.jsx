import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">HealthMentor</div>
        <nav className="nav">
          <div className="nav-item">🏠 Home</div>
          <div className="nav-item">🩺 Symptom Checker</div>
          <div className="nav-item active">👨‍⚕️ Find Doctors</div>
          <div className="nav-item">💾 Saved</div>
          <div className="nav-item">👤 Profile</div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <div className="header">
          <h1 className="title">Patient Dashboard</h1>
          <div className="header-icons">
            <span className="icon">👤</span>
            <span className="icon clickable">🚪</span>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="cards-grid">
          <div className="card">
            <div className="card-content">
              <h2 className="card-title">👤 Name: John Doe</h2>
              <p>Age: 32 | Blood Type: O+</p>
              <p>Status: <span className="status-green">Stable</span></p>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h2 className="card-title">🩺 Current Health Status</h2>
              <p>Mild Flu (Reported 3 days ago)</p>
              <p>Severity: <span className="status-yellow">Medium</span></p>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h2 className="card-title">📆 Last Doctor Visit</h2>
              <p>Dr. Sarah Johnson (Cardiologist)</p>
              <p>Date: 02 April 2025</p>
            </div>
          </div>
        </div>

        {/* Symptoms + Reports */}
        <div className="split-grid">
          <div className="card">
            <div className="card-content">
              <h2 className="card-title">📝 Current Symptoms</h2>
              <div className="symptoms">
                <span className="symptom">Fever</span>
                <span className="symptom">Cough</span>
                <span className="symptom">Sore Throat</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h2 className="card-title">📂 Older Reports</h2>
              <ul className="report-list">
                <li>Blood Test - Feb 2025 (PDF)</li>
                <li>X-ray - Jan 2025 (PDF)</li>
                <li>Annual Checkup - Dec 2024 (PDF)</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
