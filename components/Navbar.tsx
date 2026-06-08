"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#obras-sociales", label: "Obras sociales" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-display text-lg font-semibold text-charcoal transition-colors hover:text-sage"
        >
          Monica Redensky
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-charcoal/80 transition-colors hover:text-sage"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden rounded-full bg-sage px-5 py-2 text-sm font-medium text-white transition-all hover:bg-sage-dark hover:shadow-soft md:inline-block"
        >
          Reservar consulta
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-charcoal transition-colors hover:bg-charcoal/5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-charcoal/10 bg-white/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-charcoal/80 transition-colors hover:bg-sage/10 hover:text-sage"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contacto"
                onClick={handleLinkClick}
                className="block rounded-full bg-sage px-5 py-2.5 text-center text-sm font-medium text-white transition-all hover:bg-sage-dark"
              >
                Reservar consulta
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
