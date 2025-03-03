import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"))||[];
    // localStorage.getItem("users")
    const user = users.find(user=>user.email===formData.email &&user.password===formData.password);

    if(user){
        localStorage.setItem("isAuthenticated",true);
        alert("Login Sucessfull");
        navigate("/home");
    }
    else{
        alert("Invalid Email or password")
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Login</button>
        {/* <button type="button">LogOut</button> */}
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
    </div>
  );
}
