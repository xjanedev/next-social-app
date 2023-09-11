"use client";
import { useState } from "react";
import Image from "next/image";
import { SimplePost, Comment } from "@/model/post";
import ActionBar from "./ActionBar";
import ModalPortal from "./ui/ModalPortal";
import PostModal from "./PostModal";
import PostDetail from "./PostDetail";
import PostUserProfile from "./ui/PostUserProfile";
import usePosts from "@/hooks/posts";

interface Props {
  post: SimplePost;
  priority?: boolean;
}

export default function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, text, comments } = post;
  const [openModal, setOpenModal] = useState(false);
  const { postComment } = usePosts();
  const handlePostComment = (comment: Comment) => {
    postComment(post, comment);
  };

  return (
    <article className='rounded-3xl border border-gray-20'>
      <PostUserProfile image={userImage} username={username} />
      <Image
        className='w-[580px] h-[500px] object-cover aspect-square pb-2'
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
        priority={priority}
        onClick={() => setOpenModal(true)}
      />
      <ActionBar post={post} onComment={handlePostComment}>
        <p>
          <span className='font-bold mr-1'>{username}</span>
          {text}
        </p>
        {comments > 1 && (
          <button
            className='font-bold my-2 text-gray-900'
            onClick={() => setOpenModal(true)}
          >{`View all ${comments} comments`}</button>
        )}
      </ActionBar>
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </article>
  );
}
