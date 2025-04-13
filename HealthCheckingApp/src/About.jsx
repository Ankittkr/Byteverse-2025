import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About HealthMentor</h1>
        <p>Your companion in better health and well-being.</p>
      </div>

      <div className="about-content">
        <section>
          <h2 id='sh2'>Our Mission</h2>
          <p>
            HealthMentor was built to help individuals easily monitor their health, detect early symptoms, and connect with trusted healthcare professionals. We aim to make healthcare more accessible, insightful, and user-friendly.
          </p>
        </section>

        <section>
          <h2 id='sh2'>What We Offer</h2>
          <ul>
            <li>Symptom Checker powered by smart algorithms</li>
            <li>Doctor Finder with verified professionals near you</li>
            <li>Health tips and lifestyle recommendations</li>
            <li>Friendly UI built for all age groups</li>
          </ul>
        </section>

        <section>
          <h2 id='sh2'>Why Choose Us?</h2>
          <p>
            With a focus on simplicity, reliability, and privacy, HealthMentor is designed for people who want fast, reliable, and understandable health insights—without the stress.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;