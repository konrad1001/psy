import type {
  PortableTextReactComponents,
  PortableTextMarkComponentProps,
} from "@portabletext/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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
    // Ex. 1: customizing common block types
    // h6: (type) => <h6 className="text-6xl text-red-500">{type.children}</h6>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-xl list-inside list-disc space-y-1 marker:text-slate-500">
        {children}
      </ul>
    ),
  },
};

export { components as PortableTextComponents };
