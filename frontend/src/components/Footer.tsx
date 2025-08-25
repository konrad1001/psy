import type { FooterData, GlobalConfig } from "../types";
import { RichText } from "./richText";

interface FooterProps {
  config: GlobalConfig;
  content: FooterData;
  className?: string;
}

function Footer({ content, className = "" }: FooterProps) {
  return (
    <footer
      className={`py-8 text-sm ${className} ${"bg-slate-50 text-black/50"}`}
    >
      <div className="container mx-auto text-center">
        <p className="font-family-instrument-sans">{content.footerText}</p>
        {content.helpfulLinks.toggle && (
          <div className="mt-8 px-8 sm:px-32 lg:px-52">
            <div className="rounded-lg bg-slate-100 p-4">
              <RichText
                content={content.helpfulLinks.text}
                className="font-family-instrument-sans text-sm opacity-80"
              />
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
