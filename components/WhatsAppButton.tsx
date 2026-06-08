"use client";

import WhatsAppIcon from "./WhatsAppIcon";

const WHATSAPP_URL =
  "https://wa.me/5491158273333?text=Hola%20Monica%2C%20quiero%20consultar%20sobre%20sesiones%20virtuales";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="h-8 w-8 text-white" />
    </a>
  );
}
