import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Spendly",
  description: "See Your Spending, Simplify Your Savings",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <Head>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <html lang="en">
        
        <body className={outfit.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
