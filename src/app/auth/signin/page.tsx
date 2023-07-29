import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import SignIn from "@/components/SignIn";
import { getProviders } from "next-auth/react";

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

// server side 서버상에서 동작하는 컴포넌트
