import UserProfile from "@/components/UserProfile";
import { getUserForProfile } from "@/service/user";
import { notFound } from "next/navigation";
import UserPost from "@/components/UserPost";

interface Props {
  params: { username: string };
}
export default async function UserPage({ params: { username } }: Props) {
  const user = await getUserForProfile(username);

  if (!user) {
    notFound();
  }
  return (
    <section className='w-full'>
      <UserProfile user={user} />
      <UserPost user={user} />
    </section>
  );
}
