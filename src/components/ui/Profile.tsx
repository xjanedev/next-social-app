// /* eslint-disable @next/next/no-img-element */
// import React from "react";
// import Image from "next/image";

// interface Props {
//   image?: string | null;
// }

// export default function Profile({ image }: Props) {
//   return (
//     <div className='w-9 h-9'>
//       <img
//         className='rounded-full p-[0.1rem]'
//         alt='user profile'
//         src={image ?? undefined}
//         referrerPolicy='no-referrer'
//       />
//     </div>
//   );
// }

type ProfileSize = "small" | "medium" | "large"; // 리터럴 유니온 타입지정

interface Props {
  image?: string | null;
  size?: ProfileSize;
  highlight?: boolean;
}
export default function Profile({
  image,
  size = "medium",
  highlight = false,
}: Props) {
  return (
    <div className={getContainerStyle(size)}>
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className={`bg-white object-cover rounded-full ${getImageSizeStyle(
          size
        )}`}
        alt='user profile'
        src={image ?? undefined}
        referrerPolicy='no-referrer'
      />
    </div>
  );
}

// sizestyle 함수화

function getContainerStyle(size: ProfileSize): string {
  const baseStyle = "rounded-full flex justify-center items-center";
  const sizeStyle = getContainerSize(size);
  return `${baseStyle} ${sizeStyle}`;
}

function getContainerSize(size: ProfileSize): string {
  switch (size) {
    case "small":
      return "w-9 h-9";
    case "medium":
      return "w-11 h-11";
    case "large":
      return "w-[72px] h-[72px]";
  }
}

function getImageSizeStyle(size: ProfileSize): string {
  switch (size) {
    case "small":
      return "w=[34px] h-[34px] p-[0.1rem]";
    case "medium":
      return "w-[42px] h-[42px] p-[0.1rem]";
    case "large":
      return "w-18 h-18 p-[0.2rem]";
  }
}
