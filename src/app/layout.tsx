import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import ClientProviders from "@/components/ui/ClientProviders";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
});

const jetbrains = JetBrains_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "axonz.ai — Voice Intelligence Platform",
  description:
    "300ms latency. 12+ Indian · 60 globally. India's fastest voice bot platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${dmSerif.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <body suppressHydrationWarning={true}>
        <AppProvider>
          <ClientProviders />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
