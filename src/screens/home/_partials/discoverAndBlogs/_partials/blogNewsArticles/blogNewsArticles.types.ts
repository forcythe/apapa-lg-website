export type tabId = "blogs" | "news" | "articles";

export type BlogItem = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  category: "blog" | "news" | "article";
  coverImage?: {
    url: string;
  };
};