import type { Metadata, Viewport } from "next";
import { Barlow, Bebas_Neue } from "next/font/google";

import { Providers } from "@/components/providers";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Barlow({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Warriors | A Viking clan of the North Sea",
  description:
    "Warriors is a sworn fellowship of rowers, shieldmen and traders sailing out of Hedeby. Read our saga, see the next voyage, join the crew or trade at our market.",
  keywords: ["Viking", "clan", "Warriors", "Hedeby", "raid", "trade", "recruitment"],
  openGraph: {
    title: "Warriors | A Viking clan of the North Sea",
    description:
      "Seven ships. Two hundred and twelve sworn men and women. One oath.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
