import React from "react";

export const FriendCard = (props) => {
  const { name, age, email } = props.friend;

  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};
