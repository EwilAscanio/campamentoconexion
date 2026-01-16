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

const BinanceIcon = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M15.986 1.019l9.189 9.159-3.396 3.393-5.793-5.793-5.793 5.823-3.396-3.393 9.189-9.189zM4.399 12.605l3.365 3.395-3.363 3.365-3.396-3.365zM15.986 12.607l3.394 3.363-3.395 3.395-3.395-3.365 3.395-3.393zM27.572 12.605l3.423 3.395-3.393 3.395-3.395-3.395zM21.778 18.399l3.396 3.393-9.189 9.189-9.189-9.187 3.396-3.395 5.793 5.823 5.793-5.823z" />
  </svg>
);

const BinanceTotalIcon = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M15.986 1.019l9.189 9.159-3.396 3.393-5.793-5.793-5.793 5.823-3.396-3.393 9.189-9.189zM4.399 12.605l3.365 3.395-3.363 3.365-3.396-3.365zM15.986 12.607l3.394 3.363-3.395 3.395-3.395-3.365 3.395-3.393zM27.572 12.605l3.423 3.395-3.393 3.395-3.395-3.395zM21.778 18.399l3.396 3.393-9.189 9.189-9.189-9.187 3.396-3.395 5.793 5.823 5.793-5.823z" />
  </svg>
);

const PaypalIcon = ({ className }) => (
  <svg
    fill="currentColor"
    width="24"
    height="24"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M424.81,148.79c-.43,2.76-.93,5.58-1.49,8.48-19.17,98-84.76,131.8-168.54,131.8H212.13a20.67,20.67,0,0,0-20.47,17.46L169.82,444.37l-6.18,39.07a10.86,10.86,0,0,0,9.07,12.42,10.72,10.72,0,0,0,1.7.13h75.65a18.18,18.18,0,0,0,18-15.27l.74-3.83,14.24-90,.91-4.94a18.16,18.16,0,0,1,18-15.3h11.31c73.3,0,130.67-29.62,147.44-115.32,7-35.8,3.38-65.69-15.16-86.72A72.27,72.27,0,0,0,424.81,148.79Z"/>
    <path d="M385.52,51.09C363.84,26.52,324.71,16,274.63,16H129.25a20.75,20.75,0,0,0-20.54,17.48l-60.55,382a12.43,12.43,0,0,0,10.39,14.22,12.58,12.58,0,0,0,1.94.15h89.76l22.54-142.29-.7,4.46a20.67,20.67,0,0,1,20.47-17.46h42.65c83.77,0,149.36-33.86,168.54-131.8.57-2.9,1.05-5.72,1.49-8.48h0C410.94,98.06,405.19,73.41,385.52,51.09Z"/>
  </svg>
);

const PagoMovilIcon = ({ className }) => (
  <svg
    fill="currentColor"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M16 2c-7.732 0-14 6.268-14 14s6.268 14 14 14 14-6.268 14-14-6.268-14-14-14zM16 26c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10z"/>
    <path d="M22 12h-12v8h12v-8zM20 18h-8v-4h8v4z"/>
  </svg>
);

const ZelleIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={className}
  >
    <path d="M13.559 24h-2.841a0.483 0.483 0 0 1 -0.483 -0.483v-2.765H5.638a0.667 0.667 0 0 1 -0.666 -0.666v-2.234a0.67 0.67 0 0 1 0.142 -0.412l8.139 -10.382h-7.25a0.667 0.667 0 0 1 -0.667 -0.667V3.914c0 -0.367 0.299 -0.666 0.666 -0.666h4.23V0.483c0 -0.266 0.217 -0.483 0.483 -0.483h2.841c0.266 0 0.483 0.217 0.483 0.483v2.765h4.323c0.367 0 0.666 0.299 0.666 0.666v2.137a0.67 0.67 0 0 1 -0.141 0.41l-8.19 10.481h7.665c0.367 0 0.666 0.299 0.666 0.666v2.477a0.667 0.667 0 0 1 -0.666 0.667h-4.32v2.765a0.483 0.483 0 0 1 -0.483 0.483Z" strokeWidth="1"/>
  </svg>
);

const DollarSignIcon = ({ className }) => (
  <svg
    fill="currentColor"
    viewBox="0 0 32 32"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M16 2c-7.732 0-14 6.268-14 14s6.268 14 14 14 14-6.268 14-14-6.268-14-14-14zM16 26c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10z"/>
    <path d="M18 8h-4v4h4v2h-4v8h-2v-8h-2v-2h2v-4h2v4h4v2z"/>
  </svg>
);

const PaymentMethods = () => {

  const paymentMethods = [
    {
      id: "zelle",
      icon: ZelleIcon,
      title: "Zelle",
      description: "Pago instantáneo desde USA",
      color: "primary",
      details: {
        email: "campamentoconexionve@gmail.com",
        phone: "+1 (XXX) XXX-XXXX",
      },
    },
    {
      id: "pago-movil",
      icon: Smartphone,
      title: "Pago Móvil",
      description: "Transferencia inmediata",
      color: "secondary",
      details: {
        banco: "Banco Nacional de Crédito (BNC)",
        telefono: "0424-4263045",
        cedula: "V-24.644.824",
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
      icon: PaypalIcon,
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
      icon: BinanceIcon,
      title: "Binance Abono Mínimo",
      description: "Criptomonedas y USDT",
      color: "secondary",
      details: {
        enlace: "https://s.binance.com/vwSpX2M1",
        descripcion: "Pago con criptomonedas Abono minimo 20$",
        monedas: "USDT y BTC",
      },
    },
    {
      id: "binanceTotal",
      icon: BinanceTotalIcon,
      title: "Binance Pago Completo",
      description: "Criptomonedas y USDT",
      color: "primary",
      details: {
        enlace: "https://s.binance.com/LlZhLBLM",
        descripcion: "Pago Completo con criptomonedas 105$",
        monedas: "USDT y BTC",
      },
    },
    {
      id: "efectivo",
      icon: CreditCard,
      title: "Efectivo",
      description: "Pago en persona",
      color: "accent",
      details: {
        ubicacion: "Oficinas del Campamento",
        horario: "Lunes a Viernes: 9am - 5pm",
        contacto: "0422-6461427",
      },
    },
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
                  <a href="tel:+584123551408">
                    Contactar por Teléfono
                  </a>
                </Button>
                <Button variant="accent" size="lg" asChild>
                  <a href="https://wa.me/584123551408" target="_blank" rel="noopener noreferrer">
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
