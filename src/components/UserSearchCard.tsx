import { SearchUser } from "@/model/user";
import Link from "next/link";
import Profile from "./ui/Profile";

interface Props {
  user: SearchUser;
}
export default function UserCard({ user: { name, username, image } }: Props) {
  return (
    <Link
      href={`/user/${username}`}
      className='flex items-center w-full rounded-3xl border border-neutral-300 mb-2 p-4 bg-white hover:bg-neutral-50 '
    >
      <Profile image={image} />
      <div className='text-neutral-400 flex ml-4'>
        <p className='text-black font-bold mr-4'>{username}</p>
        <p>{name}</p>
      </div>
    </Link>
  );
}
