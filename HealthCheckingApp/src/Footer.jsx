import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="cta">
        <h2>Stay healthy with HealthMentor</h2>
        <p>Subscribe to get weekly health tips and updates</p>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="footer-links" style={{display:"flex",justifyContent:"space-around",alignItems:"flex-start"}}>
        <div>
          <h4 className='head'>About HealthMentor</h4>
          <p>We help you track symptoms<br></br>
             and connect with nearby <br></br>
             verified doctors.</p>
        </div>
        <div>
          <h4 className='head'>Explore</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About </a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
        <h4 className='head'>Services</h4>
          <ul>
            <li><a href="#">Symptom Checker</a></li>
            <li><a href="#">Find  Doctors </a></li>
            <li><a href="#">Mental Health</a></li>
            
          </ul>

        </div>
        <div className="footer-social">
          <h4 className='head follow'>Follow Us</h4>
          <a href="#">Twitter</a>  <a href="#">LinkedIn</a>  <a href="#">Instagram</a>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 HealthMentor. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;