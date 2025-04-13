import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'; 
const Footer = () => {
    async function genearateAnswer(){
        
        const response = await axios({
            url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDz7jCGn0BarH6bPzSK9n9999PU_vAn_Tw",
            method:"POST",
            data : {
                "contents": [
                {
                  "parts":[{"text": "Explain how AI works"}]
                  }
                ]
                 }
        })
        console.log(response.data);
        console.log(response.data.generatedContents[0].parts[0].text);
        
    }
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About </Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>
        <div>
        <h4 className='head'>Services</h4>
          <ul>
            <li><Link to="/">Symptom Checker</Link></li>
            <li><Link to="/DoctorFinding">Find  Doctors </Link></li>
            <li><Link to="https://open.spotify.com/#login">Mental Health</Link></li>
          </ul>

        </div>
        <div className="footer-social">
          <h4 className='head follow'>Follow Us</h4>
          <a href="https://www.facebook.com/login/">Facebook</a>  <a href="https://in.linkedin.com/">LinkedIn</a>  <a href="https://www.instagram.com/">Instagram</a>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 HealthMentor. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;