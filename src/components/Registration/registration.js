import React, { Component } from "react";
import "./Registration.css";

import Cookies from "js-cookie";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      password: "",
      gender: "Male",
      location: "",
      responseMessage: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
  

    const { username, name, password, gender, location } = this.state;

    try {
      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, name, password, gender, location }),
      });

      const data = await res.text();
      this.setState({ responseMessage: data });
      console.log(data);
        if (res.status === 201) {
        alert("Signup successful! Redirecting to login...");
        this.props.history.push("/login");
    }
    } catch (err) {
      console.error(err);
      this.setState({ responseMessage: "Error registering user" });
    }
  };

  render() {
    const { username, name, password, gender, location, responseMessage } = this.state;
    const jwtToken =Cookies.get('jwt_token')
     if(jwtToken!==undefined){
          return <Redirect to="/Home"/>
        }
    return (
      <div className="register-page">
        <form id="userForm" onSubmit={this.handleSubmit}>
          <h2>Register</h2>

          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={this.handleChange}
            required
          />

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={this.handleChange}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={this.handleChange}
            required
          />

          <label htmlFor="gender">Gender:</label>
          <select id="gender" value={gender} onChange={this.handleChange} required>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={this.handleChange}
          />

          <button type="submit">Register</button>
          <p id="response">{responseMessage}</p>
          <p>Already You have an account:-👇</p><a href="/login" >Signin</a>
        </form>
      </div>
    );
  }
}

export default Register;
