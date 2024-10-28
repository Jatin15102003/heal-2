import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import "./Home.css";

function Homepage() {


  // State to manage theme
  const [theme, setTheme] = useState("light");

  // Toggle between dark and light themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Apply theme class to the body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Healthify</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/patient-dashboard">Patient Dashboard</Link>
          </li>
          <li>
            <Link to="/doctor-dashboard">Doctor Dashboard</Link>
          </li>
          <li>
            <Link to="/admin-dashboard">Admin Panel</Link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
        </ul>
        <div className="cta">
          <a href="#contact" className="cta-button">
            Contact Us
          </a>
          <a href="#login" className="cta-login-button">
            Login
          </a>
        </div>


         {/* Theme toggle button */}
         <button onClick={toggleTheme} className="theme-toggle-button">
          {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </button>


      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Innovative Hospital Track</h1>
          <p>
          Our project aims to create a comprehensive Hospital Management System utilizing React for the front end and Spring Boot for the back end. This system will facilitate efficient patient registration, appointment scheduling, and medical record management. By integrating user-friendly interfaces with robust server-side functionalities, we strive to enhance operational efficiency and improve the overall patient experience in healthcare facilities.
          </p>
          <Link to="/patient-dashboard" className="cta-link">
            Explore Dashboards
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="/image/homeimage.jpeg"
            alt="Creative Healthcare Solutions"
          />
        </div>
      </section>

      {/* Dashboard Overview Section */}
      <section id="features-section" className="features-section">
        <h2>Our Dashboards</h2>
        <div className="home-dashboard-cards">
          <div className="home-card">
            <h3>Patient Dashboard</h3>
            <p>Track your appointments, health history, and more.</p>
            <Link to="/patient-dashboard" className="cta-card-button">
              Go to Dashboard
            </Link>
          </div>
          <div className="home-card">
            <h3>Doctor Dashboard</h3>
            <p>Manage patient records, appointments, and medical data.</p>
            <Link to="/doctor-dashboard" className="cta-card-button">
              Go to Dashboard
            </Link>
          </div>
          <div className="home-card">
            <h3>Admin Panel</h3>
            <p>Oversee the system, manage users and data efficiently.</p>
            <Link to="/admin-panel" className="cta-card-button">
              Go to Admin
            </Link>
          </div>
        </div>
      </section>

      {/* Application Features Section */}
      <section id="features" className="features-section">
        <h2>Features of Healthify</h2>
        <div className="features-cards">
          <div className="feature-card">
            <h3>Real-time Bed Availability</h3>
            <p>Get instant updates on bed availability in hospitals.</p>
          </div>
          <div className="feature-card">
            <h3>Doctor-Patient Interactive Interface</h3>
            <p>Facilitate seamless communication between doctors and patients.</p>
          </div>
          <div className="feature-card">
            <h3>Appointment Scheduling</h3>
            <p>Schedule and manage appointments effortlessly.</p>
          </div>
          <div className="feature-card">
            <h3>Health Records Management</h3>
            <p>Securely manage and access health records anytime, anywhere.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>
          Healthify is dedicated to enhancing the healthcare experience for both patients and medical professionals. Our platform bridges the gap between doctors and patients, providing innovative tools for better communication and management.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, please reach out!</p>
        <a href="mailto:info@healthify.com" className="cta-button">Email Us</a>
      </section>
    </div>
  );
}

export default Homepage;
