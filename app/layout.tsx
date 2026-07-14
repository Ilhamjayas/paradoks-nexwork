import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexwork-paradoks.vercel.app",
  ),
  title: "NexWork 2045",
  description:
    "Platform karier dan workforce intelligence untuk menemukan kerja, pelatihan, serta dukungan kesiapan karier.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "NexWork 2045",
    description: "Dari skill, pelatihan, hingga peluang kerja.",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "NexWork 2045 — platform karier dan workforce intelligence" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexWork 2045",
    description: "Dari skill, pelatihan, hingga peluang kerja.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/nexwork.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
