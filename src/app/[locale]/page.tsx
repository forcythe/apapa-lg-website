import dynamic from "next/dynamic";
import "./globals.css";

const HomePage = dynamic(() => import("@/screens/home"), {
  loading: () => null,
});

export default function Home() {
  return <HomePage />;
}
