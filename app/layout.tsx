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
  title: "Monica Redensky — Psicóloga | Sesiones Virtuales",
  description:
    "Licenciada en Psicología (M.N. 28353) con más de 28 años de experiencia. Sesiones virtuales para niños, adolescentes y adultos. Buenos Aires.",
  openGraph: {
    title: "Monica Redensky — Psicóloga",
    description:
      "Más de 28 años acompañando procesos de cambio. Sesiones virtuales.",
    url: "https://tu-proyecto.vercel.app",
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
