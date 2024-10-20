import "@/styles/globals.css";
import { dir } from "i18next";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Navbar } from "../components/Navbar";

import { Providers } from "./providers";
import { languages } from "./i18n/settings";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Footer } from "@/components/footer";
import ParticlesComponent from "@/components/Particles";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/icon/logotip.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "black" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <html suppressHydrationWarning dir={dir(lng)} lang={lng}>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ParticlesComponent id="particles" />
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar lng={lng} />
            <main>{children}</main>

            <Footer lng={lng} />
          </div>
        </Providers>
      </body>
    </html>
  );
}
