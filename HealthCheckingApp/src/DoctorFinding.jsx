import React from 'react'; 
import './DoctorFinding.css';

const doctors = [
  {
    name: 'Dr. Aarti Sharma',
    specialization: 'Cardiologist',
    location: 'Patna, Bihar',
    phone: '(956) 128-4567',
    verified: true,
    rating: 4.5
  },
  {
    name: 'Dr. Rajeev Verma',
    specialization: 'Pediatrician',
    location: 'Gaya, Bihar',
    phone: '(456) 882-9343',
    verified: false,
    rating: 4.0
  },
  {
    name: 'Dr. Sneha Kumari',
    specialization: 'Dermatologist',
    location: 'Muzaffarpur, Bihar',
    phone: '(659) 459-2890',
    verified: true,
    rating: 4.8
  },
  {
    name: 'Dr. Anil Singh',
    specialization: 'Orthopedic Surgeon',
    location: 'Bhagalpur, Bihar',
    phone: '(452) 671-0912',
    verified: true,
    rating: 4.6
  }
]
;

export const DoctorCard = ({ doctor }) => (

  <div className="doctor-card">
    <div className="doctor-avatar" />
    <div className="doctor-info">
      <h3>{doctor.name}</h3>
      <p>{doctor.specialization}</p>
      <p><span className="icon">📍</span> {doctor.location}</p>
      <p><span className="icon">📞</span> {doctor.phone}</p>
      {doctor.verified && <span className="verified">✔ Verified</span>}
      <div className="rating">
        {'★'.repeat(Math.floor(doctor.rating))}{'☆'.repeat(5 - Math.floor(doctor.rating))}
        <span className="rating-score">{doctor.rating.toFixed(1)}</span>
      </div>
    </div>
    <div className="doctor-actions">
      <button className="btn view">View Details</button>
      <button className="btn contact">Contact</button>
    </div>
  </div>
);
export default function DoctorFinder() { return ( <div className="finder-page">
   <aside className="sidebar"> 
      <h2 className="logo">HealthMentor</h2>
      <nav> 
        <ul> 
          <li>Home</li> 
          <li>Symptom Checker</li> 
          <li className="active">Find Doctors</li> 
          <li>Saved</li>
          <li>Profile</li> 
        </ul> 
      </nav> 
</aside>

<main className="main-content">
    <h1>Find Doctors</h1>
    <div className="filters">
      <input className="search-bar" type="text" placeholder="Search by specialty or name" />
      <select>
        <option>New York, NY</option>
        <option>Los Angeles, CA</option>
      </select>
      <select>
        <option>Within 5 miles</option>
        <option>Within 10 miles</option>
      </select>
      <button className="btn toggle">Map View</button>
    </div>

    <div className="doctor-list">
      {doctors.map((doc, i) => (
        <DoctorCard doctor={doc} key={i} />
      ))}
    </div>
  </main>
</div>

); }