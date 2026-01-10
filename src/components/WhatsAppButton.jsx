"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = ({ className = "", variant = "default" }) => {
  const phoneNumber = "+5804123551408";
  const message = "Hola, me gustaría obtener más información sobre el Campamento Conexión 2026";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (variant === "floating") {
    return (
      <button
        onClick={handleWhatsAppClick}
        className={`bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group rounded-full ${className}`}
        title="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="sr-only">WhatsApp</span>
      </button>
    );
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={`bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
      size="lg"
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      WhatsApp
    </Button>
  );
};

export default WhatsAppButton;
