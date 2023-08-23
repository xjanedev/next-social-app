import { FullPost, SimplePost } from "@/model/post";
import Image from "next/image";
import userSWR from "swr";
import ActionBar from "./ActionBar";
import CommentForm from "./CommentForm";
import PostUserProfile from "./ui/PostUserProfile";
import Profile from "./ui/Profile";

interface Props {
  post: SimplePost;
}

export default function PostDetail({ post }: Props) {
  const { id, userImage, username, image, createdAt, likes } = post;
  const { data } = userSWR<FullPost>(`/api/post/${id}`);
  const comments = data?.comments;

  return (
    <section className='flex w-full h-full'>
      <div className='relative basis-3/5'>
        <Image
          className='object-cover rounded-tl-3xl rounded-bl-3xl'
          src={image}
          alt={`photo by ${username}`}
          priority
          fill
          sizes='650px'
        />
      </div>
      <div className='w-full basis-2/5 flex flex-col'>
        <PostUserProfile image={userImage} username={username} />
        <ul className='border-t border-gray-200 h-full overflow-y-auto p-4 mb-1'>
          {comments &&
            comments.map(
              ({ image, username: commentUsername, comment }, index) => (
                <li key={index} className='flex items-center mb-1'>
                  <Profile image={image} size='small' />
                  <div className='ml-2'>
                    <span className='font-bold mr-3'>{commentUsername}</span>
                    <span>{comment}</span>
                  </div>
                </li>
              )
            )}
        </ul>
        <ActionBar likes={likes} username={username} createdAt={createdAt} />
        <CommentForm />
      </div>
    </section>
  );
}
