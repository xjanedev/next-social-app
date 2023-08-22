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
  priority?: boolean;
}

export default function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, createdAt, likes, text } = post;
  return (
    <article className='rounded-3xl border border-gray-20'>
      <div className='flex items-center p-3 mb-[-14px]'>
        <Profile image={userImage} size='medium' />
        <span className='text-gray-900 font-bold ml-2'>{username}</span>
      </div>
      <Image
        className='w-[580px] h-[500px] rounded-3xl object-cover aspect-square p-3'
        src={image}
        alt={`photo by ${username}`}
        width={500} // 외부이미지 크기지정
        height={500}
        property={priority} // 중요한 이미지 먼저 로딩하게 해준다.
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
