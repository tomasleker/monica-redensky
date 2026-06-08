import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SobreMi from "@/components/SobreMi";
import Servicios from "@/components/Servicios";
import Testimonios from "@/components/Testimonios";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SobreMi />
        <Servicios />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
