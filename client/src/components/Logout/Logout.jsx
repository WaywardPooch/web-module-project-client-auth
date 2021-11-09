import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { LoginContext } from "./../../contexts";
import { axiosWithAuth } from "./../../utilities";

export const Logout = () => {
  const history = useHistory();
  const { updateLoginStatus } = useContext(LoginContext);

  useEffect(() => {
    axiosWithAuth()
      .post("http://localhost:5000/api/logout")
      .then(() => {
        localStorage.removeItem("token");
        history.push("/login");
        updateLoginStatus();
      })
      .catch((error) => {
        console.error("[LOGOUT ERROR]", error);
      });
  }, []);

  return <p>Logging Out...</p>;
};
