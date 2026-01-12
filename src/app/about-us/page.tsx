import dynamic from "next/dynamic";

const AboutUsPage = dynamic(() => import("@/screens/aboutUs"), {
  loading: () => null,
});

export default function AboutUs() {
  return <AboutUsPage />;
}
