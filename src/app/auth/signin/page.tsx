import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import SignIn from "@/components/SignIn";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "signin",
  description: "signup or login with google account",
};

interface Props {
  searchParams: {
    callbackUrl: string;
  };
}

export default async function SignPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/"); // session 있다면 홈경로로 이동
  }

  const providers = (await getProviders()) ?? {};

  return <SignIn providers={providers} callbackUrl={callbackUrl ?? "/"} />;
}
