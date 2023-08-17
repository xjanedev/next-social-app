"use client";

import React from "react";
import useSWR from "swr";
import { DetailUser } from "@/model/user";
import { ClipLoader } from "react-spinners";
import Link from "next/link";
import Profile from "./ui/Profile";

export default function FollowingBar() {
  const { data, isLoading: loading, error } = useSWR<DetailUser>("/api/me");
  const users = data?.following;

  return (
    <section className='w-full flex justify-center items-center p-4 border-b mb-4 min-h-[90px]'>
      {loading ? (
        <ClipLoader size={24} color='black' />
      ) : (
        (!users || users.length === 0) && <p>{"find your friends!"}</p>
      )}
      {users && users.length > 0 && (
        <ul className='w-full flex gap-2'>
          {users.map(({ image, username }) => (
            <li key={username}>
              <Link
                className='flex flex-col items-center w-20'
                href={`/user/${username}`}
              >
                <Profile image={image} />
                <p className='w-full text-sm text-ellipsis overflow-hidden'>
                  {/* p태그 너비지정 */}
                  {username}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
