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
    <section className='w-full flex flex-col md:flex-row items-center justify-center py-8 border-b border-neutral-200'>
      <Profile image={image} />
      <div className='md:ml-10 basis-1/3'>
        <div className='flex flex-col items-center md:flex-row'>
          <h1 className='text-xl md:mr-8 my-2 md:mb-0'>{username}</h1>
          <FollowBtn user={user} />
        </div>
        <ul className='my-2 flex gap-4'>
          {info.map(({ title, data }, index) => (
            <li key={index}>
              <span className='mr-1'>{data}</span>
              {title}
            </li>
          ))}
        </ul>
        <p className='text-md font-bold text-center md:text-start'>{name}</p>
      </div>
    </section>
  );
}
