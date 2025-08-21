import type { FooterData, GlobalConfig } from "../types";

interface FooterProps {
  config: GlobalConfig;
  content: FooterData;
  className?: string;
}

function Footer({ content, className = "" }: FooterProps) {
  return (
    <footer className={`py-16 ${className} ${"bg-slate-50 text-black/50"}`}>
      <div className="container mx-auto text-center">
        <p className="font-family-instrument-sans">{content.footerText}</p>
      </div>
    </footer>
  );
}

export default Footer;
