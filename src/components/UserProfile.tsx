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
    <section className='w-full flex flex-col md:flex-row md:items-center justify-between p-8 border-b border-neutral-200'>
      <Profile image={image} size={"big"} />
      <div className='md:ml-10 basis-1/3'>
        <h1 className='font-bold text-md my-4'>{username}</h1>
        <ul className='my-2 flex gap-4'>
          {info.map(({ title, data }, index) => (
            <li className='text-sm' key={index}>
              <span className='px-2 mr-1 bg-gray-100 rounded-full'>{data}</span>
              {title}
            </li>
          ))}
        </ul>
        <div className='flex justify-between'>
          <p className='text-sm py-2'>{name}</p>
          <FollowBtn user={user} />
        </div>
      </div>
    </section>
  );
}
