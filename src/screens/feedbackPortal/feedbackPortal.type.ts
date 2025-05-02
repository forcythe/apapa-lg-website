export type TabId = "share-feedback" | "track-feedback";

export interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  feedback: string;
  feedbackCategory: string;
  trackingId: string;
}
