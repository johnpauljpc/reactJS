import React from 'react';

// Main App component
const App = () => {
  // State for mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Speaker data (you can expand this with more speakers)
  const speakers = [
    {
      id: 1,
      name: 'Dr. Aisha Khan',
      title: 'Keynote Speaker, AI & Future Technologies',
      bio: 'Dr. Aisha Khan is a leading expert in artificial intelligence and machine learning. Her work focuses on ethical AI development and its societal impact. She has published numerous papers and is a sought-after speaker at international conferences.',
      image: 'https://placehold.co/150x150/F0F0F0/000000?text=Speaker+1' // Placeholder image
    },
    {
      id: 2,
      name: 'Prof. David Lee',
      title: 'Panelist, Sustainable Energy Solutions',
      bio: 'Professor David Lee is an environmental scientist specializing in renewable energy and sustainable development. He is passionate about creating innovative solutions for a greener future and has advised several government agencies on climate policy.',
      image: 'https://placehold.co/150x150/F0F0F0/000000?text=Speaker+2' // Placeholder image
    },
    {
      id: 3,
      name: 'Ms. Sarah Chen',
      title: 'Workshop Lead, Digital Marketing Trends',
      bio: 'Sarah Chen is a digital marketing strategist with over a decade of experience helping businesses grow their online presence. She is known for her practical insights and engaging workshops on the latest marketing trends.',
      image: 'https://placehold.co/150x150/F0F0F0/000000?text=Speaker+3' // Placeholder image
    }
  ];

  // Simplified Schedule data to just contain overall date and time
  const eventDateTime = 'October 26-27, 2025 | 9:00 AM - 5:00 PM Daily';

  // State for the registration form
  const [registrationData, setRegistrationData] = React.useState({
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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the registrationData to a backend server
    console.log('Registration Data Submitted:', registrationData);
    // You could also add a success message or redirect the user
    alert('Thank you for registering! We will contact you shortly.');
    setRegistrationData({ name: '', phone: '' }); // Clear form
  };

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="app-container">
      {/* Pure CSS Styles */}
      <style>
        {`
        /* Base Styles */
        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          line-height: 1.6;
          color: #333;
        }

        .app-container {
          min-height: 100vh;
          background-color: #f8f9fa; /* A slightly lighter gray for professionalism */
        }

        /* Navbar Section */
        .navbar {
          background-color: #ffffff; /* white */
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08); /* Stronger, softer shadow */
          padding: 1rem 2rem; /* Increased padding */
          position: fixed;
          width: 100%;
          z-index: 1000; /* Higher z-index */
          border-bottom-left-radius: 0.75rem; /* More rounded */
          border-bottom-right-radius: 0.75rem; /* More rounded */
        }

        .navbar-container {
          max-width: 1200px; /* Slightly smaller max-width for better control */
          margin-left: auto;
          margin-right: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative; /* Needed for absolute positioning of mobile menu */
        }

        .navbar-title {
          font-size: 1.8rem; /* Larger title */
          font-weight: 800; /* Bolder */
          color: #3f51b5; /* Deeper indigo */
          padding: 0.6rem 0.8rem; /* Adjusted padding */
          border-radius: 0.5rem; /* More rounded */
          transition: background-color 0.3s ease, transform 0.2s ease;
          letter-spacing: -0.5px; /* Tighter letter spacing */
        }

        .navbar-title:hover {
          background-color: #e8eaf6; /* Lighter indigo hover */
          transform: translateY(-2px); /* Subtle lift effect */
        }

        .nav-links {
          display: none; /* Hidden by default on mobile */
          gap: 1.8rem; /* Increased space */
        }

        .nav-link {
          color: #555; /* Softer gray */
          font-weight: 600; /* Slightly bolder */
          padding: 0.6rem 0.8rem; /* Adjusted padding */
          border-radius: 0.5rem; /* More rounded */
          transition: all 0.3s ease;
          text-decoration: none; /* Ensure no underline */
        }

        .nav-link:hover {
          color: #3f51b5; /* Deeper indigo hover */
          background-color: #e8eaf6; /* Lighter indigo hover */
          transform: translateY(-2px); /* Subtle lift effect */
        }

        .mobile-menu-button-container {
          display: block; /* Shown by default on mobile */
        }

        .mobile-menu-button {
          color: #555;
          padding: 0.5rem;
          border-radius: 0.375rem;
          border: none;
          background: none;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .mobile-menu-button:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(63, 81, 181, 0.4); /* Focus ring matching new indigo */
        }

        .mobile-menu-button svg {
          width: 1.75rem; /* Slightly larger icon */
          height: 1.75rem;
        }

        /* Mobile Menu Specific Styles */
        .nav-links.nav-links-open {
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 100%; /* Position below the navbar */
          left: 0;
          width: 100%;
          background-color: #ffffff; /* White background for the dropdown */
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          border-bottom-left-radius: 0.75rem;
          border-bottom-right-radius: 0.75rem;
          padding: 1rem 0;
          animation: slideDown 0.3s ease-out forwards; /* Slide down animation */
        }

        .nav-links.nav-links-open .nav-link {
          text-align: center;
          padding: 0.8rem 1rem;
          width: 100%;
          border-radius: 0; /* Remove individual link rounding in menu */
        }

        .nav-links.nav-links-open .nav-link:hover {
          background-color: #e8eaf6;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(to right bottom, #3f51b5, #673ab7); /* Deeper, richer gradient */
          color: #ffffff;
          padding: 8rem 2rem; /* More vertical padding */
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 550px; /* Taller hero */
          border-bottom-left-radius: 2rem; /* More rounded */
          border-bottom-right-radius: 2rem; /* More rounded */
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2); /* Stronger shadow */
          padding-top: 10rem; /* Adjust for fixed navbar */
          position: relative; /* For potential background elements */
          overflow: hidden; /* Hide overflow from any subtle animations */
        }

        .hero-content {
          max-width: 800px; /* Wider content area */
          margin-left: auto;
          margin-right: auto;
          z-index: 1; /* Ensure content is above any background effects */
        }

        .hero-title {
          font-size: 4.5rem; /* Even larger, more impactful title */
          font-weight: 900; /* Extra bold */
          line-height: 1.1;
          margin-bottom: 1.5rem;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3); /* Stronger text shadow */
          letter-spacing: -1px; /* Tighter letter spacing */
        }

        .hero-description {
          font-size: 1.6rem; /* Larger description */
          margin-bottom: 2.5rem; /* More space below */
          opacity: 0.95;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-button {
          display: inline-block;
          background-color: #ffffff;
          color: #3f51b5; /* Matching deeper indigo */
          font-weight: 700;
          padding: 1rem 2.5rem; /* More padding */
          border-radius: 50px; /* Pill shape */
          font-size: 1.25rem; /* Larger text */
          transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1); /* Smoother transition */
          transform: scale(1);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* Defined shadow */
          text-decoration: none;
          border: none;
          cursor: pointer;
        }

        .hero-button:hover {
          background-color: #f0f0f0; /* Subtle hover background */
          transform: translateY(-3px) scale(1.02); /* Lift and slight scale */
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3); /* Enhanced shadow on hover */
        }

        /* Sections General */
        .section-base {
          padding: 5rem 2rem; /* More padding */
          border-radius: 1rem; /* More rounded corners */
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08); /* Consistent shadow */
          margin: 3rem auto; /* More margin, auto for centering */
          max-width: 1100px; /* Wider content area */
          background-color: #ffffff; /* White background for sections */
        }

        .section-title {
          font-size: 3.2rem; /* Larger titles */
          font-weight: 800; /* Bolder */
          text-align: center;
          color: #2c3e50; /* Darker, more professional gray */
          margin-bottom: 4rem; /* More space below title */
          position: relative;
          padding-bottom: 0.5rem;
        }

        .section-title::after { /* Underline effect */
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background-color: #3f51b5; /* Matching indigo */
          border-radius: 2px;
        }

        /* Speakers Section */
        .speakers-section {
          background-color: #ffffff;
        }

        .speakers-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr); /* Default to 1 column */
          gap: 2.5rem; /* Consistent gap */
        }

        .speaker-card {
          background-color: #fefefe; /* Near white background */
          padding: 2.5rem; /* More padding */
          border-radius: 1rem; /* More rounded */
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08); /* Softer shadow */
          transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border: 1px solid #eee; /* Subtle border */
        }

        .speaker-card:hover {
          transform: translateY(-5px); /* Lift effect */
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15); /* Stronger shadow on hover */
        }

        .speaker-image {
          width: 10rem; /* Larger image */
          height: 10rem; /* Larger image */
          border-radius: 50%; /* Perfect circle */
          object-fit: cover;
          margin-bottom: 1.8rem; /* More space */
          border: 5px solid #3f51b5; /* Thicker, matching border */
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Image shadow */
        }

        .speaker-name {
          font-size: 1.8rem; /* Larger name */
          font-weight: 700; /* Bolder */
          color: #2c3e50; /* Darker gray */
          margin-bottom: 0.5rem;
        }

        .speaker-title {
          color: #673ab7; /* Matching purple */
          font-weight: 500;
          font-size: 1.1rem;
          margin-bottom: 1.2rem;
        }

        .speaker-bio {
          color: #666; /* Softer text color */
          line-height: 1.7; /* Better readability */
          font-size: 1rem;
        }

        /* Schedule Section */
        .schedule-section {
          background-color: #e8eaf6; /* Light indigo background */
          text-align: center;
        }

        .schedule-info {
          font-size: 2rem; /* Larger text for prominence */
          font-weight: 700; /* Bolder */
          color: #3f51b5; /* Matching indigo */
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
          letter-spacing: 0.5px;
        }

        /* Registration Section */
        .registration-section {
          background: linear-gradient(to right, #3f51b5, #673ab7); /* Matching gradient */
          color: #ffffff;
          text-align: center;
          margin-bottom: 3rem;
        }

        .registration-title {
          font-size: 3rem; /* Larger title */
          font-weight: 800;
          margin-bottom: 1.5rem;
          text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
        }

        .registration-description {
          font-size: 1.4rem; /* Larger description */
          margin-bottom: 2.5rem;
          opacity: 0.95;
        }

        .registration-form {
          max-width: 500px; /* Slightly wider form */
          margin-left: auto;
          margin-right: auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: left;
          padding: 2rem; /* Padding for the form itself */
          background-color: rgba(255, 255, 255, 0.1); /* Slightly transparent background */
          border-radius: 1rem; /* Rounded form */
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .form-group {
          margin-bottom: 0.8rem; /* Adjusted spacing */
        }

        .form-label {
          display: block;
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.6rem;
        }

        .form-input {
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1); /* Inner shadow */
          border: 1px solid rgba(255, 255, 255, 0.3); /* Lighter border */
          border-radius: 0.6rem; /* More rounded */
          width: calc(100% - 2rem); /* Account for padding */
          padding: 0.9rem 1rem; /* More padding */
          color: #333; /* Darker text in input */
          background-color: #ffffff; /* White input background */
          line-height: 1.5;
          outline: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .form-input:focus {
          border-color: #8c9eff; /* Lighter indigo border on focus */
          box-shadow: 0 0 0 4px rgba(140, 158, 255, 0.3); /* Softer focus ring */
        }

        .submit-button {
          display: inline-block;
          background-color: #ffffff;
          color: #3f51b5; /* Matching indigo */
          font-weight: 700;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-size: 1.25rem;
          transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
          transform: scale(1);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
          width: 100%;
          border: none;
          cursor: pointer;
          margin-top: 1rem;
        }

        .submit-button:hover {
          background-color: #f0f0f0;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
        }

        /* Contact Section */
        .contact-section {
          background-color: #ffffff;
          margin-bottom: 3rem;
        }

        .contact-content-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .contact-info-card {
          background-color: #fefefe;
          padding: 2.5rem;
          border-radius: 1rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 500px; /* Consistent max-width */
          width: 100%;
          border: 1px solid #eee;
        }

        .contact-info-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1.5rem;
        }

        .contact-info-text {
          color: #555;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .contact-info-text strong {
          color: #3f51b5;
          font-weight: 600;
        }

        .follow-us-container {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid #eee; /* Separator line */
        }

        .follow-us-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .social-icons {
          display: flex;
          gap: 1.2rem; /* More space between icons */
          justify-content: center; /* Center social icons */
        }

        .social-link {
          color: #3f51b5;
          transition: color 0.3s ease, transform 0.2s ease;
          text-decoration: none;
          font-weight: 600;
        }

        .social-link:hover {
          color: #673ab7; /* Purple on hover */
          transform: translateY(-3px) scale(1.05); /* Lift and slight grow */
        }


        /* Footer Section */
        .footer {
          background-color: #2c3e50; /* Darker gray for footer */
          color: #e0e0e0; /* Lighter text color */
          padding: 2.5rem 2rem; /* More padding */
          text-align: center;
          border-top-left-radius: 0.75rem;
          border-top-right-radius: 0.75rem;
          font-size: 0.95rem;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 1.2rem;
        }

        .footer-link {
          color: #b0b0b0; /* Softer gray */
          transition: color 0.3s ease;
          text-decoration: none;
        }

        .footer-link:hover {
          color: #ffffff;
        }

        /* Media Queries for Responsiveness */
        @media (min-width: 768px) { /* md breakpoint */
          .navbar {
            padding-left: 3rem;
            padding-right: 3rem;
          }

          .nav-links {
            display: flex !important; /* Force flex display on desktop */
            position: static; /* Remove absolute positioning */
            flex-direction: row; /* Back to row for desktop */
            box-shadow: none; /* Remove mobile menu shadow */
            padding: 0; /* Remove mobile menu padding */
            animation: none; /* Remove mobile menu animation */
          }

          .nav-links .nav-link {
            padding: 0.6rem 0.8rem; /* Restore desktop padding */
            border-radius: 0.5rem; /* Restore desktop rounding */
          }


          .mobile-menu-button-container {
            display: none;
          }

          .hero-section {
            padding-left: 3rem;
            padding-right: 3rem;
          }

          .hero-title {
            font-size: 5.5rem; /* Larger on desktop */
          }

          .hero-description {
            font-size: 1.8rem; /* Larger on desktop */
          }

          .section-base {
            padding-left: 3rem;
            padding-right: 3rem;
          }

          .speakers-grid {
            grid-template-columns: repeat(2, 1fr); /* 2 columns on medium screens */
          }

          .schedule-section {
            padding-left: 3rem;
            padding-right: 3rem;
          }

          .registration-section {
            padding-left: 3rem;
            padding-right: 3rem;
          }

          .contact-info-card {
            max-width: 600px; /* Wider on desktop */
          }

          .footer {
            padding-left: 3rem;
            padding-right: 3rem;
          }
        }

        @media (min-width: 1024px) { /* lg breakpoint */
          .speakers-grid {
            grid-template-columns: repeat(3, 1fr); /* 3 columns on large screens */
          }
        }
        `}
      </style>

      {/* Navbar Section */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Event Title/Logo */}
          <a href="#" className="navbar-title">
            FutureTech Summit 2025
          </a>

          {/* Navigation Links */}
          <div className={`nav-links ${isMobileMenuOpen ? 'nav-links-open' : ''}`}>
            <a href="#speakers" className="nav-link" onClick={toggleMobileMenu}>Speakers</a>
            <a href="#schedule" className="nav-link" onClick={toggleMobileMenu}>Schedule</a>
            <a href="#registration" className="nav-link" onClick={toggleMobileMenu}>Register</a>
            <a href="#contact" className="nav-link" onClick={toggleMobileMenu}>Contact</a>
          </div>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <div className="mobile-menu-button-container">
            <button className="mobile-menu-button" onClick={toggleMobileMenu}>
              <svg className="mobile-menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Innovate. Connect. Inspire.
          </h1>
          <p className="hero-description">
            Join us for the premier event exploring the future of technology and innovation.
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
        <h2 className="section-title">Event Schedule</h2>
        <p className="schedule-info">
          {eventDateTime}
        </p>
      </section>

      {/* Registration Section */}
      <section id="registration" className="section-base registration-section">
        <h2 className="registration-title">Register for FutureTech Summit 2025</h2>
        <p className="registration-description">
          Fill out the form below to secure your spot!
        </p>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
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
              placeholder="e.g., +1234567890"
              required
            />
          </div>
          <button
            type="submit"
            className="submit-button"
          >
            Submit Registration
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
              <strong>Email:</strong> info@futuretechsummit.com
            </p>
            <p className="contact-info-text">
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
            <p className="contact-info-text">
              <strong>Address:</strong> 123 Tech Avenue, Innovation City, TX 78901
            </p>
            <div className="follow-us-container">
              <h4 className="follow-us-title">Follow Us:</h4>
              <div className="social-icons">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 FutureTech Summit. All rights reserved.</p>
        <div className="footer-links">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
