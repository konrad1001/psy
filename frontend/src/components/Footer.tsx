import type { FooterData } from "../types";

interface FooterProps {
  content: FooterData;
}

function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-slate-100 py-16 text-neutral-600">
      <div className="container mx-auto text-center">
        <p className="font-family-label text-sm">{content.footerText}</p>
      </div>
    </footer>
  );
}

export default Footer;
