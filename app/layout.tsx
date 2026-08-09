import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://re-taste.pages.dev"),
  title: "Re. Taste | もったいないを、おいしいへ。",
  description:
    "規格外みかんから新しいおいしさを生み出す、みかんラスクの商品開発プロジェクト。",
  openGraph: {
    title: "Re. Taste | そのみかん、捨てるにはおいしすぎる。",
    description:
      "規格外みかんから新しいおいしさを生み出す、みかんラスクの商品開発プロジェクト。",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Re. Taste みかんラスク",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Re. Taste | そのみかん、捨てるにはおいしすぎる。",
    description:
      "規格外みかんから新しいおいしさを生み出す、みかんラスクの商品開発プロジェクト。",
    images: ["/og.png"],
  },
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
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
