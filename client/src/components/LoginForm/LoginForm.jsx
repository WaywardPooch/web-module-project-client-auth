// Libraries
import React, { useState } from "react";
import axios from "axios";

export const LoginForm = (props) => {
  // States
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  // Event handlers
  const handleChange = (event) => {
    // When a form value changes, update state
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    // Don't refresh the page on form submit
    event.preventDefault();
    axios
      // Send credentials to the API
      .post("http://localhost:5000/api/login", credentials)
      // If the post was successful, store the token in localStorage
      // After storing, send the user to the friends page
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);
        props.history.push("/friends");
      })
      // If the post failed, log the error to the console
      .catch((error) => {
        console.error("[AXIOS ERROR]", error);
      });
  };

  // Form markup
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
      </label>
      <button>Log In</button>
    </form>
  );
};
