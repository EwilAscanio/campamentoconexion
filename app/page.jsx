"use client";

import { useRef, useEffect, useState } from "react";
import { Music, VolumeX } from "lucide-react"; // Importa VolumeX si quieres mostrar icono de mute
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
  const [isPlaying, setIsPlaying] = useState(false);

  // Función para controlar el botón flotante
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(e => console.error("Error al reproducir:", e));
      }
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    
    // 1. Intentar reproducir automáticamente (probablemente fallará en Chrome/Safari)
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Si el navegador lo permite (ej: Firefox a veces), marcamos como sonando
          setIsPlaying(true);
        })
        .catch(() => {
          // 2. Si falla (bloqueo del navegador), esperamos la PRIMERA interacción del usuario
          console.log("Autoplay bloqueado. Esperando interacción del usuario.");
          
          const enableAudioOnInteraction = () => {
            audio.play()
              .then(() => {
                setIsPlaying(true);
                // Removemos los listeners una vez que logramos reproducir
                document.removeEventListener('click', enableAudioOnInteraction);
                document.removeEventListener('touchstart', enableAudioOnInteraction);
                document.removeEventListener('keydown', enableAudioOnInteraction);
              })
              .catch(e => console.error("Aun no se puede reproducir", e));
          };

          // Escuchamos clics, toques o teclas en CUALQUIER lugar de la página
          document.addEventListener('click', enableAudioOnInteraction);
          document.addEventListener('touchstart', enableAudioOnInteraction);
          document.addEventListener('keydown', enableAudioOnInteraction);
        });
    }
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
      <audio ref={audioRef} loop preload="auto" style={{ display: 'none' }}>
        <source src="/cancion.mp3" type="audio/mp3" />
      </audio>

      {/* Botón de Música Flotante */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={toggleAudio}
          className={`w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center ${
            isPlaying ? "bg-primary text-primary-foreground animate-pulse" : "bg-gray-400 text-white"
          }`}
        >
          {/* Cambiamos el icono visualmente si está sonando o no */}
          {isPlaying ? <Music className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
        </button>
      </div>

      {/* WhatsApp Button Flotante */}
      <div className="fixed bottom-6 right-6 z-50">
        <WhatsAppButton variant="floating" className="w-14 h-14 p-0 shadow-2xl hover:scale-110" />
      </div>
    </div>
  );
}