import React from "react";
import { FaHome, FaStethoscope, FaUserMd, FaSave, FaUser, FaSignOutAlt } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import "./Dashboard.css";
import { Link } from "react-router-dom"; // Import Link for navigation
const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebr" style={{backgroundColor:"#333"}}> 
      <h2 className="logo" style={{color:"#1eb2a6"}}>HealthMentor</h2>
      <nav> 
        <ul> 
          <li><Link to="/" style={{color:"white",textDecoration:"none",padding:"20px"}}>Home</Link> </li>
          <li><Link to="/About" style={{color:"white",textDecoration:"none",padding:"20px"}}>About</Link> </li>
          <li className="active"><Link  to="/DoctorFinding" style={{color:"white",textDecoration:"none",padding:"20px"}}>Find Doctors</Link> </li>
          <li><Link to="/Contact" style={{color:"white",textDecoration:"none",padding:"20px"}}>Contact Us</Link></li>
          <li><Link to="/Dashboard" style={{color:"white",textDecoration:"none",padding:"20px"}}>Dashboard</Link> </li>
        </ul> 
      </nav> 
  </aside>

      {/* Main Content */}
      <main className="main-content">
          <div className="header">
            <h1 className="title">Patient Dashboard</h1>
            <div className="header-icons">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s"
                alt="User"
                className="user-image"
                style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "2px solid #ccc",
            objectFit: "cover",
            marginRight: "10px",
                }}
              />
              <span className="icon clickable">
                <FaSignOutAlt />
              </span>
            </div>
          </div>

          {/* Overview Cards */}
        <div className="cards-grid">
          <div className="card">
            <div className="card-content">
              <h2 className="card-title">👤 Name: Surya Kumar Yadav</h2>
              <p>Age: 22 | Blood Type: A+</p>
              <p>
                Status: <span className="status-green">Stable</span>
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h2 className="card-title">🩺 Current Health Status</h2>
              <p>Mild Flu (Reported 3 days ago)</p>
              <p>
                Severity: <span className="status-yellow">Medium</span>
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h2 className="card-title">📆 Last Doctor Visit</h2>
              <p>Dr. Sarah Ali Khan (Cardiologist)</p>
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
