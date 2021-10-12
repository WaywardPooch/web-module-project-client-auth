import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { axiosWithAuth } from "../../utilities";

export const Logout = () => {
  const history = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .post("http://localhost:5000/api/logout")
      .then(() => {
        localStorage.removeItem("token");
        history.push("/login");
      })
      .catch((error) => {
        console.error("[LOGOUT ERROR]", error);
      });
  }, []);

  return <p>Logging Out...</p>;
};
