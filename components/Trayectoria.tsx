import AnimateIn from "./AnimateIn";

const hitos = [
  {
    periodo: "2022 — Actualidad",
    rol: 'Vicedirectora — Hogar y Centro de Día "Dinad"',
    detalle: "Supervisión de 60 empleados",
  },
  {
    periodo: "1999 — 2022",
    rol: "Psicóloga y Coordinadora — Hogares del GCBA",
    detalle: "Atención a personas en situación de calle",
  },
  {
    periodo: "1997 — Actualidad",
    rol: "Consultorio psicológico privado",
    detalle: "Atención clínica individual",
  },
  {
    periodo: "2007 — 2012",
    rol: 'Psicóloga y tallerista — Residencia "Neve Shalom"',
    detalle: "Adultos mayores y estimulación cognitiva",
  },
  {
    periodo: "1997 — 1999",
    rol: "Hospital Presidente Perón de Avellaneda",
    detalle: "Práctica hospitalaria",
  },
];

const stats = [
  "+28 años de experiencia clínica",
  "+23 años en el GCBA coordinando equipos y programas sociales",
  "Supervisión de equipos de hasta 60 profesionales",
  "Talleres y charlas en ámbitos hospitalarios, sociales y comunitarios",
];

const badges = [
  "FESCAS",
  "Liderazgo",
  "Gerontología",
  "Prevención de adicciones",
  "Trabajo con familias en riesgo",
];

export default function Trayectoria() {
  return (
    <section id="trayectoria" className="relative py-20 lg:py-28">
      <div
        className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-sage/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <AnimateIn>
          <h2 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl">
            Trayectoria
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-charcoal/70">
            Una carrera dedicada al acompañamiento humano en contextos clínicos,
            sociales y comunitarios.
          </p>
        </AnimateIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {stats.map((stat, index) => (
            <AnimateIn key={stat} delay={index * 0.08}>
              <div className="rounded-2xl bg-white p-6 shadow-soft">
                <p className="font-medium leading-relaxed text-charcoal/80">
                  {stat}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <div className="relative mt-16">
          <div
            className="absolute left-4 top-0 hidden h-full w-0.5 bg-sage/20 md:block"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {hitos.map((hito, index) => (
              <AnimateIn key={hito.rol} delay={index * 0.1}>
                <div className="relative flex gap-6 md:gap-10">
                  <div className="hidden flex-shrink-0 md:block">
                    <div className="relative z-10 h-8 w-8 rounded-full border-4 border-cream bg-sage" />
                  </div>
                  <div className="flex-1 rounded-2xl border border-charcoal/5 bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-card">
                    <span className="text-sm font-semibold text-sage">
                      {hito.periodo}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-semibold text-charcoal">
                      {hito.rol}
                    </h3>
                    <p className="mt-1 text-sm text-charcoal/65">
                      {hito.detalle}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        <AnimateIn delay={0.2}>
          <div className="mt-12">
            <h3 className="mb-4 font-display text-xl font-semibold text-charcoal">
              Formación continua
            </h3>
            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-sand/40 bg-sand/10 px-4 py-1.5 text-sm font-medium text-charcoal/75"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
