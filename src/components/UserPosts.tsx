"use client";

import { ProfileUser } from "@/model/user";
import { useState } from "react";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import HeartIcon from "./ui/icons/HeartIcon";
import PostIcon from "./ui/icons/PostIcon";
import PostGrid from "./PostGrid";
import { CacheKeysContext } from "@/context/CacheKeyContext";

interface Props {
  user: ProfileUser;
}
const tabs = [
  { type: "posts", icon: <PostIcon /> },
  { type: "liked", icon: <HeartIcon className='w-3 h-3' /> },
  { type: "saved", icon: <BookmarkIcon className='w-3 h-3' /> },
];
export default function UserPost({ user: { username } }: Props) {
  const [query, setQuery] = useState(tabs[0].type);

  return (
    <section>
      <ul className='flex justify-center uppercase'>
        {tabs.map(({ type, icon }) => (
          <li
            className={`mx-10 p-3 cursor-pointer border-black ${
              type === query && "font-bold border-t"
            }`}
            key={type}
            onClick={() => setQuery(type)}
          >
            <button className='scale-150 md:scale-100 mr-3'>{icon}</button>
            <span className='hidden md:inline text-sm'>{type}</span>
          </li>
        ))}
      </ul>
      <CacheKeysContext.Provider
        value={{ postsKey: `/api/users/${username}/${query}` }}
      >
        <PostGrid />
      </CacheKeysContext.Provider>
    </section>
  );
}
