import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "@/styles/globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Monica Redensky — Psicoanálisis y TCC | Sesiones Virtuales",
  description:
    "Psicoanálisis y terapia cognitivo conductual con Lic. Monica Redensky (M.N. 28353). Más de 28 años de experiencia. Sesiones virtuales para adolescentes y adultos. Buenos Aires.",
  openGraph: {
    title: "Monica Redensky — Psicoanálisis y TCC",
    description:
      "Más de 28 años de experiencia. Sesiones virtuales de psicoanálisis y TCC para adolescentes y adultos.",
    url: "https://monica-redensky.vercel.app",
    siteName: "Monica Redensky Psicóloga",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
