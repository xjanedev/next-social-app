import Profile from "./Profile";

interface Props {
  image: string;
  username: string;
}
export default function PostUserProfile({ image, username }: Props) {
  return (
    <div className='flex items-center p-2'>
      <Profile image={image} size='medium' />
      <span className='text-gray-900 font-bold ml-2'>{username}</span>
    </div>
  );
}
