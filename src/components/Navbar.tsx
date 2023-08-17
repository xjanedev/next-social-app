"use client";

import Link from "next/link";
import {
  HomeIcon,
  HomeFillIcon,
  SearchIcon,
  SearchFillIcon,
  NewIcon,
  NewFillIcon,
} from "./ui/icons";
import { usePathname } from "next/navigation";
import Button from "./ui/Button";
import { useSession, signIn, signOut } from "next-auth/react";
import Profile from "./ui/Profile";

const menu = [
  {
    href: "/",
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: "/search",
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: "/newpost",
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
];

export default function Navbar() {
  const { data: session } = useSession(); // next-auth hook
  const path = usePathname();
  const user = session?.user;

  return (
    <div className='flex justify-between items-center px-8'>
      <Link href='/'>
        <h1 className='text-2xl font-bold'>thread</h1>
      </Link>
      <nav>
        <ul className='flex gap-4 items-center p-4'>
          {menu.map(({ href, icon, clickedIcon }) => (
            <li key={href}>
              <Link href={href}>{href === path ? clickedIcon : icon}</Link>
              {/* 경로가 아니면 그냥아이콘 보여줌 */}
            </li>
          ))}
          {user && (
            <li>
              <Link href={`/user/${user.username}`}>
                <Profile image={user.image} />
              </Link>
            </li>
          )}
          <li>
            {session ? (
              <Button text='Sign out' onClick={() => signOut()} size={"big"} />
            ) : (
              <Button text='Sign In' onClick={() => signIn()} size={"big"} />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
