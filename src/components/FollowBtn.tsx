"use client";

import { DetailUser, ProfileUser } from "@/model/user";
import React from "react";
import useSWR from "swr";
import ToggleButton from "@/components/ui/ToggleButton";

interface Props {
  user: ProfileUser;
}

export default function FollowBtn({ user }: Props) {
  const { username } = user;
  const { data: loggedInUser } = useSWR<DetailUser>("/api/me");
  const showButton = loggedInUser && loggedInUser.username !== user.username;
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
