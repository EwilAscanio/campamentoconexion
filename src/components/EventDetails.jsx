import { Calendar, DollarSign, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EventDetails = () => {
  const includes = [
    "Transporte ida y vuelta",
    "Hospedaje completo",
    "Todas las comidas",
  ];

  return (
    <section id="detalles" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gradient">
            Detalles del Evento
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </div>

        {/* Details Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Date Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] group">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-muted-foreground mb-2">FECHA</h3>
                <p className="text-2xl md:text-3xl font-black text-foreground">
                  01 al 04
                </p>
                <p className="text-xl font-semibold text-primary">
                  de Abril
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Price Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--secondary)/0.3)] group">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <DollarSign className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-muted-foreground mb-2">PRECIO</h3>
                <p className="text-2xl md:text-3xl font-black text-foreground">
                  105$
                </p>
                <p className="text-xl font-semibold text-secondary">
                  Tasa BCV
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Includes Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)] group">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-muted-foreground mb-2">INCLUYE</h3>
                <div className="space-y-2">
                  {includes.map((item, index) => (
                    <div key={index} className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <p className="text-sm font-medium text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Includes Banner */}
        <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
          <h3 className="text-3xl md:text-4xl font-black text-center mb-6 text-gradient">
            ¡INCLUYE!
          </h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {includes.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-lg font-semibold">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
