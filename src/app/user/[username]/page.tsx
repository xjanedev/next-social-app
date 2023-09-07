import UserProfile from "@/components/UserProfile";
import { getUserForProfile } from "@/service/user";
import { notFound } from "next/navigation";
import UserPosts from "@/components/UserPosts";
import { Metadata } from "next";
import { cache } from "react";

interface Props {
  params: { username: string };
}

const getUser = cache(async (username: string) => getUserForProfile(username));
export default async function UserPage({ params: { username } }: Props) {
  const user = await getUser(username);

  if (!user) {
    notFound();
  }
  return (
    <div className='w-full flex justify-center'>
      <section className='w-[580px]'>
        <UserProfile user={user} />
        <UserPosts user={user} />
      </section>
    </div>
  );
}

export async function generateMetadata({
  params: { username },
}: Props): Promise<Metadata> {
  const user = await getUser(username);
  return {
    title: `${user?.name} (@${user?.username})`,
    description: `${user?.name}'s posts`,
  };
}
