import UserProfile from "@/components/UserProfile";
import { getUserForProfile } from "@/service/user";
import { notFound } from "next/navigation";
import UserPost from "@/components/UserPost";
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
    <section className='w-full'>
      <UserProfile user={user} />
      <UserPost user={user} />
    </section>
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
