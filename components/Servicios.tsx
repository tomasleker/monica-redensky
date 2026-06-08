import AnimateIn from "./AnimateIn";
import {
  Brain,
  Lightbulb,
  Sprout,
  User,
  Monitor,
  HeartHandshake,
} from "lucide-react";

const servicios = [
  {
    icon: Sprout,
    title: "Adolescencia",
    description: "Acompañamiento en una etapa clave de cambios y crecimiento",
  },
  {
    icon: User,
    title: "Adultos",
    description: "Atención clínica individual en psicoanálisis y TCC",
  },
  {
    icon: HeartHandshake,
    title: "Adultos mayores",
    description: "Discapacidad y acompañamiento",
  },
  {
    icon: Brain,
    title: "Psicoanálisis",
    description: "Enfoque clínico para elaborar conflictos y vínculos",
  },
  {
    icon: Lightbulb,
    title: "Terapia cognitivo conductual",
    description: "Herramientas concretas para ansiedad, crisis y cambios",
  },
  {
    icon: Monitor,
    title: "Sesiones virtuales",
    description: "Flexibilidad horaria, desde cualquier lugar",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <h2 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl">
            Servicios
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-charcoal/70">
            Especialista en adultos, adultos mayores y adolescencia. Psicoanálisis,
            TCC y acompañamiento profesional en consultorio virtual.
          </p>
        </AnimateIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio, index) => (
            <AnimateIn key={servicio.title} delay={index * 0.1}>
              <div className="group h-full rounded-2xl border border-charcoal/5 bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sage/20 hover:shadow-card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sage/10 transition-colors group-hover:bg-sage/20">
                  <servicio.icon className="h-6 w-6 text-sage" />
                </div>
                <h3 className="font-display text-lg font-semibold text-charcoal">
                  {servicio.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                  {servicio.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
