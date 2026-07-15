import type { Metadata } from "next";
import { Oswald, Raleway } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const display = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const sans = Raleway({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frankarnoldart.local"),
  title: {
    default: "Frank Arnold Art | Artist in Cabo",
    template: "%s | Frank Arnold Art",
  },
  description:
    "Frank Arnold — international abstract figurative painter and sculptor. Original paintings, sculptures, books, and the San José del Cabo gallery.",
  openGraph: {
    title: "Frank Arnold Art",
    description:
      "Original paintings and sculptures by internationally recognized abstract figurative artist Frank Arnold.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
