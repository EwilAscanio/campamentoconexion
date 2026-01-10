import { Phone, Mail, Instagram, Globe, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TikTokIcon = ({ className }) => (
  <svg
    fill="currentColor"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
  </svg>
);

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Teléfono",
      value: "0412-3551408",
      href: "tel:+584123551408",
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
      icon: TikTokIcon,
      label: "TikTok",
      value: "@campamento.conexion",
      href: "https://www.tiktok.com/@campamento.conexion",
      color: "secondary",
    },
    // {
    //   icon: Mail,
    //   label: "Gmail.com",
    //   value: "campamentoconexionve",
    //   href: "mailto:campamentoconexionve@gmail.com",
    //   color: "primary",
    // },
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
            <Button
              variant="hero"
              size="xl"
              asChild
            >
              <a href="mailto:campamentoconexionve@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="w-5 h-5" />
                Email
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
