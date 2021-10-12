import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        // If a token exists in localstorage...
        localStorage.getItem("token") ? (
          // ...render the desired page...
          <Component {...props} />
        ) : (
          // ...otherwise, go to the login page.
          <Redirect to="/login" />
        );
      }}
    />
  );
};
