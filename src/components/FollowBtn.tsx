"use client";

import { ProfileUser } from "@/model/user";
import React from "react";

import ToggleButton from "@/components/ui/ToggleButton";
import useMe from "@/hooks/me";

interface Props {
  user: ProfileUser;
}

export default function FollowButton({ user }: Props) {
  const { username } = user;
  const { user: loggedInUser } = useMe();

  const showButton = loggedInUser && loggedInUser.username !== username;
  const following =
    loggedInUser &&
    loggedInUser.following.find(
      (item: { username: string }) => item.username === username
    );

  const text = following ? "Unfollow" : "Follow";

  return (
    <>
      {showButton && (
        <ToggleButton
          text={text}
          onClick={() => {}}
          black={text === "Unfollow"}
        />
      )}
    </>
  );
}
