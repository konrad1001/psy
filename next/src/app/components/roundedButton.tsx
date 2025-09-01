interface RoundedButtonProps {
  text: string;
  className?: string;
  destination: string;
}

function RoundedButton({
  text,
  className = "",
  destination,
}: RoundedButtonProps) {
  return (
    <a
      className={`rounded-full px-8 py-3 font-bold shadow-md transition-colors duration-300 ${className}`}
      href={destination}
    >
      {text}
    </a>
  );
}

export default RoundedButton;
