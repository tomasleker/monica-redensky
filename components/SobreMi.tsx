import AnimateIn from "./AnimateIn";
import { GraduationCap } from "lucide-react";

const educacion = [
  "Licenciatura en Psicología — UBA (1997)",
  "Postgrado en Psicología Social — UNQ",
  "Formación en EDITTI",
];

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="relative py-20 lg:py-28">
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-sand/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <AnimateIn>
          <h2 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl">
            Sobre mí
          </h2>
        </AnimateIn>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <AnimateIn delay={0.1}>
            <p className="text-lg leading-relaxed text-charcoal/80">
              Soy psicóloga con más de 28 años de experiencia en atención
              clínica, coordinación de equipos y trabajo con comunidades. A lo
              largo de mi carrera acompañé a niños, adolescentes, adultos y
              familias en distintos contextos — desde hospitales públicos hasta
              centros de atención social. Hoy ofrezco sesiones individuales
              virtuales con la misma dedicación y compromiso de siempre.
            </p>
            <span className="mt-6 inline-block rounded-full bg-sage/10 px-4 py-2 text-sm font-semibold text-sage">
              M.N. 28353 — UBA
            </span>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="rounded-2xl bg-white p-8 shadow-card">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/10">
                  <GraduationCap className="h-5 w-5 text-sage" />
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal">
                  Formación
                </h3>
              </div>
              <ul className="space-y-3">
                {educacion.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-charcoal/75"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
