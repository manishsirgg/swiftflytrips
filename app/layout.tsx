import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { TopStrip } from "@/components/layout/top-strip";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Swift Fly Trips | Flights, Hotels, Holidays & Visa",
  description: "Book flights, hotels, holiday packages, visa services and more with Swift Fly Trips.",
  openGraph: {
    title: "Swift Fly Trips",
    description: "Search-first online travel agency for flights, hotels and curated holidays."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script id="travelpayouts-tracker" strategy="afterInteractive">
          {`(function () {
            var script = document.createElement("script");
            script.async = 1;
            script.src = 'https://emrldco.com/NTE5MTUw.js?t=519150';
            document.head.appendChild(script);
          })();`}
        </Script>
      </head>
      <body>
        <TopStrip />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
