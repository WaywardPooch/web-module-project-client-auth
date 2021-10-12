import React, { useEffect, useState } from "react";
import { FriendCard } from "./../../components";
import { axiosWithAuth } from "./../../utilities";

export const FriendsList = () => {
  const [friends, setFriends] = useState(null);

  const updateFriends = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((response) => {
        setFriends(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("[UPDATE FRIENDS]", error);
      });
  };

  useEffect(() => {
    updateFriends();
  }, []);

  return (
    <>
      {friends ? (
        friends.map((friend) => {
          return <FriendCard friend={friend} />;
        })
      ) : (
        <p>Loading Friends...</p>
      )}
    </>
  );
};
