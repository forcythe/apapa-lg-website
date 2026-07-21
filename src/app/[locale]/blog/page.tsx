import { Metadata } from "next";
import { BlogsPage } from "@/screens";

export const metadata: Metadata = {
  title: "Blogs, News & Articles | Apapa Local Government",
  description:
    "Stay informed with the latest updates, official news, and articles from Apapa Local Government.",
  openGraph: {
    title: "Blogs, News & Articles | Apapa Local Government",
    description:
      "Stay informed with the latest updates, official news, and articles from Apapa Local Government.",
    images: [{ url: "/svgs/logoHead.svg", width: 84, height: 84 }],
  },
};

export default function BlogList() {
  return <BlogsPage />;
}
