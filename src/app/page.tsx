import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("@/screens/home"), {
  loading: () => null,
});

export default function Home() {
  return <HomePage />;
}
