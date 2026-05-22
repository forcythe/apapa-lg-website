import { Metadata } from "next";
import { BlogsPage } from "@/screens";

export const metadata: Metadata = {
  title: "Blogs, News & Articles | Apapa Local Government",
  description: "Stay informed with the latest updates, official news, and articles from Apapa Local Government.",
};

export default function BlogList() {
  return <BlogsPage />;
}
