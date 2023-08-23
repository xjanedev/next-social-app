"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";
import Button from "./ui/Button";

interface Props {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
}

export default function SignIn({ providers, callbackUrl }: Props) {
  return (
    <div className='fixed inset-0 flex justify-center items-center'>
      <div className='text-center'>
        <div className='mb-4'>📓 share your photo diary</div>
        {Object.values(providers).map(({ name, id }) => (
          <div key={id}>
            <Button
              text={`Sign In with ${name}`}
              onClick={() => signIn(id, { callbackUrl })}
              size='big'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
