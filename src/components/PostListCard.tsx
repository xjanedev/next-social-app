import React from "react";
import Profile from "@/components/ui/Profile";
import Image from "next/image";
import { SimplePost } from "@/model/post";
import HeartIcon from "./ui/icons/HeartIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import { parseDate } from "@/util/date";
import CommentForm from "./CommentForm";
import ActionBar from "./ActionBar";

interface Props {
  post: SimplePost;
}

export default function PostListCard({ post }: Props) {
  const { userImage, username, image, createdAt, likes, text } = post;
  return (
    <article className='rounded-3xl border border-gray-20'>
      <div className='flex items-center p-2'>
        <Profile image={userImage} size='medium' />
        <span className='text-gray-900 font-bold ml-2'>{username}</span>
      </div>
      <Image
        className='w-[580px] object-cover aspect-square'
        src={image}
        alt={`photo by ${username}`}
        width={500} // 외부이미지 크기지정
        height={500}
      />
      <ActionBar
        likes={likes}
        username={username}
        text={text}
        createdAt={createdAt}
      />
      <CommentForm />
    </article>
  );
}
