import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import './Symptom.css'; // Importing the CSS file

const Symptoms = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [priorDiseases, setPriorDiseases] = useState("");
  const [suggestedDoctor, setSuggestedDoctor] = useState(null);
  const [appointmentScheduled, setAppointmentScheduled] = useState(false);

  // Dummy logic for appointing a doctor based on symptoms
  const suggestDoctor = () => {
    let doctor = "";

    if (symptoms.toLowerCase().includes("fever") || symptoms.toLowerCase().includes("cough")) {
      doctor = "Dr. Smith - General Physician";
    } else if (symptoms.toLowerCase().includes("chest pain") || symptoms.toLowerCase().includes("heart")) {
      doctor = "Dr. Johnson - Cardiologist";
    } else if (symptoms.toLowerCase().includes("stomach pain") || symptoms.toLowerCase().includes("nausea")) {
      doctor = "Dr. Williams - Gastroenterologist";
    } else if (symptoms.toLowerCase().includes("skin rash") || symptoms.toLowerCase().includes("itching")) {
      doctor = "Dr. Brown - Dermatologist";
    } else {
      doctor = "Dr. Taylor - General Practitioner";
    }

    setSuggestedDoctor(doctor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    suggestDoctor(); // Call the function to suggest a doctor
  };

  const handleNext = () => {
    // Handle the logic when the next button is clicked
    alert("..Appointment scheduled for you..");
  };

  return (
    <div className="container">
      <Link to="/home" className="homepage-link"> {/* Link to the homepage */}
        <button className="homepage-button">Go to Homepage</button>
      </Link>

      <h2 className="heading">Patient Information Form</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
            required
          />
        </div>

        <div className="form-group">
          <label className="label">Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="input"
            required
          />
        </div>

        <div className="form-group">
          <label className="label">Symptoms:</label>
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            className="textarea"
            required
          />
        </div>

        <div className="form-group">
          <label className="label">Prior Diseases:</label>
          <textarea
            value={priorDiseases}
            onChange={(e) => setPriorDiseases(e.target.value)}
            className="textarea"
          />
        </div>

        <button type="submit" className="button">
          Submit
        </button>
      </form>

      {suggestedDoctor && (
        <div className="doctor-container">
          <h3 className="doctor-heading">Suggested Doctor:</h3>
          <p className="doctor-name">{suggestedDoctor}</p>
          
          <div className="appointment-container">
            <label>
              <input 
                type="checkbox" 
                checked={appointmentScheduled} 
                onChange={() => setAppointmentScheduled(!appointmentScheduled)} 
              />
              Appointment Scheduled
            </label>
          </div>

          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Symptoms;
