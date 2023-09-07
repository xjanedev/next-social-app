interface Props {
  text: string;
  onClick: () => void;
  red?: boolean;
  disabled?: boolean;
}
export default function Button({
  text,
  onClick,
  red,
  disabled = false,
}: Props) {
  return (
    <button
      className={`border-none rounded-full py-2 px-4 text-white text-sm leading-3 ${
        red ? "bg-black" : "bg-gray-300"
      } ${disabled && "opacity-80"}`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
