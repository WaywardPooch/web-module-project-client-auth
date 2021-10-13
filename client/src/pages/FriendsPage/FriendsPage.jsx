import React from "react";
import { FriendsList } from "./../../components";
import "./FriendsPage.css";

export const FriendsPage = () => {
  return (
    <section className="friends-page">
      <h1 className="friends-page__title">Friends List</h1>
      <FriendsList />
    </section>
  );
};
