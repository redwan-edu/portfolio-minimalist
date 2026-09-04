import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Grain from "@/components/Grain";
import { person } from "@/lib/data";

const dubai = localFont({
  src: "../../public/Dubai-Regular.ttf",
  variable: "--font-dubai",
  weight: "400",
  style: "normal",
  display: "swap",
});

const ralgine = localFont({
  src: "../../public/Ralgine-9MMJ2.otf",
  variable: "--font-ralgine",
  weight: "400",
  style: "normal",
  display: "swap",
});

const wildMagnolia = localFont({
  src: "../../public/Wild Magnolia.otf",
  variable: "--font-wild-magnolia",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${person.name} — ${person.role}`,
    template: `%s — ${person.name}`,
  },
  description: person.statement,
  keywords: [
    "Redwan Hussain",
    "Software Engineer",
    "Researcher",
    "Next.js",
    "Spec-Driven Agentic Development",
    "Synthetic Media Detection",
    "Sylhet",
    "Bangladesh",
  ],
  authors: [{ name: person.name }],
  creator: person.name,
  openGraph: {
    type: "profile",
    title: `${person.name} — ${person.role}`,
    description: person.statement,
    siteName: person.name,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} — ${person.role}`,
    description: person.statement,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f3f0e9",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dubai.variable} ${ralgine.variable} ${wildMagnolia.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full" suppressHydrationWarning>
        <Grain />
        {children}
      </body>
    </html>
  );
}
