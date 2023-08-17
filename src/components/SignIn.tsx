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
        // eslint-disable-next-line react/jsx-key
        <div className='display flex justify-center'>
          <Button
            key={id}
            text={`Sign In with ${name}`}
            onClick={() => signIn(id, { callbackUrl })}
            size={"big"}
          />
        </div>
      ))}
    </>
  );
}
