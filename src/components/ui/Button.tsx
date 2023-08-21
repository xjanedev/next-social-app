import React from "react";

interface Props {
  text: string;
  onClick: () => void;
  size: "small" | "big";
}

export default function Button({ text, onClick, size }: Props) {
  return (
    <div className={`${size === "big" ? "p-[0.3rem]" : "p-[0.25rem]"}`}>
      <button
        className='border-2 border-black  hover:bg-gray-200 rounded-full text-sm p-[0.4rem]'
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
