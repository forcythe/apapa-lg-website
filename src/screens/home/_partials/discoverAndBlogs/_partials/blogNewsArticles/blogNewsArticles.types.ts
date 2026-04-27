export type tabId = "blogs" | "news" | "articles";

export type BlogItem = {
  id: number;
  title: string;
  slug: string;
  author?: string;
  description: string;
  content?: any[];
  createdAt: string;
  category: "blog" | "news" | "article";
  coverImage?: {
    url: string;
  };
};