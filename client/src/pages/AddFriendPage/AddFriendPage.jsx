import React from "react";
import { AddFriendForm } from "./../../components";
import "./AddFriendPage.css";

export const AddFriendPage = () => {
  return (
    <section className="addfriend-page">
      <h1 className="addfriend-page__title">Add a Friend</h1>
      <AddFriendForm />
    </section>
  );
};
