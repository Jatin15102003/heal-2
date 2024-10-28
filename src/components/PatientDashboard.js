import React, { useState } from "react";
import "./PatientDashboard.css"; // Import the dedicated CSS file

function PatientDashboard() {
  const patients = [
    {
      id: 1,
      name: "John Doe",
      bloodType: "B+",
      image: "./image/p1.webp",
      appointments: [
        {
          date: "2023-10-15",
          department: "Dermatology",
          status: "Attended",
          report: "Normal results",
          symptoms: "Skin rash",
          symptomsStartDate: "2023-10-01",
        },
        {
          date: "2023-11-02",
          department: "Cardiology",
          status: "Upcoming",
          report: "Pending",
          symptoms: "Chest pain",
          symptomsStartDate: "2023-10-25",
        },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      bloodType: "A+",
      image: "./image/p3.webp",
      appointments: [
        {
          date: "2023-09-10",
          department: "Orthopedics",
          status: "Attended",
          report: "Recovery ongoing",
          symptoms: "Fractured leg",
          symptomsStartDate: "2023-09-01",
        },
        {
          date: "2023-12-22",
          department: "Neurology",
          status: "Upcoming",
          report: "Pending",
          symptoms: "Headaches and dizziness",
          symptomsStartDate: "2023-12-01",
        },
      ],
    },
    {
      id: 3,
      name: "Michael Johnson",
      bloodType: "O-",
      image: "./image/p2.webp",
      appointments: [
        {
          date: "2023-08-01",
          department: "ENT",
          status: "Attended",
          report: "All clear",
          symptoms: "Hearing issues",
          symptomsStartDate: "2023-07-28",
        },
        {
          date: "2023-11-15",
          department: "General Surgery",
          status: "Upcoming",
          report: "Pending",
          symptoms: "Abdominal pain",
          symptomsStartDate: "2023-11-10",
        },
      ],
    },
    {
      id: 4,
      name: "Emily Davis",
      bloodType: "B-",
      image: "./image/p5.webp",
      appointments: [
        {
          date: "2023-07-20",
          department: "Gastroenterology",
          status: "Attended",
          report: "Diagnosed with GERD",
          symptoms: "Acid reflux",
          symptomsStartDate: "2023-07-10",
        },
        {
          date: "2023-12-05",
          department: "Cardiology",
          status: "Upcoming",
          report: "Pending",
          symptoms: "Shortness of breath",
          symptomsStartDate: "2023-12-01",
        },
      ],
    },
    {
      id: 5,
      name: "Sarah Brown",
      bloodType: "AB+",
      image: "./image/p6.webp",
      appointments: [
        {
          date: "2023-10-10",
          department: "Neurology",
          status: "Attended",
          report: "Nerve issue identified",
          symptoms: "Numbness in hands",
          symptomsStartDate: "2023-09-25",
        },
        {
          date: "2023-12-29",
          department: "Dermatology",
          status: "Upcoming",
          report: "Pending",
          symptoms: "Severe itching",
          symptomsStartDate: "2023-12-10",
        },
      ],
    },
    {
      id: 6,
      name: "David White",
      bloodType: "A-",
      image: "./image/p7.webp",
      appointments: [
        {
          date: "2023-09-11",
          department: "Cardiology",
          status: "Attended",
          report: "Mild arrhythmia",
          symptoms: "Heart palpitations",
          symptomsStartDate: "2023-09-01",
        },
        {
          date: "2023-11-30",
          department: "Orthopedics",
          status: "Upcoming",
          report: "Pending",
          symptoms: "Back pain",
          symptomsStartDate: "2023-11-20",
        },
      ],
    },
    {
      id: 7,
      name: "Olivia Green",
      bloodType: "O+",
      image: "./image/p8.webp",
      appointments: [
        {
          date: "2023-10-01",
          department: "Oncology",
          status: "Attended",
          report: "On watch",
          symptoms: "Chronic fatigue",
          symptomsStartDate: "2023-09-10",
        },
        {
          date: "2023-12-20",
          department: "Dermatology",
          status: "Upcoming",
          report: "Pending",
          symptoms: "Skin irritation",
          symptomsStartDate: "2023-12-15",
        },
      ],
    },
    {
      id: 8,
      name: "Liam Harris",
      bloodType: "B+",
      image: "https://via.placeholder.com/150",
      appointments: [
        {
          date: "2023-08-19",
          department: "Pediatrics",
          status: "Attended",
          report: "Healthy",
          symptoms: "Persistent cough",
          symptomsStartDate: "2023-08-10",
        },
        {
          date: "2023-11-21",
          department: "Cardiology",
          status: "Upcoming",
          report: "Pending",
          symptoms: "Heart palpitations",
          symptomsStartDate: "2023-11-15",
        },
      ],
    },
    {
      id: 9,
      name: "Sophia Turner",
      bloodType: "AB-",
      image: "https://via.placeholder.com/150",
      appointments: [
        {
          date: "2023-09-05",
          department: "Gynecology",
          status: "Attended",
          report: "Clear scan",
          symptoms: "Irregular periods",
          symptomsStartDate: "2023-08-29",
        },
        {
          date: "2023-12-10",
          department: "ENT",
          status: "Upcoming",
          report: "Pending",
          symptoms: "Throat pain",
          symptomsStartDate: "2023-12-05",
        },
      ],
    },
    {
      id: 10,
      name: "James Martin",
      bloodType: "A+",
      image: "https://via.placeholder.com/150",
      appointments: [
        {
          date: "2023-08-10",
          department: "Cardiology",
          status: "Attended",
          report: "Slight heart issue",
          symptoms: "Tiredness and fatigue",
          symptomsStartDate: "2023-08-01",
        },
        {
          date: "2023-11-18",
          department: "Neurology",
          status: "Upcoming",
          report: "Pending",
          symptoms: "Migraine headaches",
          symptomsStartDate: "2023-11-10",
        },
      ],
    },
  ];

  const [selectedPatient, setSelectedPatient] = useState(patients[0]);

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
  };

  const calculateTimeSinceSymptomsStarted = (startDate) => {
    const today = new Date();
    const symptomsStart = new Date(startDate);
    const timeDiff = Math.abs(today - symptomsStart);
    const daysSince = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    return `${daysSince} day(s) ago`;
  };

  const [hoveredSymptoms, setHoveredSymptoms] = useState(null);

  return (
    <div className="dashboard-container">
      {/* Patients List Section */}
      <div className="patients-list">
        <h3>Patients List</h3>
        {patients.map((patient, index) => (
          <div
            key={patient.id}
            className={`patient-card ${
              selectedPatient.id === patient.id ? "active" : ""
            } ${index % 2 === 0 ? "light-bg" : "dark-bg"}`}
            onClick={() => handlePatientClick(patient)}
          >
            <img
              src={patient.image}
              alt={patient.name}
              className="patient-img"
            />
            <div className="patient-details">
              <h4>{patient.name}</h4>
              <p>Blood Type: {patient.bloodType}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Patient Details Section */}
      <div
        className={`patient-info-card ${
          selectedPatient.id % 2 === 0 ? "dark-details" : "light-details"
        }`}
      >
        <img
          src={selectedPatient.image}
          alt="Patient"
          className="patient-img-large"
        />
        <div className="patient-details">
          <h2>{selectedPatient.name}</h2>
          <p>Blood Type: {selectedPatient.bloodType}</p>
        </div>

        {/* Appointments Section */}
        <div className="appointments-section">
          <h3>Upcoming Appointments</h3>
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Department</th>
                <th>Status</th>
                <th>Report</th>
                <th>Symptoms</th>
              </tr>
            </thead>
            <tbody>
              {selectedPatient.appointments.map((appointment, index) => (
                <tr key={index}>
                  <td>{appointment.date}</td>
                  <td>{appointment.department}</td>
                  <td>{appointment.status}</td>
                  <td>{appointment.report}</td>
                  <td
                    className="symptoms-cell"
                    onMouseEnter={() =>
                      setHoveredSymptoms({
                        symptoms: appointment.symptoms,
                        timePeriod: calculateTimeSinceSymptomsStarted(
                          appointment.symptomsStartDate
                        ),
                      })
                    }
                    onMouseLeave={() => setHoveredSymptoms(null)}
                  >
                    {appointment.symptoms}
                    {hoveredSymptoms && (
                      <div className="floating-box">
                        <p>
                          <strong>Symptoms:</strong> {hoveredSymptoms.symptoms}
                        </p>
                        <p>
                          <strong>Since:</strong> {hoveredSymptoms.timePeriod}
                        </p>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
