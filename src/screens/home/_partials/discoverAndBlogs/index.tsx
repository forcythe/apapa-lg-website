"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import { TRANSPARENT_IMAGE_PLACEHOLDER } from "@/utils/helpers/imagePlaceholder";

const BlogNewsArticles = dynamic(
  () => import("./_partials/blogNewsArticles"),
  { loading: () => null }
);
const Events = dynamic(() => import("./_partials/events"), {
  loading: () => null,
});

const DiscoverAndBlogs = () => {
  return (
    <div className="relative py-[100px] md:py-[120px] bg-white text-primary z-[1] overflow-hidden">
      <div className="w-full relative">
        <Events />
        <div className="section-padding">
          <BlogNewsArticles />
        </div>
        <Image
          src="/svgs/boat-bg.svg"
          className="absolute top-0 left-0 z-[-1] max-w-[1800px] min-w-[1800px] max-h-[1100px] min-h-[1100px]"
          alt=""
          width={1800}
          height={1100}
          loading="lazy"
          placeholder="blur"
          blurDataURL={TRANSPARENT_IMAGE_PLACEHOLDER}
        />

        <Image
          src="/svgs/boat-bg.svg"
          className="absolute top-[1200px] left-0 z-[-1] max-w-[1800px] min-w-[1800px] max-h-[1100px] min-h-[1100px]"
          alt=""
          width={1800}
          height={1100}
          loading="lazy"
          placeholder="blur"
          blurDataURL={TRANSPARENT_IMAGE_PLACEHOLDER}
        />
      </div>
    </div>
  );
};

export default DiscoverAndBlogs;
