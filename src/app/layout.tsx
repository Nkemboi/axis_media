import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://axismediasolutions.com"),
  title: {
    default: "Axis Media Solutions | Creative Solutions That Move Brands Forward",
    template: "%s | Axis Media Solutions",
  },
  description:
    "Axis Media Solutions is an East African creative agency delivering branding, web design, digital marketing, print, and consultancy for businesses ready to grow.",
  openGraph: {
    title: "Axis Media Solutions",
    description: "Creative Solutions That Move Brands Forward.",
    url: "https://axismediasolutions.com",
    siteName: "Axis Media Solutions",
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
