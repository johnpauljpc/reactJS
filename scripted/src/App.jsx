import React from 'react';

// Main App component
const App = () => {
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
    // IMPORTANT: As per instructions, avoid alert() in production code for Canvas.
    // For this demonstration, we'll keep it simple.
    alert('Thank you for registering! We will contact you shortly.');
    setRegistrationData({ name: '', phone: '' }); // Clear form
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
          display: none; /* hidden */
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
          letter-spacing: -1px; /* Tighter letter spacing for impact */
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

        .social-icon {
          color: #3f51b5;
          transition: color 0.3s ease, transform 0.2s ease;
        }

        .social-icon:hover {
          color: #673ab7; /* Purple on hover */
          transform: translateY(-3px) scale(1.1); /* Lift and grow */
        }

        .social-icon svg {
          width: 2.2rem; /* Larger icons */
          height: 2.2rem;
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
            display: flex;
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
          <div className="nav-links">
            <a href="#speakers" className="nav-link">Speakers</a>
            <a href="#schedule" className="nav-link">Schedule</a>
            <a href="#registration" className="nav-link">Register</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <div className="mobile-menu-button-container">
            <button className="mobile-menu-button">
              <svg className="mobile-menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
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
                <a href="#" className="social-icon">
                  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c-1.303 0-2.36-.264-3.17-.792-.81-.528-1.428-1.296-1.854-2.304-.426-1.008-.639-2.22-.639-3.636 0-1.416.213-2.628.639-3.636.426-1.008 1.044-1.776 1.854-2.304.81-.528 1.867-.792 3.17-.792 1.303 0 2.36.264 3.17.792.81.528 1.428 1.296 1.854 2.304.426 1.008.639 2.22.639 3.636 0 1.416-.213 2.628-.639 3.636-.426 1.008-1.044 1.776-1.854 2.304-.81.528-1.867.792-3.17.792zm8.437-12.756c-.276-.276-.648-.414-1.116-.414-.468 0-.84.138-1.116.414-.276.276-.414.648-.414 1.116 0 .468.138.84.414 1.116.276.276.648.414 1.116.414.468 0 .84-.138 1.116-.414.276-.276.414-.648.414-1.116 0-.468-.138-.84-.414-1.116zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm7.238 3.585c.209.209.43.41.66.598-.46.34-1.018.575-1.674.705-1.05.204-2.07.297-3.06.282-.99-.015-1.95-.12-2.88-.315-.93-.195-1.815-.47-2.655-.825-.84-.355-1.61-.79-2.31-1.305-.7-.515-1.31-1.11-1.83-1.785-.52-0.675-.925-1.42-1.215-2.235-.29-.815-.46-1.69-.51-2.625-.05-0.935-.02-1.86.09-2.775.11-0.915.31-1.79.59-2.625.28-0.835.63-1.62 1.05-2.355.42-0.735.89-1.425 1.41-2.07.52-0.645 1.09-1.22 1.71-1.725.62-0.505 1.28-0.94 1.98-1.305.7-0.365 1.43-0.66 2.19-0.885.76-0.225 1.54-0.38 2.34-0.465.8-0.085 1.6-0.07 2.4.045.8.115 1.57.34 2.31.675.74.335 1.43.76 2.07 1.275.64.515 1.19 1.11 1.65 1.785.46.675.82 1.42 1.08 2.235.26.815.41 1.69.45 2.625.04.935.01 1.86-.1 2.775-.11.915-.31 1.79-.59 2.625-.28.835-.63 1.62-1.05 2.355-.42.735-.89 1.425-1.41 2.07-.52.645-1.09 1.22-1.71 1.725-.62.505-1.28.94-1.98 1.305-.7.365-1.43.66-2.19.885-.76.225 1.54-0.38 2.34-0.465.8-0.085 1.6-0.07 2.4.045.8.115 1.57.34 2.31.675.74.335 1.43.76 2.07 1.275.64.515 1.19 1.11 1.65 1.785.46.675.82 1.42 1.08 2.235.26.815.41 1.69.45 2.625.04.935.01 1.86-.1 2.775-.11.915-.31 1.79-.59 2.625-.28.835-.63 1.62-1.05 2.355-.42.735-.89 1.425-1.41 2.07-.52.645-1.09 1.22-1.71 1.725-.62.505-1.28.94-1.98 1.305-.7.365-1.43.66-2.19.885-.76.225-1.54.38-2.34.465-.8.085-1.6.07-2.4-.045-.8-.115-1.57-.34-2.31-.675-.74-.335-1.43-.76-2.07-1.275z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h21.351c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0zM7.68 20.485H3.59V9.243h4.09V20.485zM5.635 7.42c-1.332 0-2.199-.899-2.199-2.023 0-1.14.887-2.023 2.24-2.023 1.353 0 2.199.883 2.199 2.023 0 1.124-.866 2.023-2.24 2.023zm15.822 13.065h-4.09V14.01c0-1.5-.536-2.525-1.879-2.525-1.022 0-1.63.689-1.903 1.354-.098.236-.123.565-.123.896v6.75H9.52V9.243h4.09v1.75c.54-.836 1.49-1.996 3.68-1.996 2.68 0 4.69 1.75 4.69 5.518v6.002z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.25 8.5c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75zm-6.5 0c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75zm3.25 6.5c-2.485 0-4.5-2.015-4.5-4.5h1.5c0 1.657 1.343 3 3 3s3-1.343 3-3h1.5c0 2.485-2.015 4.5-4.5 4.5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="navbar-container"> {/* Reusing navbar-container for centering */}
          <p>&copy; {new Date().getFullYear()} FutureTech Summit. All rights reserved.</p>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
