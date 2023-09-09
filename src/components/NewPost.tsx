"use client";
import { User } from "@/model/user";
import Image from "next/image";
import { ChangeEvent, DragEvent, useState } from "react";
import PostUserProfile from "./ui/PostUserProfile";
import Button from "./ui/Button";

interface Props {
  user: User;
}
export default function NewPost({ user: { username, image } }: Props) {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File>();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target?.files;
    if (files && files[0]) {
      setFile(files[0]);
      console.log(files[0]);
    }
  };
  const handleDrag = (e: DragEvent) => {
    if (e.type === "dragenter") {
      setDragging(true);
    } else if (e.type === "dragleave") {
      setDragging(false);
    }
  };
  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };
  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer?.files;
    if (files && files[0]) {
      setFile(files[0]);
      console.log(files[0]);
    }
  };

  return (
    <section className='m-auto w-full max-w-xl flex flex-col items-center mt-6'>
      <PostUserProfile username={username} image={image ?? ""} />
      <form className='w-full flex flex-col mt-2'>
        <input
          className='hidden'
          name='input'
          id='input-upload'
          type='file'
          accept='image/*'
          onChange={handleChange}
        />
        <label
          className={`w-full h-96 flex flex-col items-center justify-center rounded-3xl ${
            !file && "border border-gray-200"
          }`}
          htmlFor='input-upload'
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {dragging && (
            <div className='absolute inset-0 z-10 bg-gray-500/20 pointer-events-none' />
          )}
          {!file && (
            <div className='flex flex-col items-center pointer-events-none'>
              <p className='text-sm text-gray-300'>
                Drag and Drop your image here or click
              </p>
            </div>
          )}
          {file && (
            <div className='relative w-full aspect-square'>
              <Image
                className='object-cover rounded-3xl'
                src={URL.createObjectURL(file)}
                alt='local file'
                fill
                sizes='650px'
              />
            </div>
          )}
        </label>
        <textarea
          className='outline-none mt-2 text-sm p-6 border border-gray-200 resize-none rounded-3xl'
          name='text'
          id='input-text'
          required
          rows={8}
          placeholder={"What's on your mind?"}
        />
        <div className='flex justify-end p-2'>
          <Button text='Publish' onClick={() => {}} size={"big"} />
        </div>
      </form>
    </section>
  );
}
