"use client";

import { ProfileUser } from "@/model/user";
import { useState } from "react";
import useSWR from "swr";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import HeartIcon from "./ui/icons/HeartIcon";
import PostIcon from "./ui/icons/PostIcon";
import PostGrid from "./PostGrid";

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
      <ul>
        {tabs.map(({ type, icon }) => (
          <li key={type} onClick={() => setQuery(type)}>
            <button>{icon}</button>
            <span>{type}</span>
          </li>
        ))}
      </ul>
      <PostGrid username={username} query={query} />
    </section>
  );
}
