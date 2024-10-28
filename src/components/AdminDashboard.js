import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import "./Admin.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function AdminDashboard() {
  const [bedsData, setBedsData] = useState({
    icuBeds: 10,
    oxygenBeds: 20,
    normalBeds: 50,
  });

  const [stats, setStats] = useState({
    totalPatients: 1500,
    activeDoctors: 100,
    employees: 500,
    products: 300,
    monthlyEarnings: [5000, 7000, 8000, 6500, 9000, 12000], // Monthly earnings data
    monthlyPatients: [200, 250, 300, 280, 350, 400], // Monthly patients data
  });

  const [activeCard, setActiveCard] = useState(null); // Track which card is clicked

  useEffect(() => {
    const fetchBedData = () => {
      setBedsData({
        icuBeds: Math.floor(Math.random() * 10),
        oxygenBeds: Math.floor(Math.random() * 20),
        normalBeds: Math.floor(Math.random() * 50),
      });
    };

    const intervalId = setInterval(fetchBedData, 5000); // Update every 5 seconds
    return () => clearInterval(intervalId);
  }, []);

  const chartData = {
    labels: ["Patients", "Doctors", "Employees", "Products"],
    datasets: [
      {
        label: "Statistics Overview",
        data: [
          stats.totalPatients,
          stats.activeDoctors,
          stats.employees,
          stats.products,
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
      },
    ],
  };

  // Data for the selected chart based on the active card
  const getSelectedChartData = () => {
    if (activeCard === "patients") {
      return {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Monthly Patients",
            data: stats.monthlyPatients,
            borderColor: "rgba(54, 162, 235, 1)",
            fill: false,
          },
        ],
      };
    } else if (activeCard === "doctors") {
      return {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Monthly Doctors",
            data: stats.monthlyEarnings, // You can change this to monthly doctors data if available
            borderColor: "rgba(255, 206, 86, 1)",
            fill: false,
          },
        ],
      };
    } else if (activeCard === "earnings") {
      return {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Monthly Earnings",
            data: stats.monthlyEarnings,
            borderColor: "rgba(75, 192, 192, 1)",
            fill: false,
          },
        ],
      };
    }
    return null; // Return null if no card is active
  };

  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Beds Occupancy Progress",
        data: [10, 20, 30, 40, 50, 60],
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
    ],
  };

  return (
    <div className="admin-dashboard">
      <nav className="sidebar">
        <div className="logo">CureSync</div>
        <ul>
          <li
            onClick={() => setActiveCard(null)}
            className={activeCard === null ? "active" : ""}
          >
            Overview
          </li>
          <li
            onClick={() => setActiveCard("patients")}
            className={activeCard === "patients" ? "active" : ""}
          >
            Patients
          </li>
          <li
            onClick={() => setActiveCard("appointments")}
            className={activeCard === "appointments" ? "active" : ""}
          >
            Appointments
          </li>
          <li
            onClick={() => setActiveCard("doctors")}
            className={activeCard === "doctors" ? "active" : ""}
          >
            Doctors
          </li>
          <li
            onClick={() => setActiveCard("departments")}
            className={activeCard === "departments" ? "active" : ""}
          >
            Departments
          </li>
          <li
            onClick={() => setActiveCard("employees")}
            className={activeCard === "employees" ? "active" : ""}
          >
            Employees
          </li>
          <li
            onClick={() => setActiveCard("products")}
            className={activeCard === "products" ? "active" : ""}
          >
            Products & Stock
          </li>
          <li
            onClick={() => setActiveCard("earnings")}
            className={activeCard === "earnings" ? "active" : ""}
          >
            Earnings
          </li>
          <li
            onClick={() => setActiveCard("settings")}
            className={activeCard === "settings" ? "active" : ""}
          >
            Settings
          </li>
          <li
            onClick={() => setActiveCard("help")}
            className={activeCard === "help" ? "active" : ""}
          >
            Help & Support
          </li>
        </ul>
      </nav>

      <div className="main-content">
        <header className="topbar">
          <h2>Admin Dashboard</h2>
          <div className="profile">
            <img src="/path/to/profile-pic.jpg" alt="Admin" />
            <p>Albert Flores</p>
          </div>
        </header>

        <section className="dashboard-cards">
          <div className="card" onClick={() => setActiveCard("patients")}>
            <h3>Total Patients</h3>
            <p>{stats.totalPatients} Patients</p>
          </div>
          <div className="card" onClick={() => setActiveCard("doctors")}>
            <h3>Active Doctors</h3>
            <p>{stats.activeDoctors} Doctors</p>
          </div>
          <div className="card" onClick={() => setActiveCard("employees")}>
            <h3>Total Employees</h3>
            <p>{stats.employees} Employees</p>
          </div>
          <div className="card" onClick={() => setActiveCard("products")}>
            <h3>Products Available</h3>
            <p>{stats.products} Products</p>
          </div>
          <div className="card">
            <h3>ICU Beds Available</h3>
            <p>{bedsData.icuBeds}</p>
          </div>
          <div className="card">
            <h3>Oxygen Beds Available</h3>
            <p>{bedsData.oxygenBeds}</p>
          </div>
          <div className="card">
            <h3>Normal Beds Available</h3>
            <p>{bedsData.normalBeds}</p>
          </div>
        </section>

        {/* Charts Section */}
        <section className="charts-section">
          <div className="chart-container">
            <h3>
              {activeCard === "patients"
                ? "Monthly Patients"
                : activeCard === "doctors"
                ? "Monthly Doctors"
                : activeCard === "earnings"
                ? "Monthly Earnings"
                : "Overall Statistics"}
            </h3>
            {activeCard === null ? (
              <Bar data={chartData} />
            ) : (
              <Line data={getSelectedChartData()} />
            )}
          </div>

          <div className="chart-container">
            <h3>Bed Occupancy Progress</h3>
            <Line data={lineData} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default AdminDashboard;
