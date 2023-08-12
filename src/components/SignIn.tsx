"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";
import Button from "./ui/Button";

interface Props {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
}

export default function SignIn({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <Button
          key={id}
          text={`Sign In with ${name}`}
          onClick={() => signIn(id, { callbackUrl })}
          size={"big"}
        />
      ))}
    </>
  );
}

// record type, map 비슷한 종류
// ui 그려주는 컴포넌트 -> 클라이언트 컴포넌트
