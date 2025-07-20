import { useState } from "react";
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import React, { useRef } from 'react';
import speakers from './components/speakers.json'
import './App.css'
// Main App component

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Speaker data (you can expand this with more speakers)
  
  // Simplified Schedule data to just contain overall date and time
  const eventDate = 'July 21st - 27st, 2025';
  const eventTime = '08:00 PM Daily';

  // State for the registration form
  const [registrationData, setRegistrationData] = useState({
    name: '',
    phone: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // ***************************    ***************************

 const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
 
  const fname = inputRef.current.value.trim();

    
    if (!fname) {
      alert("Please enter your name.");
      return;
    }

    const message = `Hello Sir👋, My name is ${fname}, I want to be part of the SCRIPTED CONFERENCE`;
    const whatsappLink = `https://wa.me/2348108352835?text=${encodeURIComponent(message)}`;
    console.log("******", message)

    window.open(whatsappLink, '_blank');
  };

  // Handle form submission
  // let fname = ""
  // const getName = () =>{
  //   fname = document.getElementById('name').value
  //   return
  // }
  // console.log("fname2: ", fname)
  // const handleSubmit = (e) => {
    // e.preventDefault();
    // const fname = 
    // Here you would typically send the registrationData to a backend server
    // console.log('Registration Data Submitted:', registrationData);
    // You could also add a success message or redirect the user
    // IMPORTANT: As per instructions, avoid alert() in production code for Canvas.
    // For this demonstration, we'll keep it simple.
    // alert('Thank you for registering! We will contact you shortly.');
  //   setRegistrationData({ name: '', phone: '' }); // Clear form
  // };



  return (
    <div className="app-container">
   

      {/* Navbar Section */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Event Title/Logo */}
          <a href="#" className="navbar-title">
           THE VALUE CONFERENCE
          </a>

          {/* Navigation Links */}
<div className={`nav-links ${isMobileMenuOpen ? 'show-mobile-menu' : ''}`}>
  <a href="#speakers" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Speakers</a>
  <a href="#schedule" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Schedule</a>
  <a href="#registration" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Register</a>
  <a href="#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
</div>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <div className="mobile-menu-button-container">
            <button className="mobile-menu-button" onClick={toggleMobileMenu}>
  <svg className="mobile-menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M4 6h16M4 12h16m-7 6h7"></path>
  </svg>
</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            SCRIPTED 2.0
          </h1>
          <p className="hero-description">
            You are living a story already written before time and as a good sojourner you are to know the blue print and walk towards it while recording your journey for the furture generations to come.
            Join us in this life changing conference. Don't miss it!
          </p>
          <a
            href="#registration"
            className="hero-button"
          >
            Register Now!
          </a>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="section-base speakers-section">
        <h2 className="section-title">Our Esteemed Speakers</h2>
        <div className="speakers-grid">
          {speakers.map(speaker => (
            <div key={speaker.id} className="speaker-card">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="speaker-image"
                // Fallback for image loading errors
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/F0F0F0/000000?text=No+Image"; }}
              />
              <h3 className="speaker-name">{speaker.name}</h3>
              <p className="speaker-title">{speaker.title}</p>
              <p className="speaker-bio">{speaker.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="section-base schedule-section">
        <h2 className="section-title">Conference Schedule</h2>
        <p className="schedule-info">
          📅 {eventDate}
        </p>
        <p className="schedule-info">
          🕒 {eventTime}
        </p>
      </section>

      {/* Registration Section */}
      <section id="registration" className="section-base registration-section">
        <h2 className="registration-title">Register for Scripted 2.0</h2>
        <p className="registration-description">
          Fill out the form below to secure your spot!
        </p>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
            ref={inputRef}
              type="text"
              id="name"
              name="name"
             
              value={registrationData.name}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Your Full Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel" // Use type="tel" for phone numbers
              id="phone"
              name="phone"
              value={registrationData.phone}
              onChange={handleInputChange}
              className="form-input"
              placeholder="e.g., +234 34567890"
              // required
            />
          </div>
  
                <button 
            type="submit"
            className="submit-button"
          >
            Submit
          </button>

        </form>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-base contact-section">
        <h2 className="section-title">Get in Touch</h2>
        {/* New wrapper div to center the single contact info card */}
        <div className="contact-content-wrapper">
          {/* Contact Information */}
          <div className="contact-info-card">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-text">
              <strong>Email:</strong> gozirim001withgod@gmail.com
            </p>
            <p className="contact-info-text">
              <strong>Phone:</strong> +234 8108352835
            </p>
            <p className="contact-info-text">
              {/* <strong>Address:</strong> Enugu State, Nigeria */}
            </p>
            <div className="follow-us-container">
              <h4 className="follow-us-title">Follow Us on:</h4>
              <div className="social-icons">
              {/* <div style={{display:"flex", gap: "0.75em"}}> */}
                <a href="https://www.instagram.com/gozirim_001?utm_source=qr&igsh=aTJzOGhjOHQ0OWtt" className="social-icon">
                   <FaInstagram color="red"/>
                </a>
                <a href="https://www.tiktok.com/@gozirim001withgod?_t=ZM-8sxQb93wr6z&_r=1" className="social-icon">
                  <FaTiktok color="purple"/>
                </a>
                <a href="https://www.youtube.com/@Gozirim0001" className="social-icon">
                  <FaYoutube color="red"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="navbar-container"> {/* Reusing navbar-container for centering */}
          <p>&copy; {new Date().getFullYear()} The Value Conference | All rights reserved.</p>
          {/* <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
          </div> */}
        </div>
      </footer>
    </div>
  );
};

export default App;
