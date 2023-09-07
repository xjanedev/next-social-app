import React from "react";
import { CgSpinner } from "react-icons/cg";
import useSWR from "swr";
import PostGridCard from "./PostGridCard";
import { SimplePost } from "@/model/post";
import usePosts from "@/hooks/posts";

export default function PostGrid() {
  const { posts, isLoading } = usePosts();
  // user 페이지에서 데이터가 정적으로 그대로 남아있는 이슈
  // 경로가 다르다. -> 다른 곳은 /api/post 에서 받아오지만
  // post 라는 데이터는 동일하지만 키가 달라서 user 페이지는 정적으로 남아있다.

  return (
    <div>
      {isLoading && <CgSpinner className='w-full mt-16 text-center' />}
      <ul className='grid grid-cols-3 gap-4 py-4 px-2'>
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
