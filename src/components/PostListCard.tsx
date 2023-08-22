import React from "react";
import Profile from "@/components/ui/Profile";
import Image from "next/image";
import { SimplePost } from "@/model/post";
import { BsHeart } from "react-icons/bs";
import HeartIcon from "./ui/icons/HeartIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import { parseDate } from "@/util/date";
import { create } from "domain";

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
      <div className='flex justify-between mt-2 px-4'>
        <HeartIcon />
        <BookmarkIcon />
      </div>
      <div className='px-4 py-1'>
        <p className='text-sm font-bold mb-2'>{`${likes?.length ?? 0} ${
          likes?.length > 1 ? "likes" : "like"
        }`}</p>
        <p>
          <span className='font-bold mr-3'>{username}</span>
          {text}
        </p>
        <p className='text-xs text-neutral-500 uppercase my-2'>
          {parseDate(createdAt)}
        </p>
        <form className='flex items-center border-t border-neutral-300'>
          <input
            className='w-full ml-2 border-none outline-none p-3'
            type='text'
            placeholder='Add a comment...'
          />
          <button className='font-bold text-gray-900 ml-4'>post</button>
        </form>
      </div>
    </article>
  );
}
