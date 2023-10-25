interface Props {
  text: string;
  onClick: () => void;
  gray?: boolean;
  disabled?: boolean;
}
export default function ToggleButton({
  text,
  onClick,
  gray,
  disabled = false,
}: Props) {
  return (
    <button
      className={`border-none rounded-full py-2 px-4 text-white text-sm font-bold leading-4 ${
        gray ? "bg-gray-300" : "bg-gray-900"
      } ${disabled && "opacity-90"}`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
