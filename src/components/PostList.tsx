"use client";
import { SimplePost } from "@/model/post";
import { ClipLoader } from "react-spinners";
import useSWR from "swr";
import PostListCard from "./PostListCard";

export default function PostList() {
  const { data: posts, isLoading: loading } = useSWR<SimplePost[]>("/api/post");
  console.log(posts);

  return (
    <div className='flex justify-center items-center'>
      <section className='w-[580px] mt-4'>
        {loading && (
          <div className='text-center mt-32'>
            <ClipLoader color='black' />
          </div>
        )}
        {posts && (
          <ul>
            {posts.map(post => (
              <li className='mb-9' key={post.id}>
                <PostListCard post={post} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
