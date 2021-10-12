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
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={newFriend.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Age
        <input
          type="text"
          name="age"
          value={newFriend.age}
          onChange={handleChange}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={newFriend.email}
          onChange={handleChange}
        />
      </label>
      <button>Add New Friend</button>
    </form>
  );
};
