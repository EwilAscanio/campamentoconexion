"use client";

import { useRef, useEffect } from "react";
import { Music } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import EventDetails from "@/components/EventDetails";
import PaymentMethods from "@/components/PaymentMethods";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.muted = !audioRef.current.muted;
      }
    }
  };

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
        } catch (error) {
          console.log('AutoPlay blocked by browser', error);
        }
      }
    };
    playAudio();
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <EventDetails />
        <PaymentMethods />
        <Contact />
      </main>
      <Footer />

      {/* Audio de fondo */}
      <audio ref={audioRef} autoPlay loop style={{ display: 'none' }}>
        <source src="/cancion.mp3" type="audio/mp3" />
      </audio>

      {/* Botón de Música Flotante */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={toggleAudio}
          className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        >
          <Music className="w-6 h-6" />
        </button>
      </div>

      {/* WhatsApp Button Flotante */}
      <div className="fixed bottom-6 right-6 z-50">
        <WhatsAppButton variant="floating" className="w-14 h-14 p-0 shadow-2xl hover:scale-110" />
      </div>
    </div>
  );
}
