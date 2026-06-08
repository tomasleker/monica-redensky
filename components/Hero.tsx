"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: "easeOut" },
      };

  return (
    <section
      id="inicio"
      className="grain-texture relative min-h-screen overflow-hidden pt-24"
    >
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-sage/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-sand/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:gap-16 lg:py-24">
        <motion.div
          className="flex-1 text-center lg:text-left"
          {...fadeUp}
        >
          <p className="mb-4 inline-block rounded-full bg-sage/10 px-4 py-1.5 text-sm font-medium text-sage">
            Psicoanálisis y TCC — Lic. en Psicología M.N. 28353
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl lg:text-[3.25rem]">
            Más de 28 años acompañando procesos de cambio
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/70 lg:text-xl">
            Sesiones virtuales de psicoanálisis y terapia cognitivo conductual — Adolescentes y adultos
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <span className="rounded-full border border-sage/30 bg-sage/5 px-4 py-1.5 text-sm font-medium text-sage">
              Consultorio privado virtual
            </span>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-sage px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-sage-dark hover:shadow-card"
            >
              Reservar una consulta
            </a>
            <a
              href="#sobre-mi"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/20 px-8 py-3.5 text-base font-medium text-charcoal transition-all hover:border-sage hover:text-sage"
            >
              Conocer más
              <ArrowDown size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative flex-shrink-0"
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.7, delay: 0.2, ease: "easeOut" },
              })}
        >
          <div className="relative h-72 w-72 overflow-hidden rounded-[2rem] shadow-card sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <div className="absolute -right-6 -top-6 h-full w-full rounded-[2rem] bg-sage/20" />
            {imageError ? (
              <div className="relative flex h-full w-full items-center justify-center rounded-[2rem] bg-gradient-to-br from-sage/30 to-sand/30">
                <span className="font-display text-5xl font-semibold text-sage/60">
                  MR
                </span>
              </div>
            ) : (
              <Image
                src="/monica.jpg"
                alt="Monica Elena Redensky — Psicóloga"
                fill
                className="relative rounded-[2rem] object-contain"
                priority
                sizes="(max-width: 768px) 288px, 384px"
                onError={() => setImageError(true)}
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
