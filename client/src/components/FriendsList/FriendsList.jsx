import axios from "axios";
import React, { useEffect, useState } from "react";
import { FriendCard } from "./../../components";

export const FriendsList = () => {
  const [friends, setFriends] = useState(null);

  const getFriends = () => {
    axios
      .get("http://localhost:5000/api/friends")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("[AXIOS ERROR]", error);
      });
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <>
      {friends ? (
        friends.map((friend) => {
          return <FriendCard />;
        })
      ) : (
        <p>Loading Friends...</p>
      )}
    </>
  );
};
