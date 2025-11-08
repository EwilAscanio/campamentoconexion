import { Phone, Mail, Instagram, Globe, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Teléfono",
      value: "0422-6461427",
      href: "tel:+584226461427",
      color: "primary",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@campamentoconexionve",
      href: "https://instagram.com/campamentoconexionve",
      color: "secondary",
    },
    {
      icon: Youtube,
      label: "YouTube",
      value: "@campamentoconexion",
      href: "https://www.youtube.com/@campamentoconexion",
      color: "accent",
    },
    // {
    //   icon: Globe,
    //   label: "Sitio Web",
    //   value: "www.campamentoconexion.com",
    //   href: "https://www.campamentoconexion.com",
    //   color: "accent",
    // },
    {
      icon: Mail,
      label: "Email",
      value: "campamentoconexionve@gmail.com",
      href: "mailto:campamentoconexionve@gmail.com",
      color: "primary",
    },
  ];

  return (
    <section id="contacto" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gradient">
            Conéctate Con Nosotros
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground">
            ¿Tienes preguntas? ¡Estamos aquí para ayudarte!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] group cursor-pointer"
              >
                <a href={contact.href} target="_blank" rel="noopener noreferrer">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`w-14 h-14 mx-auto bg-${contact.color}/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-7 h-7 text-${contact.color}`} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-muted-foreground mb-2 uppercase tracking-wider">
                        {contact.label}
                      </h3>
                      <p className="text-sm font-semibold text-foreground break-all">
                        {contact.value}
                      </p>
                    </div>
                  </CardContent>
                </a>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary/20 text-center">
          <h3 className="text-3xl md:text-4xl font-black mb-6 text-gradient">
            ¡No Te Quedes Fuera!
          </h3>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Los cupos son limitados. Asegura tu lugar en este increíble campamento y vive una experiencia transformadora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="xl"
              asChild
            >
              <a href="tel:+584226461427">
                <Phone className="w-5 h-5" />
                Llamar Ahora
              </a>
            </Button>
            <Button 
              variant="accent" 
              size="xl"
              asChild
            >
              <a href="https://instagram.com/campamentoconexionve" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
                Síguenos
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Contact;
