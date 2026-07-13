import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexWork 2045",
  description:
    "Platform pemetaan skill mismatch dan intervensi BLK Mobile berbasis data.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
