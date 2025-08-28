import { FooterData } from "@/types/types";
import { RichText } from "./richText";

interface FooterProps {
  content: FooterData;
  className?: string;
}

function Footer({ content, className = "" }: FooterProps) {
  return (
    <footer
      className={`py-12 text-sm ${className} ${"bg-slate-50 text-black/50"}`}
    >
      <div className="container mx-auto flex-col space-y-8 text-center">
        {content.helpfulLinks.toggle && (
          <div className="px-8 sm:px-32 lg:px-52">
            <div className="rounded-lg bg-slate-100 p-4">
              <RichText
                content={content.helpfulLinks.text}
                className="text-sm opacity-80"
              />
            </div>
          </div>
        )}
        <p>{content.footerText}</p>
      </div>
    </footer>
  );
}

export default Footer;
