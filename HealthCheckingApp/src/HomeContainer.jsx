import React,{useState} from 'react';
import DoctorImage from './assets/Doctor.jpg';
import './HomeContainer.css';
import axios from 'axios'; 
import { Link } from 'react-router-dom'; 
const HomeContainer = () => {
    const [question,setQuestion] = useState("");
    const [answer,setAnswer] = useState("");
    async function genearateAnswer() {
        try {
            const response = await axios({
                url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDz7jCGn0BarH6bPzSK9n9999PU_vAn_Tw",
                method: "POST",
                data: {
                    "contents": [
                        {
                            "parts": [{ "text": `What are the possible conditions for ${question} symptoms?, Give only 3 highly possible outcomes.` }]
                        }
                    ]
                }
            });

            let rawAnswer = response.data.candidates[0].content.parts[0].text;
            // Replace * with new line and ** with bold text
            let formattedAnswer = rawAnswer
                .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') // Bold text
                .replace(/^\d+\.\s+/gm, '<br/><br/>') // Add spacing between points
                .trim()
                .split('<br/><br/>') // Split into individual points
                .map(point => `
                    <div style="
                        border: 1px solid #ccc; 
                        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); 
                        padding: 15px; 
                        margin-bottom: 15px; 
                        border-radius: 10px; 
                        background-color: #f9f9f9;
                        transition: transform 0.2s;
                    " 
                    onmouseover="this.style.transform='scale(1.02)'" 
                    onmouseout="this.style.transform='scale(1)'">
                        ${point}
                    </div>
                `)
                .join('');
            setAnswer(formattedAnswer);
        } catch (error) {
            console.error("Error generating answer:", error);
            setAnswer("Sorry, we couldn't fetch the results. Please try again.");
        }
    }
    
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
        <button className="primary-btn hbtn" style={{fontSize:"1rem",fontWeight:"700"}}> <a href="#check" style={{textDecoration:"none",color:"white"}}>Check Symptoms</a> </button>
        <button className="secondary-btn hbtn" style={{fontSize:"1rem",fontWeight:"700"}}> <Link to="/DoctorFinding" style={{textDecoration:"none",color:"teal"}}>Find Doctors</Link></button>
      </div>
    </div>
    <div className="hero-image">
      <img src={DoctorImage} alt="Doctor Illustration" style={{height:"400px",width:"600px"}}/>
    </div>
  </section>

  {/* Symptom Checker */}
  <section className="symptom-section" id="check">
    <div className="symptom-container">
      <h2>Symptom Checker</h2>
      <p className="label">Select symptoms to check:</p>
      <div className="symptom-input">
        <input type="text" placeholder="e.g., fever, cough" value={question} onChange={(e)=>{
            setQuestion(e.target.value);
        }}/>
        {/* button */}
        
        <button className="primary-btn hbtn" style={{fontSize:"0.9rem",fontWeight:"700"}} onClick={genearateAnswer}>Check Symptoms</button>
      </div>
      <p className="label">Possible conditions:</p>
        <div className="symptom-results">
            <p dangerouslySetInnerHTML={{ __html: answer }}></p>
        </div>
      
      
    </div>
  </section>

</div>
  );
}
export default HomeContainer;