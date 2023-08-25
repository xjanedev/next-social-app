interface Props {
  text: string;
  onClick: () => void;
  black?: boolean;
}
export default function ToggleButton({ text, onClick, black }: Props) {
  return (
    <button
      className={`border-none rounded-md py-2 px-8 text-white font-bold leading-4 ${
        black ? "bg-black" : "bg-gray-500"
      }`}
    >
      {text}
    </button>
  );
}
