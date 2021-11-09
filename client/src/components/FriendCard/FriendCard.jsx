import React from "react";

export const FriendCard = (props) => {
  const { name, age, email } = props.friend;

  return (
    <div className="friend-card">
      <h3 className="friend-card__title">{name}</h3>
      <p className="friend-card__text">Age: {age}</p>
      <p className="friend-card__text">Email: {email}</p>
    </div>
  );
};
