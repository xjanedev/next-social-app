import React from "react";

export default function CommentForm() {
  return (
    <form className='flex items-center border-t border-neutral-300'>
      <input
        className='w-full text-sm ml-6 border-none outline-none p-3'
        type='text'
        placeholder='Add a comment...'
      />
      <button className='font-bold text-gray-900 mr-8'>post</button>
    </form>
  );
}
