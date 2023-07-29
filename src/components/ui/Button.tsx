import React from "react";

interface Props {
  text: string;
  onClick: () => void;
  size: "small" | "big";
}

export default function Button({ text, onClick, size = "small" }: Props) {
  return (
    <div className={`${size === "big" ? "p-[0.3rem]" : "p-[0.25rem]"}`}>
      <button
        className='border-2 border-black rounded-full text-sm p-[0.3rem]'
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
