import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import PaymentMethods from "@/components/PaymentMethods";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <EventDetails />
        <PaymentMethods />
        <Contact />
      </main>
      <Footer />

      {/* WhatsApp Button Flotante */}
      <div className="fixed bottom-6 right-6 z-50">
        <WhatsAppButton variant="floating" className="w-14 h-14 p-0 shadow-2xl hover:scale-110" />
      </div>
    </div>
  );
}
