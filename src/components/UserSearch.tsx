"use client";

import { SearchUser } from "@/model/user";
import { FormEvent, useState } from "react";
import useSWR from "swr";
import { CgSpinner } from "react-icons/cg";
import UserSearchCard from "@/components/UserSearchCard";
import useDebounce from "@/hooks/debounce";

export default function UserSearch() {
  const [keyword, setKeyword] = useState("");
  const debouncedKeyword = useDebounce(keyword);

  const {
    data: users,
    isLoading,
    error,
  } = useSWR<SearchUser[]>(`/api/search/${debouncedKeyword}`);
  // debounced 된 keyword로 처리해준다.

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className='w-[580px] flex flex-col pt-9 m-auto'>
      <form className='w-full mb-4' onSubmit={onSubmit}>
        <input
          className='w-full rounded-xl text-sm p-3 outline-none border border-gray-800'
          type='text'
          autoFocus
          placeholder='search for a username or name'
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
      </form>
      {keyword && (
        <>
          {error && <p className='m-auto'>에러가 발생하였습니다!</p>}
          {isLoading && <CgSpinner className='m-auto' />}
          {!isLoading && !error && users?.length === 0 && (
            <p className='m-auto'>찾는 사용자가 없습니다!</p>
          )}
          <ul className='w-full'>
            {users &&
              users.map(user => (
                <li key={user.username}>
                  <UserSearchCard user={user} />
                </li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
