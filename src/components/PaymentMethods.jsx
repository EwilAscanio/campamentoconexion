"use client";

import { CreditCard, Smartphone, Building2, DollarSign, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PaymentMethods = () => {

  const paymentMethods = [
    // {
    //   id: "zelle",
    //   icon: DollarSign,
    //   title: "Zelle",
    //   description: "Pago instantáneo desde USA",
    //   color: "primary",
    //   details: {
    //     email: "campamentoconexionve@gmail.com",
    //     phone: "+1 (XXX) XXX-XXXX",
    //   },
    // },
    {
      id: "pago-movil",
      icon: Smartphone,
      title: "Pago Móvil",
      description: "Transferencia inmediata",
      color: "secondary",
      details: {
        banco: "Banco de Venezuela",
        telefono: "0424-1234567",
        cedula: "V-12345678",
      },
    },
    // {
    //   id: "transferencia",
    //   icon: Building2,
    //   title: "Transferencia Bancaria",
    //   description: "Bancos nacionales",
    //   color: "accent",
    //   details: {
    //     banco: "Banco de Venezuela",
    //     titular: "Campamento Conexión",
    //     cuenta: "0102-XXXX-XXXX-XXXX-XXXX",
    //     rif: "J-XXXXXXXX-X",
    //   },
    // },
    {
      id: "paypal",
      icon: Wallet,
      title: "PayPal",
      description: "Pago internacional seguro",
      color: "primary",
      details: {
        enlace: "https://paypal.me/juanipro?country.x=VE&locale.x=es_XC",
        descripcion: "Pago seguro con PayPal",
        soporte: "Disponible 24/7",
      },
    },
    {
      id: "binance",
      icon: Wallet,
      title: "Binance",
      description: "Criptomonedas y USDT",
      color: "secondary",
      details: {
        enlace: "https://s.binance.com/vwSpX2M1",
        descripcion: "Pago con criptomonedas Abono minimo 20$",
        monedas: "USDT y BTC",
      },
    },
    // {
    //   id: "efectivo",
    //   icon: CreditCard,
    //   title: "Efectivo",
    //   description: "Pago en persona",
    //   color: "accent",
    //   details: {
    //     ubicacion: "Oficinas del Campamento",
    //     horario: "Lunes a Viernes: 9am - 5pm",
    //     contacto: "0422-6461427",
    //   },
    // },
  ];

  return (
    <section id="pagos" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gradient">
            Métodos de Pago
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground">
            Elige el método que más te convenga
          </p>
        </div>

        {/* Payment Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {paymentMethods.map((method) => {
            const Icon = method.icon;
            return (
              <Card key={method.id} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] group">
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto bg-${method.color}/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 text-${method.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {method.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {method.description}
                    </p>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-full">
                        Ver Detalles
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-3">
                          <Icon className={`w-6 h-6 text-${method.color}`} />
                          {method.title}
                        </DialogTitle>
                        <DialogDescription>
                          Información para realizar tu pago
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        {Object.entries(method.details).map(([key, value]) => (
                          <div key={key} className="space-y-1">
                            <p className="text-sm font-medium text-muted-foreground capitalize">
                              {key.replace("-", " ")}
                            </p>
                            <p className="text-base font-semibold bg-muted p-3 rounded-lg">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Botón de enlace solo para métodos que tienen enlaces válidos */}
                      {method.details.enlace &&
                       method.details.enlace !== "Enlace de PayPal próximamente" &&
                       method.details.enlace.startsWith('http') && (
                        <div className="pt-4 border-t border-border/50">
                          <Button
                            variant="hero"
                            className="w-full"
                            onClick={() => window.open(method.details.enlace, '_blank')}
                          >
                            Ir al Sitio de Pago
                          </Button>
                        </div>
                      )}

                      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                        <p className="text-sm text-foreground/80">
                          <strong>Importante:</strong> Después de realizar el pago, envía tu comprobante a nuestro WhatsApp o correo para confirmar tu inscripción.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Payment Info Banner */}
        <Card className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-sm border-primary/20">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-black text-gradient">
                ¿Tienes dudas sobre el pago?
              </h3>
              <p className="text-foreground/80 max-w-2xl mx-auto">
                Nuestro equipo está disponible para ayudarte con cualquier pregunta sobre métodos de pago, confirmación de transferencias o cuotas especiales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="tel:+584226461427">
                    Contactar por Teléfono
                  </a>
                </Button>
                <Button variant="accent" size="lg" asChild>
                  <a href="https://wa.me/584226461427" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PaymentMethods;
