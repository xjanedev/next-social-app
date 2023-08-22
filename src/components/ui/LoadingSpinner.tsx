import dynamic from "next/dynamic";

const ClipLoader = dynamic(
  () => import("react-spinners").then(lib => lib.ClipLoader),
  {
    ssr: false,
  }
);

interface Props {
  color?: string;
}

export default function LoadingSpinner({ color = "black" }: Props) {
  return <ClipLoader color={color} />;
}
