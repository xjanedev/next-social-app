type ProfileSize = "small" | "medium" | "large";

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
      return "w-11 h-11";
    case "large":
      return "w-[72px] h-[72px]";
  }
}

function getImageSizeStyle(size: ProfileSize): string {
  switch (size) {
    case "small":
      return "w=[32px] h-[32px] p-[0.1rem]";
    case "medium":
      return "w-[40px] h-[40px] p-[0.1rem]";
    case "large":
      return "w-18 h-18 p-[0.2rem]";
  }
}
