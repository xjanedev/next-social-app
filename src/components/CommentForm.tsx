import { FormEvent, useState } from "react";

interface Props {
  onPostComment: (comment: string) => void;
}

export default function CommentForm({ onPostComment }: Props) {
  const [comment, setComment] = useState("");
  const buttonDisabled = comment.length === 0;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onPostComment(comment);
    setComment("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex items-center px-6 border-t border-neutral-300'
    >
      <input
        className='w-full text-xs border-none outline-none p-4'
        type='text'
        placeholder='Add a comment...'
        required
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <button
        disabled={buttonDisabled}
        className={`font-bold mr-2 text-sm ${
          buttonDisabled ? "text-gray-300" : "text-gray-900"
        }`}
      >
        post
      </button>
    </form>
  );
}
