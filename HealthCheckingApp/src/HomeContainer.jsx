import React from 'react';
import DoctorImage from './assets/Doctor.jpg';
import './HomeContainer.css';
const HomeContainer = () => {
  return (
    <div className="home-container"> {/* Navbar */}
{/* Hero Section */}
  <section className="hero">
    <div className="hero-text" style={{marginLeft:"25px"}}>
      <h1 style={{fontSize:"3rem",fontWeight:"700",color:"#112d2b"}}>Check symptoms. <br />Find help. Stay safe.</h1>
      <p style={{fontSize:"1rem",fontWeight:"700",color:"#6d7978"}}>
        Check symptoms to get potential conditions and advice. Find local verified doctors near you.
      </p>
      <div className="hero-buttons">
        <button className="primary-btn hbtn" style={{fontSize:"1rem",fontWeight:"700"}}>Check Symptoms</button>
        <button className="secondary-btn hbtn" style={{fontSize:"1rem",fontWeight:"700"}}>Find Doctors</button>
      </div>
    </div>
    <div className="hero-image">
      <img src={DoctorImage} alt="Doctor Illustration" style={{height:"400px",width:"600px"}}/>
    </div>
  </section>

  {/* Symptom Checker */}
  <section className="symptom-section">
    <div className="symptom-container">
      <h2>Symptom Checker</h2>
      <p className="label">Select symptoms to check:</p>
      <div className="symptom-input">
        <input type="text" placeholder="e.g., fever, cough" />
        <button className="primary-btn hbtn" style={{fontSize:"0.9rem",fontWeight:"700"}}>Check Symptoms</button>
      </div>

      <p className="label">Possible conditions:</p>
      <div className="conditions">
        <div className="condition-card">
          <div className="condition-header">
            <h3>Common cold</h3>
            <span className="badge low">Low</span>
          </div>
          <p>See a doctor if symptoms worsen or new ones appear</p>
        </div>

        <div className="condition-card">
          <div className="condition-header">
            <h3>Influenza</h3>
            <span className="badge high">High</span>
          </div>
          <p>See a doctor if symptoms worsen or new ones appear</p>
        </div>

        <div className="condition-card">
          <div className="condition-header">
            <h3>Strep throat</h3>
            <span className="badge medium">Medium</span>
          </div>
          <p>See a doctor if symptoms worsen or new ones appear</p>
        </div>
      </div>
    </div>
  </section>

</div>
  );
}
export default HomeContainer;