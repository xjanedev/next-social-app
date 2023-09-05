"use client";

import useMe from "@/hooks/me";
import { ProfileUser } from "@/model/user";
import ToggleButton from "./ui/ToggleButton";

interface Props {
  user: ProfileUser;
}
export default function FollowButton({ user }: Props) {
  const { username } = user;
  const { user: loggedInUser, toggleFollow } = useMe();

  const showButton = loggedInUser && loggedInUser.username !== username;
  const following =
    loggedInUser &&
    loggedInUser.following.find(item => item.username === username);

  const text = following ? "Unfollow" : "Follow";

  const handleFollow = () => {
    toggleFollow(user.id, !following);
  };

  return (
    <>
      {showButton && (
        <ToggleButton
          text={text}
          onClick={handleFollow}
          black={text === "Unfollow"}
        />
      )}
    </>
  );
}

//팔로우 버튼과 서버 연결 안됨 이슈
