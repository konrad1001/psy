interface RoundedButtonProps {
  text: string;
  fgColor?: string;
  bgColor?: string;
  destination: string;
}

function RoundedButton({
  text,
  fgColor,
  bgColor,
  destination,
}: RoundedButtonProps) {
  return (
    <a
      href={destination}
      className={`font-family-instrument-sans bg-primary self-start rounded-full px-8 py-3 font-bold text-white shadow-md transition-colors duration-300 hover:bg-amber-500/30`}
    >
      {text}
    </a>
  );
}

export default RoundedButton;
