"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { QRCodeSVG } from "qrcode.react";
import { Search, Download, AlertTriangle } from "lucide-react";
import html2canvas from "html2canvas";

export default function QrGenerator() {
  const [cedula, setCedula] = useState("");
  const [acampante, setAcampante] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const buscarAcampante = async () => {
    if (!cedula.trim()) {
      setError("Por favor ingrese su número de cédula");
      return;
    }
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch('/listado_acampantes.json');
      const data = await response.json();
      const encontrado = data.find(item => item.cedula.toString() === cedula.trim());
      if (encontrado) {
        setAcampante(encontrado);
      } else {
        setAcampante(null);
        setError("No se encontró ningún acampante con esa cédula.");
      }
    } catch (err) {
      setError("Error al buscar. Verifica la conexión.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') buscarAcampante();
  };

  // --- FUNCIÓN DE DESCARGA HÍBRIDA ---
  const handleDownload = async () => {
    const cardElement = document.getElementById('qr-card');
    if (!cardElement) return;

    try {
      const canvas = await html2canvas(cardElement, {
        scale: 3, // Alta calidad
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
        // ESTE ES EL TRUCO: Modificamos el clon antes de la foto
        onclone: (clonedDoc) => {
          const clonedCard = clonedDoc.getElementById('qr-card');
          const clonedContent = clonedDoc.getElementById('qr-content');
          const clonedInfo = clonedDoc.getElementById('qr-info');

          if (clonedCard && clonedContent && clonedInfo) {
            // 1. Forzamos ancho de carnet horizontal
            clonedCard.style.width = '650px'; 
            clonedCard.style.minWidth = '650px';
            
            // 2. Cambiamos a fila (horizontal) y alineamos
            clonedContent.style.display = 'flex';
            clonedContent.style.flexDirection = 'row';
            clonedContent.style.alignItems = 'center';
            clonedContent.style.justifyContent = 'space-between';
            clonedContent.style.gap = '20px';

            // 3. Ajustamos textos para que no se corten en horizontal
            clonedInfo.style.textAlign = 'left';
            clonedInfo.style.flex = '1';
          }
        }
      });

      const image = canvas.toDataURL("image/png", 1.0);
      const downloadLink = document.createElement("a");
      downloadLink.href = image;
      downloadLink.download = `Pase-Comedor-${acampante.cedula}.png`;
      downloadLink.click();
    } catch (err) {
      console.error("Error al generar imagen:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Encabezado */}
          <div className="text-center mb-10 md:mb-12">
            <h1 className="text-4xl md:text-6xl font-black text-gradient mb-3">
              Pase de Comedor
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Ingresa tu cédula para generar tu código QR. <strong>Guarda la imagen</strong> en tu teléfono antes de llegar al campamento.
            </p>
          </div>

          {/* Formulario de búsqueda (Responsive) */}
          <Card className="mb-8 border-none shadow-xl bg-gradient-to-br from-primary/10 via-background to-secondary/10 backdrop-blur-sm">
            <CardContent className="p-5 md:p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 space-y-2">
                  <Label htmlFor="cedula" className="font-bold text-white">Número de Cédula</Label>
                  <Input
                    id="cedula"
                    type="tel"
                    inputMode="numeric"
                    placeholder="Ej: 12345678"
                    value={cedula}
                    onChange={(e) => setCedula(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="text-lg py-6 shadow-inner bg-white text-slate-950 focus:ring-primary/80 focus:ring-2 focus:ring-offset-0 focus-visible:ring-primary/80 focus-visible:ring-2 focus-visible:ring-offset-0"
                  />
                </div>
                <div className="flex items-end w-full md:w-auto">
                  <Button 
                    onClick={buscarAcampante}
                    disabled={isLoading}
                    className="w-full md:h-[52px] md:px-10 text-lg font-bold shadow-md bg-primary hover:bg-primary/90"
                  >
                    {isLoading ? "Buscando..." : "Buscar"}
                  </Button>
                </div>
              </div>
              {error && (
                <div className="flex items-center gap-2 text-red-600 mt-3 font-semibold text-sm bg-red-50 p-3 rounded-lg border border-red-100">
                  <AlertTriangle className="w-5 h-5" /> {error}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Resultado */}
          {acampante && (
            <div className="space-y-8 animate-in fade-in-50 duration-500">
              
              {/* TARJETA DE VISUALIZACIÓN (Optimized for Mobile Web) */}
              <div className="flex justify-center px-2">
                {/* Nota: IDs 'qr-card', 'qr-content', 'qr-info' son vitales para el clon de descarga */}
                <Card id="qr-card" className="border-2 border-slate-100 shadow-2xl w-full max-w-md md:max-w-2xl mx-auto bg-white overflow-hidden rounded-2xl relative">
                  
                  <div className="bg-primary h-3 w-full"></div>
                  
                  <CardContent className="p-6 md:p-8">
                    {/* Contenedor Principal: Vertical en móvil, Horizontal en escritorio (md:) */}
                    <div id="qr-content" className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                      
                      {/* Información del acampante (Arriba en móvil, Izquierda en escritorio) */}
                      <div id="qr-info" className="flex-1 space-y-4 text-center md:text-left w-full">
                        <div>
                          <p style={{ fontSize: '11px', fontWeight: 'bold', color: '#64748b', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                            Campamento Conexión 2026
                          </p>
                          {/* Ajuste de fuente responsivo para que no se corte en móvil */}
                          <h2 className="text-2xl md:text-3xl font-black text-slate-950 uppercase leading-tight mt-1">
                            {acampante.nombres} <br/> {acampante.apellidos}
                          </h2>
                          <p className="text-xl md:text-2xl text-primary font-bold mt-2 md:mt-3">
                            V-{acampante.cedula}
                          </p>
                        </div>
                        
                        {/* Badge de Alimentación Forzado */}
                        <div style={{ backgroundColor: '#f1f5f9', padding: '8px 16px', borderRadius: '10px', display: 'inline-block', border: '1px solid #cbd5e1' }}>
                          <span style={{ fontSize: '13px', fontWeight: '800', color: '#334155', textTransform: 'uppercase', display: 'block' }}>
                            Pase de Alimentación
                          </span>
                        </div>
                      </div>

                      {/* Código QR (Abajo en móvil, Derecha en escritorio) */}
                      <div className="flex-shrink-0 mt-2 md:mt-0">
                        <div className="bg-white p-4 rounded-2xl shadow-inner border border-slate-100">
                          <QRCodeSVG
                            value={acampante.cedula.toString()}
                            size={160} // Tamaño ideal para lectura
                            level="H"
                            includeMargin={true}
                          />
                        </div>
                      </div>
                      
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Botón de Descarga y Advertencia */}
              <div className="flex flex-col items-center gap-5 pt-2">
                <Button 
                  onClick={handleDownload}
                  size="lg"
                  className="w-full md:w-auto px-12 h-14 text-lg font-black gap-3 shadow-xl hover:scale-105 active:scale-95 transition-all bg-primary hover:bg-primary/90 text-white rounded-full"
                >
                  <Download className="w-6 h-6" />
                  Descargar mi Pase
                </Button>
                
                <div className="text-center bg-red-50 text-red-700 p-4 rounded-xl border border-red-100 max-w-sm shadow-inner animate-pulse">
                  <p className="font-extrabold text-sm uppercase flex items-center justify-center gap-2">
                    <AlertTriangle className="w-5 h-5" /> ¡ACCIÓN REQUERIDA!
                  </p>
                  <p className="text-sm font-medium mt-1">
                    Descarga esta imagen AHORA y guárdala en tus fotos. <strong>No habrá internet ni señal</strong> en el campamento.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Mensaje inicial */}
          {!acampante && !error && !isLoading && (
            <Card className="border-none shadow-sm bg-white/30 backdrop-blur-sm mt-10">
              <CardContent className="p-8 text-center text-primary font-medium">
                Ingresa tu número de cédula arriba para generar tu pase personal de comedor.
              </CardContent>
            </Card>
          )}

        </div>
      </div>
    </div>
  );
}