import Profile from "./Profile";
import { FaRegTrashCan } from "react-icons/fa6";

interface Props {
  image: string;
  username: string;
}

export default function PostUserProfile({ image, username }: Props) {
  return (
    <div className='flex items-center p-3'>
      <Profile image={image} size='medium' />
      <span className='text-gray-900 font-bold text-sm ml-2'>{username}</span>
      {/* <FaRegTrashCan /> */}
    </div>
  );
}
