import AnimateIn from "./AnimateIn";
import { ShieldCheck } from "lucide-react";

const obras = ["Galeno Life", "Swiss Medical", "Consultar por otras coberturas"];

export default function ObrasSociales() {
  return (
    <section id="obras-sociales" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sage/10">
              <ShieldCheck className="h-6 w-6 text-sage" />
            </div>
            <h2 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl">
              Obras sociales
            </h2>
            <p className="mt-4 text-lg text-charcoal/70">
              Atiendo con las siguientes obras sociales:
            </p>
          </div>
        </AnimateIn>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {obras.map((obra, index) => (
            <AnimateIn key={obra} delay={index * 0.1}>
              <div className="rounded-2xl border border-charcoal/5 bg-cream px-8 py-4 text-center shadow-soft transition-all duration-300 hover:border-sage/20 hover:shadow-card">
                <span className="font-display text-lg font-semibold text-charcoal">
                  {obra}
                </span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
