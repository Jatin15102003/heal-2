import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import the dedicated CSS file

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "testuser@gmail.com" && password === "password") {
      alert("Login Successful!");
      navigate("/Symptoms"); // Redirect to homepage after login
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
