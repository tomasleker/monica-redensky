"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import AnimateIn from "./AnimateIn";
import { Mail, Send, CheckCircle } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

interface ContactFormData {
  nombre: string;
  email: string;
  whatsapp?: string;
  motivo: string;
  mensaje: string;
}

const motivos = [
  { value: "individual", label: "Individual" },
  { value: "familia", label: "Familia" },
  { value: "ninos", label: "Niños" },
  { value: "otro", label: "Otro" },
];

const WHATSAPP_URL =
  "https://wa.me/5491158273333?text=Hola%20Monica%2C%20quiero%20consultar%20sobre%20sesiones%20virtuales";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setEnviando(true);
    setError("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      const mailtoBody = encodeURIComponent(
        `Nombre: ${data.nombre}\nEmail: ${data.email}\nWhatsApp: ${data.whatsapp || "No indicado"}\nMotivo: ${data.motivo}\n\n${data.mensaje}`
      );
      window.location.href = `mailto:monrede@hotmail.com?subject=Consulta%20-%20${data.motivo}&body=${mailtoBody}`;
      setEnviado(true);
      reset();
      setEnviando(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.nombre,
          from_email: data.email,
          whatsapp: data.whatsapp || "No indicado",
          motivo: data.motivo,
          message: data.mensaje,
          to_email: "monrede@hotmail.com",
        },
        publicKey
      );
      setEnviado(true);
      reset();
    } catch {
      setError(
        "Hubo un error al enviar. Por favor, escribime por WhatsApp o email."
      );
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contacto" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn>
          <h2 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl">
            Contacto y reserva
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-charcoal/70">
            Escribime para coordinar una sesión virtual. Respondo a la brevedad.
          </p>
        </AnimateIn>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <AnimateIn delay={0.1}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label
                  htmlFor="nombre"
                  className="mb-1.5 block text-sm font-medium text-charcoal"
                >
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3 text-charcoal outline-none transition-colors focus:border-sage focus:ring-2 focus:ring-sage/20"
                  {...register("nombre", { required: "El nombre es obligatorio" })}
                />
                {errors.nombre && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.nombre.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-charcoal"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3 text-charcoal outline-none transition-colors focus:border-sage focus:ring-2 focus:ring-sage/20"
                  {...register("email", {
                    required: "El email es obligatorio",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Ingresá un email válido",
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="whatsapp"
                  className="mb-1.5 block text-sm font-medium text-charcoal"
                >
                  WhatsApp <span className="text-charcoal/50">(opcional)</span>
                </label>
                <input
                  id="whatsapp"
                  type="tel"
                  className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3 text-charcoal outline-none transition-colors focus:border-sage focus:ring-2 focus:ring-sage/20"
                  {...register("whatsapp")}
                />
              </div>

              <div>
                <label
                  htmlFor="motivo"
                  className="mb-1.5 block text-sm font-medium text-charcoal"
                >
                  Motivo de consulta
                </label>
                <select
                  id="motivo"
                  className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3 text-charcoal outline-none transition-colors focus:border-sage focus:ring-2 focus:ring-sage/20"
                  {...register("motivo", { required: "Seleccioná un motivo" })}
                >
                  <option value="">Seleccionar...</option>
                  {motivos.map((m) => (
                    <option key={m.value} value={m.label}>
                      {m.label}
                    </option>
                  ))}
                </select>
                {errors.motivo && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.motivo.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="mb-1.5 block text-sm font-medium text-charcoal"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  className="w-full resize-none rounded-xl border border-charcoal/15 bg-cream px-4 py-3 text-charcoal outline-none transition-colors focus:border-sage focus:ring-2 focus:ring-sage/20"
                  {...register("mensaje", {
                    required: "Escribí un mensaje",
                  })}
                />
                {errors.mensaje && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.mensaje.message}
                  </p>
                )}
              </div>

              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}

              {enviado && (
                <div className="flex items-center gap-2 rounded-xl bg-sage/10 px-4 py-3 text-sm text-sage">
                  <CheckCircle className="h-5 w-5" />
                  ¡Consulta enviada! Te responderé pronto.
                </div>
              )}

              <button
                type="submit"
                disabled={enviando}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sage px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-sage-dark hover:shadow-card disabled:opacity-60 sm:w-auto"
              >
                <Send className="h-5 w-5" />
                {enviando ? "Enviando..." : "Enviar consulta"}
              </button>
            </form>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="flex flex-col gap-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-charcoal/5 bg-cream p-6 transition-all duration-300 hover:border-sage/20 hover:shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10 transition-colors group-hover:bg-[#25D366]/20">
                  <WhatsAppIcon className="h-6 w-6 text-[#25D366]" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal">WhatsApp</p>
                  <p className="text-sm text-charcoal/65">11 5827-3333</p>
                </div>
              </a>

              <a
                href="mailto:monrede@hotmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-charcoal/5 bg-cream p-6 transition-all duration-300 hover:border-sage/20 hover:shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/10 transition-colors group-hover:bg-sage/20">
                  <Mail className="h-6 w-6 text-sage" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal">Email</p>
                  <p className="text-sm text-charcoal/65">monrede@hotmail.com</p>
                </div>
              </a>

              <div className="rounded-2xl bg-sage/5 p-6">
                <p className="text-sm leading-relaxed text-charcoal/70">
                  <strong className="text-charcoal">Ubicación:</strong> Buenos
                  Aires, Argentina
                  <br />
                  <strong className="text-charcoal">Modalidad:</strong> Sesiones
                  virtuales
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
