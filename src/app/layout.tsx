import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from 'sonner';
const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Techxagon Academy",
  description: "A school management system built by Charles Chukwuemeka, while having Techxagon Academy Abuja Wuse Zone 11(Force Headquarters) in mind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", inter.className)}>
        {children}
        <Toaster richColors position="top-center" closeButton />
      </body>
    </html>
  );
}
