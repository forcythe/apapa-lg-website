export type TabId = "general" | "government" | "community" | "services";

export interface FaqItem {
  id: number;
  documentId: string;
  question: string;
  answer: string;
  category: TabId;
}
