"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { QRCodeSVG } from "qrcode.react";
import { Search } from "lucide-react";

export default function QrGenerator() {
  const [cedula, setCedula] = useState("");
  const [acampante, setAcampante] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Cargar datos del listado de acampantes
  useEffect(() => {
    // Los datos están en public/listado_acampantes.json
    // Podrías cargarlos con fetch o importarlos directamente
  }, []);

  const buscarAcampante = async () => {
    if (!cedula.trim()) {
      setError("Por favor ingrese un número de cédula");
      return;
    }

    setIsLoading(true);
    setError("");
    
    try {
      // Buscar en el archivo JSON
      const response = await fetch('/listado_acampantes.json');
      const data = await response.json();
      
      const encontrado = data.find(item => 
        item.cedula.toString() === cedula.trim()
      );

      if (encontrado) {
        setAcampante(encontrado);
      } else {
        setAcampante(null);
        setError("No se encontró ningún acampante con esa cédula");
      }
    } catch (err) {
      setError("Error al buscar el acampante");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      buscarAcampante();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black text-gradient mb-4">
              Generador de QR
            </h1>
            <p className="text-lg text-muted-foreground">
              Busca un acampante por su número de cédula y genera su código QR
            </p>
          </div>

          {/* Formulario de búsqueda */}
          <Card className="mb-8 border-none shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Search className="w-6 h-6" />
                Buscar Acampante
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <div className="flex-1 space-y-2">
                  <Label htmlFor="cedula">Número de Cédula</Label>
                  <Input
                    id="cedula"
                    placeholder="Ingrese el número de cédula"
                    value={cedula}
                    onChange={(e) => setCedula(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="text-lg py-6"
                  />
                </div>
                <div className="flex items-end">
                  <Button 
                    onClick={buscarAcampante}
                    disabled={isLoading}
                    className="h-full px-8 text-lg"
                  >
                    {isLoading ? "Buscando..." : "Buscar"}
                  </Button>
                </div>
              </div>
              {error && (
                <p className="text-red-500 mt-2">{error}</p>
              )}
            </CardContent>
          </Card>

          {/* Resultado */}
          {acampante && (
            <Card id="qr-card" className="border-none shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  {/* Información del acampante */}
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h2 className="text-xl font-bold text-foreground">
                        {acampante.nombres} {acampante.apellidos}
                      </h2>
                      <p className="text-lg text-primary font-semibold">
                        Cédula: {acampante.cedula}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        onClick={() => window.print()}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        Imprimir
                      </Button>
                      <Button 
                        onClick={() => {
                          // Descargar tarjeta completa como imagen
                          const card = document.getElementById('qr-card');
                          
                          // Crear un SVG que contenga todo el card
                          const serializer = new XMLSerializer();
                          const svgData = serializer.serializeToString(card);
                          
                          // Crear canvas para renderizar
                          const canvas = document.createElement('canvas');
                          const ctx = canvas.getContext('2d');
                          
                          // Obtener dimensiones reales del card
                          const rect = card.getBoundingClientRect();
                          canvas.width = rect.width;
                          canvas.height = rect.height;
                          
                          // Crear un SVG con dimensiones y namespace correctos
                          const svgWithSize = `
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                 width="${rect.width}" 
                                 height="${rect.height}">
                              <foreignObject width="100%" height="100%">
                                <div xmlns="http://www.w3.org/1999/xhtml" style="width: 100%; height: 100%;">
                                  ${card.innerHTML}
                                </div>
                              </foreignObject>
                            </svg>`;
                          
                          const img = new Image();
                          
                          img.onload = () => {
                            ctx.fillStyle = 'white';
                            ctx.fillRect(0, 0, canvas.width, canvas.height);
                            ctx.drawImage(img, 0, 0);
                            const pngFile = canvas.toDataURL("image/png");
                            const downloadLink = document.createElement('a');
                            downloadLink.download = `tarjeta-${acampante.cedula}.png`;
                            downloadLink.href = pngFile;
                            downloadLink.click();
                          };
                          
                          img.onerror = (err) => {
                            console.error('Error al cargar la imagen:', err);
                            alert('Error al generar la imagen. Por favor intente de nuevo.');
                          };
                          
                          img.src = 'data:image/svg+xml;base64,' + btoa(svgWithSize);
                        }}
                        size="sm"
                        className="flex-1"
                      >
                        Descargar
                      </Button>
                    </div>
                  </div>

                  {/* Código QR */}
                  <div className="flex justify-center items-center">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <div className="text-center mb-2">
                        <h3 className="font-semibold text-sm">Código QR</h3>
                      </div>
                      <div className="flex justify-center">
                        <QRCodeSVG
                          id="qr-code"
                          value={acampante.cedula.toString()}
                          size={192}
                          level="H"
                          includeMargin={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Mensaje cuando no hay resultados */}
          {!acampante && cedula && !error && !isLoading && (
            <Card className="border-none shadow-xl">
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">
                  No se ha realizado una búsqueda o no se encontró ningún acampante.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}