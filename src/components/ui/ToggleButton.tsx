interface Props {
  text: string;
  onClick: () => void;
  black?: boolean;
}
export default function ToggleButton({ text, black }: Props) {
  return (
    <button
      className={`border-none rounded-3xl py-2 px-2 text-sm text-white leading-4 ${
        black ? "bg-black" : "bg-gray-300"
      }`}
    >
      {text}
    </button>
  );
}
