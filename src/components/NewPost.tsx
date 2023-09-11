"use client";

import { User } from "@/model/user";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, DragEvent, FormEvent, useRef, useState } from "react";
import PostUserProfile from "./ui/PostUserProfile";
import Button from "./ui/Button";
import { CgSpinner } from "react-icons/cg";

interface Props {
  user: User;
}
export default function NewPost({ user: { username, image } }: Props) {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const textRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target?.files;
    if (files && files[0]) {
      setFile(files[0]);
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
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("text", textRef.current?.value ?? "");

    fetch("/api/post/", { method: "POST", body: formData }) //
      .then(res => {
        if (!res.ok) {
          setError(`${res.status} ${res.statusText}`);
          return;
        }
        router.push("/");
      })
      .catch(err => setError(err.toString()))
      .finally(() => setLoading(false));
  };

  return (
    <section className='m-auto w-full max-w-xl flex flex-col items-center mt-6'>
      {loading && (
        <div className='absolute inset-0 z-20 flex justify-center text-center pt-[30%] bg-gray-500/20'>
          <CgSpinner />
        </div>
      )}
      {error && (
        <p className='w-full bg-red-100 text-red-600 text-center p-4 mb-4'>
          {error}
        </p>
      )}
      <PostUserProfile username={username} image={image ?? ""} />
      <form className='w-full flex flex-col mt-2' onSubmit={handleSubmit}>
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
          ref={textRef} // 리렌더링 방지 -> 깜빡임 현상 방지
        />
        <div className='flex justify-end p-2'>
          <Button text='Publish' onClick={() => {}} size={"big"} />
        </div>
      </form>
    </section>
  );
}
