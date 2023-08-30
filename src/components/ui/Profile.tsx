type ProfileSize = "small" | "medium" | "big";

interface Props {
  image?: string | null;
  size?: ProfileSize;
}
export default function Profile({ image, size = "medium" }: Props) {
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
      return "w-8 h-8";
    case "medium":
      return "w-10 h-10";
    case "big":
      return "w-20 h-20";
  }
}

function getImageSizeStyle(size: ProfileSize): string {
  switch (size) {
    case "small":
      return "w=[26px] h-[26px] p-[0.1rem]";
    case "medium":
      return "w-[30px] h-[30px]";
    case "big":
      return "w=[48px] h-[80px] p-[0.3rem]";
  }
}
