// Libraries
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "./../../contexts";

export const LoginForm = (props) => {
  // States
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();
  const { updateLoginStatus } = useContext(LoginContext);

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
        localStorage.setItem("token", response.data.payload);
        history.push("/friends");
        updateLoginStatus();
      })
      // If the post failed, log the error to the console
      .catch((error) => {
        console.error("[AXIOS ERROR]", error);
      });
  };

  // Form markup
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label">
        Username
        <input
          className="form__text-field"
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
      </label>
      <label className="form__label">
        Password
        <input
          className="form__text-field"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
      </label>
      <button className="form__button">Log In</button>
    </form>
  );
};
