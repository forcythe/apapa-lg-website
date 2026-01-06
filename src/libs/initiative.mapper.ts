import { Project } from "@/screens/projects/_partials/projectDetails/projectDetails.types";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

export const mapInitiativesAndProjects = (response: any): Project[] => {
  if (!response?.data) return [];

  return response.data.map(
    (item: any): Project => ({
      id: item.id,
      title: item.title,
      progress: item.progress,
      expectedCompletion: formatDate(item.expectedCompletion),
      objectives: item.objectives, // string (your UI already supports string OR array)
      results: item.results?.map((r: any) => r.resultItem) ?? [],
      imageSrc: item.image?.url
        ? `${STRAPI_URL}${item.image.url}`
        : "/image/fallback.png",
    })
  );
};

/* ---- helpers ---- */

const formatDate = (date: string) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });
};
