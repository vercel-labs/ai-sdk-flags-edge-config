import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import VercelToolbarComponent from "@/components/toolbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dynamic Models - Vercel AI SDK",
  description:
    "Next.js chatbot with dynamic model selection powered by the Vercel AI SDK, Feature Flags and Edge Config.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <VercelToolbarComponent />
      </body>
    </html>
  );
}
