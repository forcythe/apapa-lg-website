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
        {/* Hero Section */}
        <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${imageUrl}')` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative h-full max-w-6xl mx-auto px-6 flex flex-col justify-end pb-10 md:pb-14">
            <Link
              href="/"
              className="flex items-center gap-2 text-white mb-8 hover:opacity-80 transition-opacity w-fit group"
            >
              <div className="rotate-180">
                <FooterArrow fill="white" />
              </div>
              <span>Back to Home</span>
            </Link>

            <div className="bg-accent3 w-fit px-4 py-2 rounded-lg mb-6">
              <p className="text-black font-medium uppercase tracking-wider text-sm">
                {blog.category}
              </p>
            </div>

            <h1 className="text-4xl md:text-6xl font-[FuturaLTBold] text-white max-w-4xl leading-tight line-clamp-2">
              {blog.title}
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 mt-10 md:mt-16">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-8 mb-12 pb-10 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-accent2 flex items-center justify-center text-accent font-[FuturaLTBold] text-2xl shadow-sm">
                  {blog.author?.[0] || "A"}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">Author</p>
                  <p className="font-[FuturaLTBold] text-[#000000] text-lg">
                    {blog.author || "Anonymous"}
                  </p>
                </div>
              </div>

              <div className="h-12 w-[1px] bg-gray-200 hidden md:block" />

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">Published on</p>
                <p className="font-[FuturaLTBold] text-[#000000] text-lg">
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            <BlogContent
              content={blog.content}
              fallbackText={blog.description}
            />

            <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
              <ShareButton
                title={blog.title}
                text={blog.description}
                url={`https://apapa.lg.gov.ng/blog/${blog.slug}`}
              />
            </div>
          </div>
        </div>
      </main>
    </AppWrapper>
  );
}
