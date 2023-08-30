import { AiOutlineHeart } from "react-icons/ai";

interface Props {
  className?: string;
}

export default function PostIcon({ className }: Props) {
  return <AiOutlineHeart className={className || "w-7 h-7"} />;
}
