"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AppWrapper, Header } from "@/components";
import { Banner } from "../_partials";
import { TRANSPARENT_IMAGE_PLACEHOLDER } from "@/utils/helpers/imagePlaceholder";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import FooterArrow from "../../../public/svg-component/FooterArrow";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BlogsScreen = () => {
  const t = useTranslations("Community.blog");
  const locale = useLocale();
  const cmsLocale = locale === "pcm" ? "en" : locale;
  const backendUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  const [activeTab, setActiveTab] = useState("all");
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams({
          populate: "*",
          locale: cmsLocale,
        });
        const res = await fetch(
          `${backendUrl}/api/blogs?${params.toString()}`,
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const json = await res.json();
        setBlogs(json.data || []);
      } catch (err: any) {
        console.error("Failed to load blogs", err);
        setError(err.message || "Failed to load blogs. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [cmsLocale, backendUrl]);

  const getTabCategory = (tab: string) => {
    if (tab === "blogs") return "blog";
    if (tab === "news") return "news";
    if (tab === "articles") return "article";
    return tab;
  };

  const currentFilteredBlogs = activeTab === "all"
    ? blogs
    : blogs.filter(blog => blog.category?.toLowerCase() === getTabCategory(activeTab));

  const tabs = [
    { id: "all", label: t("tabs.all") },
    { id: "blogs", label: t("tabs.blogs") },
    { id: "news", label: t("tabs.news") },
    { id: "articles", label: t("tabs.articles") },
  ];

  return (
    <AppWrapper>
      <div className="sticky top-0 z-[10]">
        <Header />
      </div>
      <Banner type={t("bannerTitle")} />
      <div className="w-full max-w-[2000px] mx-auto relative py-[80px] md:py-[120px] overflow-hidden bg-white">
        <div className="section-padding">
          <div className="w-full mx-auto max-w-[1488px]">
            {/* Tabs */}
            <div className="flex justify-center mb-12 overflow-x-auto scrollbar-hide py-2">
              <div className="flex gap-2 bg-gray-50 p-1.5 rounded-full border border-gray-100 shadow-inner">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-2.5 rounded-full text-sm md:text-base font-[FuturaLTBold] transition-all whitespace-nowrap ${
                      activeTab === tab.id
                        ? "bg-accent text-white shadow-md"
                        : "text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {loading ? (
              <div className="w-full py-20 text-center">
                <p className="text-[#667085]">{t("loadingBlogs")}</p>
              </div>
            ) : error ? (
              <div className="w-full py-20 text-center">
                <p className="text-red-500">{error}</p>
              </div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-10 md:gap-y-12"
              >
                <AnimatePresence mode="popLayout">
                  {currentFilteredBlogs.map((blog) => (
                    <motion.div
                      key={blog.id}
                      layout
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex flex-col group"
                    >
                      <Link href={`/blog/${blog.slug}`} className="block mb-6 overflow-hidden rounded-[32px] shadow-lg hover:shadow-xl transition-shadow bg-white p-2 border border-gray-100">
                        <div 
                          className="aspect-[16/10] w-full bg-gray-100 bg-cover bg-center rounded-[24px] transition-transform duration-500 group-hover:scale-105"
                          style={{
                            backgroundImage: `url('${blog.coverImage?.url ? (blog.coverImage.url.startsWith("http") ? blog.coverImage.url : backendUrl + blog.coverImage.url) : "/fallback.svg"}')`
                          }}
                        />
                      </Link>
                      
                      <div className="flex items-center gap-3 mb-4 text-xs md:text-sm text-gray-400 font-medium">
                        <span className="bg-accent2 text-accent px-3 py-1 rounded-full uppercase tracking-wider text-[10px] font-bold">
                          {blog.category || "News"}
                        </span>
                        <span className="h-1 w-1 bg-gray-300 rounded-full" />
                        <span>{new Date(blog.createdAt).toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                      </div>

                      <Link href={`/blog/${blog.slug}`}>
                        <h3 className="text-xl md:text-2xl font-[FuturaLTBold] text-[#101828] mb-3 group-hover:text-accent transition-colors line-clamp-2 leading-tight">
                          {blog.title}
                        </h3>
                      </Link>

                      <p className="text-[#667085] text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                        {blog.description}
                      </p>

                      <Link href={`/blog/${blog.slug}`} className="flex items-center gap-2 text-accent font-[FuturaLTBold] group/btn mt-auto">
                        <span className="text-sm md:text-base">Read Full Story</span>
                        <div className="transition-transform group-hover/btn:translate-x-1">
                          <FooterArrow fill="currentColor" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {currentFilteredBlogs.length === 0 && (
                  <div className="col-span-full py-20 text-center">
                    <p className="text-gray-400">No blogs found in this category.</p>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* Background Decorative Element */}
        <div className="w-full absolute top-0 z-[-1] pointer-events-none opacity-40">
          <Image
            src="/svgs/boat-bg.svg"
            alt=""
            width={1450}
            height={1300}
            className="w-full max-w-[1450px] mx-auto"
            loading="lazy"
            placeholder="blur"
            blurDataURL={TRANSPARENT_IMAGE_PLACEHOLDER}
          />
        </div>
      </div>
    </AppWrapper>
  );
};

export default BlogsScreen;
