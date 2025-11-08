"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail, Instagram, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/hero-background.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Logo/Brand */}
          <div className="space-y-2">
            <img
              src="/logoconexion.png"
              alt="CONEXIÓN 2026"
              className="w-full max-w-sm mx-auto h-auto object-contain drop-shadow-lg"
              style={{
                filter: 'drop-shadow(0 0 20px hsl(292 91% 73% / 0.5))',
                maxHeight: 'clamp(100px, 12vh, 150px)'
              }}
            />
          </div>

          {/* Main Title */}
          <div className="px-4 mb-4">
            <img
              src="/permanecer.png"
              alt="PERMANECER"
              className="w-full max-w-4xl mx-auto h-auto object-contain drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 0 40px hsl(292 91% 73% / 0.8)) drop-shadow(0 0 80px hsl(292 91% 73% / 0.6))',
                maxHeight: 'clamp(200px, 30vh, 400px)'
              }}
            />
          </div>

          {/* Bible Verse */}
          <div className="max-w-3xl mx-auto space-y-2">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed px-4">
              "El que permanece en mí, y yo en él, éste lleva mucho fruto: porque separados de mí ustedes nada pueden hacer"
            </p>
            <p className="text-primary font-semibold text-lg">
              Juan 15:5
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              variant="hero" 
              size="xl"
              className="min-w-[200px]"
              onClick={() => {
                const contactSection = document.getElementById('contacto');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Inscríbete Ahora
            </Button>
            <Button 
              variant="accent" 
              size="xl"
              className="min-w-[200px]"
              onClick={() => {
                const detailsSection = document.getElementById('detalles');
                detailsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver Detalles
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <div className="w-6 h-10 mx-auto border-2 border-primary rounded-full flex justify-center p-1">
              <div className="w-1 h-3 bg-primary rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />
    </section>
  );
};

export default Hero;
