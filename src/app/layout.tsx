import type { Metadata } from "next";
import { Bebas_Neue, Chakra_Petch, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-heading",
  subsets: ["latin"],
});

const chakraPetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  subsets: ["latin"],
});

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SymbAIote — Fused With the Future",
  description: "Streetwear for AI agent practitioners. The bond is permanent.",
  keywords: ["AI", "agents", "streetwear", "merch", "developer", "Claude", "GPT"],
  openGraph: {
    title: "SymbAIote — Fused With the Future",
    description: "Your agent deleted your repo at 2am. You forgave it.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${chakraPetch.variable} ${shareTechMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
