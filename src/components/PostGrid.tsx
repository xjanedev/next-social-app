import React from "react";
import { CgSpinner } from "react-icons/cg";
import useSWR from "swr";
import PostGridCard from "./PostGridCard";
import { SimplePost } from "@/model/post";

interface Props {
  username: string;
  query: string;
}

export default function PostGrid({ username, query }: Props) {
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR(`/api/users/${username}/${query}`);

  return (
    <div>
      {isLoading && <CgSpinner />}
      <ul className='grid grid-cols-3 gap-4 py-4 px-8'>
        {posts &&
          posts.map((post: SimplePost, index: number) => (
            <li key={post.id}>
              <PostGridCard post={post} priority={index < 6} />
            </li>
          ))}
      </ul>
    </div>
  );
}
