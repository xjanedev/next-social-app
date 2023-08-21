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

type Props = {
  image?: string | null;
  size?: "small" | "normal";
  highlight?: boolean;
};

export default function Avatar({
  image,
  size = "small",
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

function getContainerStyle(size: string): string {
  const baseStyle = "rounded-full flex justify-center items-center";
  const sizeStyle = size === "small" ? "w-11 h-11" : "w-[72px] h-[72px]";
  return `${baseStyle} ${sizeStyle}`;
}

function getImageSizeStyle(size: string): string {
  return size === "small"
    ? "w-[36px] h-[36px] p-[0.1rem]"
    : "w-18 h-18 p-[0.2rem] ";
}
