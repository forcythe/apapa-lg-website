import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "nextjs-orgchart/dist/ChartContainer.css";
import "nextjs-orgchart/dist/ChartNode.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apapa",
  description: "****",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {""
  return (
    <html lang="en">
      <body>
        {children}
        <ToastContainer style={{ zIndex: 9999999999 }} />
      </body>
    </html>
  );
}
