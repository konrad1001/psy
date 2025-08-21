interface RoundedButtonProps {
  text: string;
  className?: string;
  destination: string;
  bgColor?: string;
  hoverColor?: string;
}

function RoundedButton({
  text,
  className = "",
  destination,
  bgColor,
  hoverColor,
}: RoundedButtonProps) {
  const buttonStyle = {
    backgroundColor: bgColor,
    ...(hoverColor && {
      "--hover-bg-color": hoverColor,
    }),
  };

  return (
    <a
      href={destination}
      style={buttonStyle}
      className={`font-family-instrument-sans self-start rounded-full px-8 py-3 font-bold shadow-md transition-colors duration-300 ${className}`}
    >
      {text}
    </a>
  );
}

export default RoundedButton;
