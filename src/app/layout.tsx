import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModeToggle } from "@/components/mode-toggle";
import { Providers } from "./provider";
import { Button } from "@/components/ui/button";
import { Header } from "./header";
import NextTopLoader from 'nextjs-toploader';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevConnect",  
  description: "Enhancing the experience of collaborative programming",   
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <NextTopLoader /> 
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}   
