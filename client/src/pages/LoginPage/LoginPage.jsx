import React from "react";
import { LoginForm } from "./../../components";
import "./LoginPage.css";

export const LoginPage = () => {
  return (
    <section className="login-page">
      <h1 className="login-page__title">Log In</h1>
      <LoginForm />
    </section>
  );
};
