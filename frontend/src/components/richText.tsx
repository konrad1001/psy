import {
  PortableText,
  type PortableTextMarkComponentProps,
  type PortableTextReactComponents,
} from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

export const RichText = ({
  content,
  className,
}: {
  content: PortableTextBlock[];
  className?: string;
}) => {
  const components: Partial<PortableTextReactComponents> = {
    marks: {
      link: ({ value, children }: PortableTextMarkComponentProps) => {
        const target = value?.href?.startsWith("http") ? "_blank" : undefined;
        return (
          <a
            className="text-blue-900 hover:underline"
            href={value?.href || "#"}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
          >
            {children}
          </a>
        );
      },
      strong: ({ children }) => (
        <strong className="font-semibold text-slate-600">{children}</strong>
      ),
    },
    block: {
      // h6: (type) => <h6 className="text-6xl text-red-500">{type.children}</h6>,
      normal: ({ children }) => {
        return (
          <p className="my-4">
            {children} <br />
          </p>
        );
      },
    },
    list: {
      bullet: ({ children }) => (
        <ul className="mt-xl list-inside list-disc space-y-1 marker:text-slate-500">
          {children}
        </ul>
      ),
    },
  };
  return (
    <div className={` ${className}`}>
      <PortableText value={content} components={components} />
    </div>
  );
};
