import dynamic from "next/dynamic";

const InitiativesPage = dynamic(() => import("@/screens/initiatives"), {
  loading: () => null,
});

export default function Initiatives() {
  return <InitiativesPage />;
}
