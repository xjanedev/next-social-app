import { SimplePost } from "@/model/post";
import useSWR, { mutate } from "swr";

export default function usePosts() {
  const { data: posts, isLoading, error } = useSWR<SimplePost[]>("/api/post");
  const setLike = (post: SimplePost, username: string, like: boolean) => {
    fetch("/api/likes", {
      method: "PUT",
      body: JSON.stringify({ id: post.id, like }),
    }).then(() => mutate("/api/post"));
  };
  return { posts, isLoading, error, setLike };
}
