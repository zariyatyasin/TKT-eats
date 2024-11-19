import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Header from "@/components/header/header";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { NextAuthProvider } from "./auth/_utils/session-warpper";

export const metadata: Metadata = {
  title: "The Kitchen Table",
  description: "DINE LUXURIOUSLY, YOUR WAY",
  metadataBase: new URL(
    "https://res.cloudinary.com/ddrjnijut/image/upload/v1731948968/qafhp0whircrvs1ypfo3.png"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script id="facebook-pixel">
          {`
            !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1278917256575194'); 
              fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1278917256575194&ev=PageView&noscript=1"
          />
        </noscript>
        {/* <Navbar /> */}

        <NextAuthProvider>
          <Header />
          {children}
        </NextAuthProvider>

        <Toaster />
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
