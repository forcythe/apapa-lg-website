import type { Metadata } from "next";
import dynamic from "next/dynamic";

const AboutUsPage = dynamic(() => import("@/screens/aboutUs"), {
  loading: () => null,
});

export const metadata: Metadata = {
  title: "About Us | Apapa Local Government",
  description:
    "Learn about Apapa Local Government's mission, vision, and core values as we drive impactful governance and sustainable development in Nigeria's foremost port city.",
  openGraph: {
    title: "About Us | Apapa Local Government",
    description:
      "Learn about Apapa Local Government's mission, vision, and core values as we drive impactful governance and sustainable development in Nigeria's foremost port city.",
    images: [{ url: "/image/logoHead.png", width: 1200, height: 630 }],
  },
};

export default function AboutUs() {
  return <AboutUsPage />;
}
