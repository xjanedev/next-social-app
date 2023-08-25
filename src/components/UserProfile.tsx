import React from "react";
import { ProfileUser } from "@/model/user";
import Profile from "./ui/Profile";
import FollowBtn from "./FollowBtn";

interface Props {
  user: ProfileUser;
}

export default function UserProfile({ user }: Props) {
  const { image, username, name, followers, following, posts } = user;
  const info = [
    { title: "posts", data: posts },
    { title: "followers", data: followers },
    { title: "following", data: following },
  ];

  return (
    <section>
      <Profile image={image} />
      <div>
        <h1>{username}</h1>
        <FollowBtn user={user} />
        <ul>
          {info.map(({ title, data }, index) => (
            <li key={index}>
              <span>{data}</span>
              {title}
            </li>
          ))}
        </ul>
        <p>{name}</p>
      </div>
    </section>
  );
}
