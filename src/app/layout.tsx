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
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17840759178"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17840759178');`}
        </script>
      </head>
      <body>
        {children}
        <ToastContainer style={{ zIndex: 9999999999 }} />
      </body>
    </html>
  );
}
