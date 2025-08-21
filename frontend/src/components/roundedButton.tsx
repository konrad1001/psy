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
      href={destination}
      className={`font-family-instrument-sans self-start rounded-full px-8 py-3 font-bold shadow-md transition-colors duration-300 ${className}`}
    >
      {text}
    </a>
  );
}

export default RoundedButton;
