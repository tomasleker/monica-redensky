const navLinks = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#obras-sociales", label: "Obras sociales" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-charcoal py-12 text-white/80">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold text-white">
              Monica Elena Redensky
            </p>
            <p className="mt-1 text-sm">Lic. en Psicología — M.N. 28353</p>
            <p className="mt-3 text-sm text-white/60">
              Sesiones virtuales — Buenos Aires, Argentina
            </p>
          </div>

          <nav>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-sand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-white/50">
            Toda la información de este sitio es confidencial. Las sesiones se
            realizan bajo secreto profesional.
          </p>
          <p className="mt-2 text-xs text-white/40">
            © {new Date().getFullYear()} Monica Elena Redensky. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
