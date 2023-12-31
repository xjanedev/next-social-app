"use client";

import PostListCard from "./PostListCard";
import LoadingSpinner from "./ui/LoadingSpinner";
import usePosts from "@/hooks/posts";

export default function PostList() {
  const { posts, isLoading: loading } = usePosts();
  return (
    <div className='flex justify-center items-center'>
      <section className='w-[580px] pt-9'>
        {loading ? (
          <div className='text-center mt-32'>
            <LoadingSpinner color='black' />
          </div>
        ) : (
          (!posts || posts.length === 0) && (
            <p className='text-center mt-48'>
              {"you don't have any post yet!"}
            </p>
          )
        )}
        {posts && (
          <ul>
            {posts.map((post, index) => (
              <li className='mb-9' key={post.id}>
                <PostListCard post={post} priority={index < 2} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
