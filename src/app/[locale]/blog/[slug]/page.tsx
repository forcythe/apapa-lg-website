import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogContent from "@/components/BlogContent";
import ShareButton from "@/components/ShareButton";
import { Link } from "@/i18n/navigation";
import FooterArrow from "../../../../../public/svg-component/FooterArrow";
import { AppWrapper, Header } from "@/components";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

async function getBlog(slug: string, locale: string) {
  const cmsLocale = locale === "pcm" ? "en" : locale;
  const res = await fetch(
    `${STRAPI_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*&locale=${cmsLocale}`,
    { cache: "no-store" },
  );

  if (!res.ok) return null;
  const data = await res.json();
  return data.data?.[0] || null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const blog = await getBlog(slug, locale);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  const title = blog.seo?.metaTitle || blog.title;
  const description = blog.seo?.metaDescription || blog.description;

  let imageUrl =
    blog.seo?.openGraph?.ogImage?.url || blog.coverImage?.url || "";
  if (imageUrl && !imageUrl.startsWith("http")) {
    imageUrl = `${STRAPI_URL}${imageUrl}`;
  }

  return {
    title,
    description,
    openGraph: {
      title: blog.seo?.openGraph?.ogTitle || title,
      description: blog.seo?.openGraph?.ogDescription || description,
      images: imageUrl ? [imageUrl] : [],
      type: "article",
      url: `https://apapa.lg.gov.ng/blog/${blog.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.seo?.openGraph?.ogTitle || title,
      description: blog.seo?.openGraph?.ogDescription || description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const blog = await getBlog(slug, locale);

  if (!blog) {
    notFound();
  }

  const imageUrl = blog.coverImage?.url
    ? blog.coverImage.url.startsWith("http")
      ? blog.coverImage.url
      : STRAPI_URL + blog.coverImage.url
    : "/fallback.svg";

  return (
    <AppWrapper>
      <div className="sticky top-0 z-[10] bg-white shadow-sm">
        <Header />
      </div>
      <main className="min-h-screen bg-white pb-20">
        <div className="max-w-5xl mx-auto px-6 pt-10 md:pt-16">
          {/* Breadcrumb / Navigation */}
          <div className="flex items-center gap-3 mb-8 md:mb-12 font-[FuturaLTBold] overflow-hidden">
            <Link
              href="/blog"
              className="text-accent hover:opacity-80 transition-opacity whitespace-nowrap text-lg"
            >
              Our Blog
            </Link>
            <div className="flex-shrink-0 text-gray-300">
              <FooterArrow fill="currentColor" />
            </div>
            <span className="text-gray-400 text-lg truncate max-w-[250px] md:max-w-[500px]">
              {blog.title}
            </span>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] w-full mb-10 md:mb-14 overflow-hidden rounded-2xl md:rounded-[40px] shadow-2xl">
            <img
              src={imageUrl}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Category */}
          <div className="bg-accent3 w-fit px-3 py-1 rounded-full mb-6">
            <p className="text-black font-medium uppercase tracking-widest text-[10px] md:text-xs">
              {blog.category || "News"}
            </p>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-[FuturaLTBold] text-[#000000] leading-[1.1] mb-8 line-clamp-3">
            {blog.title}
          </h1>

          {/* Metadata Section */}
          <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-y border-gray-100 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent2 flex items-center justify-center text-accent font-[FuturaLTBold] text-xl md:text-2xl shadow-sm border border-accent/10">
                {blog.author?.[0] || "A"}
              </div>
              <div>
                <p className="text-[10px] md:text-xs uppercase tracking-wider text-gray-400 font-bold mb-0.5">Author</p>
                <p className="font-[FuturaLTBold] text-[#000000] text-base md:text-lg leading-tight">
                  {blog.author || "Anonymous"}
                </p>
              </div>
              
              <div className="h-10 w-[1px] bg-gray-200 mx-2 hidden sm:block" />
              
              <div className="hidden sm:block">
                <p className="text-[10px] md:text-xs uppercase tracking-wider text-gray-400 font-bold mb-0.5">Published</p>
                <p className="font-[FuturaLTBold] text-[#000000] text-base md:text-lg leading-tight">
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:hidden text-right">
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-0.5">Published</p>
                <p className="font-[FuturaLTBold] text-[#000000] text-sm leading-tight">
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
              <ShareButton
                title={blog.title}
                text={blog.description}
                url={`https://apapa.lg.gov.ng/blog/${blog.slug}`}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-4xl mx-auto">
            <BlogContent
              content={blog.content}
              fallbackText={blog.description}
            />
            
            {/* Bottom Share (Optional) */}
            {/* <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col items-center gap-6">
              <p className="text-gray-400 font-medium">Enjoyed this article? Share it with your network</p>
              <ShareButton
                title={blog.title}
                text={blog.description}
                url={`https://apapa.lg.gov.ng/blog/${blog.slug}`}
              />
            </div> */}
          </div>
        </div>
      </main>
    </AppWrapper>
  );
}
