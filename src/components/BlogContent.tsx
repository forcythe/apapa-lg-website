"use client";

import React from "react";
import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";

interface BlogContentProps {
  content?: BlocksContent | null;
  fallbackText?: string | null;
}

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

const BlogContent: React.FC<BlogContentProps> = ({ content, fallbackText }) => {
  if (!content || !Array.isArray(content)) {
    return fallbackText ? (
      <div className="blog-content text-[#667085] text-base md:text-[20px] md:leading-[32px]">
        <p>{fallbackText}</p>
      </div>
    ) : null;
  }

  return (
    <div className="blog-content prose prose-lg max-w-none text-[#333333] text-base md:text-[21px] leading-[1.7] md:leading-[1.8] font-light">
      <BlocksRenderer
        content={content}
        blocks={{
          paragraph: ({ children }) => <p className="mb-8 last:mb-0">{children}</p>,
          heading: ({ children, level }) => {
            const headingClasses: Record<number, string> = {
              1: "text-4xl md:text-5xl font-[FuturaLTBold] text-[#000000] mt-16 mb-6 leading-tight",
              2: "text-3xl md:text-4xl font-[FuturaLTBold] text-[#000000] mt-14 mb-6 leading-tight",
              3: "text-2xl md:text-3xl font-[FuturaLTBold] text-[#000000] mt-12 mb-5 leading-tight",
              4: "text-xl md:text-2xl font-[FuturaLTBold] text-[#000000] mt-10 mb-4 leading-tight",
              5: "text-lg md:text-xl font-[FuturaLTBold] text-[#000000] mt-8 mb-4 leading-tight",
              6: "text-base md:text-lg font-[FuturaLTBold] text-[#000000] mt-8 mb-4 leading-tight",
            };
            const Tag = `h${level}` as any;
            return <Tag className={headingClasses[level] || headingClasses[1]}>{children}</Tag>;
          },
          list: ({ children, format }) => {
            const Tag = format === "ordered" ? "ol" : "ul";
            const listClass = format === "ordered" 
              ? "list-decimal ml-8 space-y-4 mb-8 text-[#444444]" 
              : "list-disc ml-8 space-y-4 mb-8 text-[#444444]";
            return <Tag className={listClass}>{children}</Tag>;
          },
          quote: ({ children }) => (
            <blockquote className="border-l-4 border-accent pl-8 py-4 text-xl md:text-2xl font-medium italic text-[#111111] my-12 bg-accent/5 rounded-r-2xl leading-relaxed">
              {children}
            </blockquote>
          ),
          image: ({ image }) => {
            const imgUrl = image.url.startsWith("http")
              ? image.url
              : `${STRAPI_URL}${image.url}`;
            return (
              <div className="my-12 overflow-hidden">
                <img
                  src={imgUrl}
                  alt={image.alternativeText || ""}
                  className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 object-cover"
                />
                {image.caption && (
                  <p className="mt-4 text-center text-sm md:text-base italic text-gray-500 font-medium">{image.caption}</p>
                )}
              </div>
            );
          },
          link: ({ children, url }) => (
            <a
              href={url}
              className="text-accent font-medium underline decoration-accent/30 underline-offset-4 hover:decoration-accent transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          code: ({ children }) => (
            <code className="rounded-md bg-gray-100 px-2 py-1 text-[0.85em] text-accent font-mono border border-gray-200">
              {children}
            </code>
          ),
        }}
      />
    </div>
  );
};

export default BlogContent;
