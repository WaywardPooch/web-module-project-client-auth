import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { axiosWithAuth } from "./../../utilities";

export const AddFriendForm = () => {
  // States
  const [newFriend, setNewFriend] = useState({
    id: uuid(),
    name: "",
    age: "",
    email: "",
  });

  // Event handlers
  const handleChange = (event) => {
    setNewFriend({
      ...newFriend,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", newFriend)
      .then(() => {
        console.log("[NEW FRIEND HAS SUCCESSFULLY BEEN ADDED!]");
      })
      .catch((error) => {
        console.error("[FAILURE TO ADD FRIEND]", error);
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label">
        Name
        <input
          className="form__text-field"
          type="text"
          name="name"
          value={newFriend.name}
          onChange={handleChange}
        />
      </label>
      <label className="form__label">
        Age
        <input
          className="form__text-field"
          type="text"
          name="age"
          value={newFriend.age}
          onChange={handleChange}
        />
      </label>
      <label className="form__label">
        Email
        <input
          className="form__text-field"
          type="email"
          name="email"
          value={newFriend.email}
          onChange={handleChange}
        />
      </label>
      <button className="form__button">Add New Friend</button>
    </form>
  );
};
