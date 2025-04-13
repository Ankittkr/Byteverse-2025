import React from 'react';
import './Navbar.css'; // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom'; // Import Link for navigation  

const  Navbar = () => {
  return (
    <nav className="navbar">
        
      <div className="logo" style={{display:"flex",fontSize:"2.3rem"}}><img src="https://cdn-icons-png.flaticon.com/512/875/875255.png" alt="Logo" height="50px"/>HealthMentor</div>
      <ul className="nav-links">
      <li><Link to="/Login">Login</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/DoctorFinding">Find Doctors</Link></li>
        <li><Link to="/Dashboard">Dashboard</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        
      </ul>
    </nav>
  );
}
export default Navbar;