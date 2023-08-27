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
    <section className='w-full flex justify-between p-8 border-b border-neutral-200'>
      <div className='flex flex-col'>
        <h1 className='font-bold text-md my-4'>{username}</h1>
        <ul className='my-2 flex gap-4'>
          {info.map(({ title, data }, index) => (
            <li key={index}>
              <span className='px-2 mr-1 text-sm bg-gray-200 rounded-full'>
                {data}
              </span>
              {title}
            </li>
          ))}
        </ul>
        <div className='flex justify-between'>
          <p className='text-md'>{name}</p>
          <FollowBtn user={user} />
        </div>
      </div>
      <Profile image={image} size={"big"} />
    </section>
  );
}
