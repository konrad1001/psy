import { useLocation } from "react-router-dom";
import type { FooterData } from "../types";

interface FooterProps {
  content: FooterData;
  className?: string;
}

function Footer({ content, className = "" }: FooterProps) {
  const location = useLocation();
  const pathname = location.pathname;
  const isLight =
    pathname.startsWith("/services") ||
    pathname.startsWith("/home") ||
    pathname === "/";

  return (
    <footer
      className={`py-16 ${className} ${isLight ? "bg-slate-200 text-black/50" : "bg-primary-dark text-white/50"}`}
    >
      <div className="container mx-auto text-center">
        <p className="font-family-instrument-sans text-sm">
          {content.footerText}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
