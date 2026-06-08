import AnimateIn from "./AnimateIn";
import { Quote } from "lucide-react";

// TODO: reemplazar con testimonios reales
const testimonios = [
  {
    texto:
      "Encontré en Monica una profesional que me escucha de verdad. Después de años sin animarme a pedir ayuda, las sesiones virtuales me dieron la flexibilidad que necesitaba para empezar.",
    autor: "Paciente adulta, Buenos Aires",
  },
  {
    texto:
      "Llevé a mi hijo de 9 años con Monica y la diferencia fue enorme. Sabe cómo hablarle a los chicos, los entiende y los contiene. A nosotros como familia también nos orientó muchísimo.",
    autor: "Mamá, zona norte GBA",
  },
  {
    texto:
      "Estoy en tratamiento hace más de un año y cada sesión suma. Monica tiene una mirada muy humana, con mucha experiencia real. No es solo teoría.",
    autor: "Paciente adulto, CABA",
  },
  {
    texto:
      "Me ayudó a atravesar un momento muy difícil con mi pareja y mis hijos. Tiene una capacidad enorme para ver lo que está pasando y acompañar sin juzgar.",
    autor: "Paciente adulta, 42 años",
  },
  {
    texto:
      "Lo que más valoro es su trayectoria. Se nota que trabajó en contextos muy distintos y eso le da una profundidad que no encontré en otros profesionales.",
    autor: "Paciente adulto, 55 años",
  },
  {
    texto:
      "Mi hija adolescente empezó terapia con Monica y fue un antes y un después. Supo generar confianza desde la primera sesión y nos orientó como familia para acompañarla mejor.",
    autor: "Madre, CABA",
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className="relative py-20 lg:py-28">
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sand/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <AnimateIn>
          <h2 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl">
            Testimonios
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-charcoal/70">
            Lo que dicen quienes confiaron en mi acompañamiento profesional.
          </p>
        </AnimateIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonios.map((testimonio, index) => (
            <AnimateIn key={testimonio.autor} delay={index * 0.08}>
              <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <Quote className="mb-3 h-6 w-6 text-sand" />
                <p className="flex-1 italic leading-relaxed text-charcoal/75">
                  &ldquo;{testimonio.texto}&rdquo;
                </p>
                <p className="mt-4 text-sm font-medium text-sage">
                  — {testimonio.autor}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
