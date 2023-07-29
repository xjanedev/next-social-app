/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

interface Props {
  image?: string | null;
}

export default function Profile({ image }: Props) {
  return (
    <div className='w-9 h-9'>
      <img
        className='rounded-full p-[0.1rem]'
        alt='user profile'
        src={image ?? undefined}
        referrerPolicy='no-referrer'
      />
    </div>
  );
}
