import type { Metadata, Viewport } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const mona = Mona_Sans({
  variable: "--font-mona",
  subsets: ["latin"],
  axes: ["wdth"],
});

// Set NEXT_PUBLIC_SITE_URL if you move to a custom domain.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pershant-parkash.vercel.app";

const title = "Pershant Parkash, Full-Stack Developer";
const description =
  "Full-stack developer in Karachi building web and mobile apps with Next.js, React Native, NestJS and PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, type: "website", url: "/" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = { themeColor: "#12262d" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${mona.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
