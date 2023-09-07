import BookmarkIcon from "./ui/icons/BookmarkIcon";
import HeartIcon from "./ui/icons/HeartIcon";
import { parseDate } from "@/util/date";
import HeartFillIcon from "./ui/icons/HeartFillIcon";
import BookmarkFillIcon from "./ui/icons/BookmarkFillIcon";
import { SimplePost } from "@/model/post";
import ToggleBtn from "./ui/ToggleBtn";
import usePosts from "@/hooks/posts";
import useMe from "@/hooks/me";
import CommentForm from "./CommentForm";

interface Props {
  post: SimplePost;
  children?: React.ReactNode;
  onComment: (commnet: Comment) => void;
}
export default function ActionBar({ post, children, onComment }: Props) {
  const { id, likes, createdAt } = post;
  const { user, setBookmark } = useMe();
  const { setLike } = usePosts();

  const liked = user ? likes.includes(user.username) : false;
  const bookmarked = user?.bookmarks.includes(id) ?? false;

  const handleLike = (like: boolean) => {
    user && setLike(post, user.username, like);
  };

  const handleBookmark = (bookmark: boolean) => {
    user && setBookmark(id, bookmark);
  };

  const handleComment = (comment: string) => {
    user && onComment({ comment, username: user.username, image: user.image });
  };

  return (
    <>
      <div className='flex justify-between px-3'>
        <ToggleBtn
          toggled={liked}
          onToggle={handleLike}
          onIcon={<HeartFillIcon />}
          offIcon={<HeartIcon />}
        />
        <ToggleBtn
          toggled={bookmarked}
          onToggle={handleBookmark}
          onIcon={<BookmarkFillIcon />}
          offIcon={<BookmarkIcon />}
        />
      </div>
      <div className='px-4 py-1'>
        <p className='text-xs font-bold mb-3'>{`${likes?.length ?? 0} ${
          likes?.length > 1 ? "likes" : "like"
        }`}</p>
        {children}
        <p className='text-xs text-neutral-500 uppercase my-2'>
          {parseDate(createdAt)}
        </p>
      </div>
      <CommentForm onPostComment={handleComment} />
    </>
  );
}
