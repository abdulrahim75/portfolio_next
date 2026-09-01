import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulrahim-portfolio.vercel.app"),
  title: "Abdul Rahim — Software Developer",
  description:
    "Software Developer and Full Stack Developer based in Bangalore, India, currently working at BNP Paribas and building modern software solutions.",
  applicationName: "Abdul Rahim Portfolio",
  authors: [{ name: "Abdul Rahim" }],
  creator: "Abdul Rahim",
  keywords: [
    "Abdul Rahim",
    "Software Developer",
    "Full Stack Developer",
    "Bangalore",
    "India",
    "BNP Paribas",
    "Modern Software Development",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Abdul Rahim — Software Developer",
    description:
      "Software Developer and Full Stack Developer based in Bangalore, India, currently working at BNP Paribas.",
    url: "/",
    siteName: "Abdul Rahim Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rahim — Software Developer",
    description:
      "Software Developer and Full Stack Developer based in Bangalore, India, currently working at BNP Paribas.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col overflow-x-hidden bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
