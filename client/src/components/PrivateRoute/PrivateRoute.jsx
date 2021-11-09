import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        // If a token exists in localstorage...
        if (localStorage.getItem("token")) {
          // ...render the desired page...
          return <Component {...props} />;
        } else {
          // ...otherwise, go to the login page.
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};
