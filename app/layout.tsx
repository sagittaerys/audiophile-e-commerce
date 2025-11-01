import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: "Sage's E-Commerce Mall",
  description: "HNG Quest III",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} flex flex-col min-h-screen antialiased`}
      >
        <Header />
        <Providers>
          <main className="flex-grow">{children}</main>
          </Providers>
        <Footer />
      </body>
    </html>
  );
}
