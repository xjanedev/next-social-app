"use client";
import { SimplePost } from "@/model/post";
import { ClipLoader } from "react-spinners";
import useSWR from "swr";
import PostListCard from "./PostListCard";
import LoadingSpinner from "./ui/LoadingSpinner";

export default function PostList() {
  const { data: posts, isLoading: loading } = useSWR<SimplePost[]>("/api/post");
  console.log(posts);

  return (
    <div className='flex justify-center items-center'>
      <section className='w-[580px] mt-4'>
        {loading && (
          <div className='text-center mt-32'>
            <LoadingSpinner color='black' />
          </div>
        )}
        {posts && (
          <ul>
            {posts.map(post => (
              <li className='mb-9' key={post.id}>
                <PostListCard post={post} priority={index < 2} />
                {/* // priority로 지정한 이미지들 미리 빠르게 보여줌 */}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
