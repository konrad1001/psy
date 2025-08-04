import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { PortableTextComponents } from "../utils/utils";

export const RichText = ({ content }: { content: PortableTextBlock[] }) => {
  return (
    <div className="font-thin">
      <PortableText value={content} components={PortableTextComponents} />
    </div>
  );
};
