"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { QRCodeSVG } from "qrcode.react";
import { Search, Download } from "lucide-react";
import html2canvas from "html2canvas";

export default function QrGenerator() {
  const [cedula, setCedula] = useState("");
  const [acampante, setAcampante] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const buscarAcampante = async () => {
    if (!cedula.trim()) {
      setError("Por favor ingrese un número de cédula");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Buscar en el archivo JSON local
      const response = await fetch("/listado_acampantes.json");
      const data = await response.json();

      const encontrado = data.find(
        (item) => item.cedula.toString() === cedula.trim()
      );

      if (encontrado) {
        setAcampante(encontrado);
      } else {
        setAcampante(null);
        setError("No se encontró ningún acampante con esa cédula");
      }
    } catch (err) {
      setError(
        "Error al buscar el acampante. Verifica que el archivo JSON exista."
      );
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      buscarAcampante();
    }
  };

  // Función para descargar la tarjeta con estilos exactos
  const handleDownload = async () => {
    const cardElement = document.getElementById("qr-card");

    if (!cardElement) return;

    try {
      const canvas = await html2canvas(cardElement, {
        scale: 2, // Mayor calidad para que la pistola lo lea bien
        useCORS: true,
        backgroundColor: "#ffffff", // Fuerza el fondo blanco
      });

      const image = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = image;
      downloadLink.download = `Pase-Comedor-${acampante.cedula}.png`;
      downloadLink.click();
    } catch (err) {
      console.error("Error al generar la imagen:", err);
      alert("Hubo un error al descargar el pase.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black text-gradient mb-4">
              Pase de Comedor
            </h1>
            <p className="text-lg text-muted-foreground">
              Busca tu número de cédula, genera tu código QR y guárdalo en tu
              teléfono.
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
                    placeholder="Ingrese su número de cédula"
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
                <p className="text-red-500 mt-2 font-medium">{error}</p>
              )}
            </CardContent>
          </Card>

          {/* Resultado */}
          {acampante && (
            <div className="space-y-6">
              {/* Tarjeta a Descargar */}
              <Card
                id="qr-card"
                className="border-2 border-slate-200 shadow-xl max-w-2xl mx-auto bg-white overflow-hidden relative"
              >
                {/* Franja decorativa superior para darle aspecto de carnet */}
                <div className="bg-primary h-3 w-full"></div>

                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Información del acampante */}
                    <div className="space-y-6 text-center md:text-left">
                      <div>
                        <p className="text-sm font-bold text-muted-foreground tracking-widest uppercase mb-1">
                          Campamento Conexión 2026
                        </p>
                        <h2 className="text-2xl font-black text-slate-900 uppercase leading-tight">
                          {acampante.nombres} <br /> {acampante.apellidos}
                        </h2>
                        <p className="text-xl text-primary font-bold mt-2">
                          V-{acampante.cedula}
                        </p>
                      </div>

                      {/* Reemplaza el div de "Pase de Alimentación" por este que tiene estilos forzados */}
                      {/* <div
                        style={{
                          backgroundColor: "#f1f5f9", // Un gris claro (slate-100)
                          padding: "8px 16px",
                          borderRadius: "8px",
                          display: "inline-block",
                          marginTop: "16px",
                          border: "1px solid #e2e8f0", // Añadimos un borde fino para asegurar visibilidad
                        }}
                      >
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: "800",
                            color: "#475569", // Un gris oscuro (slate-600)
                            textTransform: "uppercase",
                            textAlign: "center",
                            margin: 0,
                            fontFamily: "Arial, sans-serif",
                          }}
                        >
                          Pase de Alimentación
                        </p>
                      </div> */}
                      {/* fin pase Alimentación */}
                    </div>

                    {/* Código QR */}
                    <div className="flex justify-center items-center">
                      <div className="bg-white p-4 rounded-xl shadow-sm border-2 border-slate-100">
                        <QRCodeSVG
                          value={acampante.cedula.toString()}
                          size={180}
                          level="H"
                          includeMargin={true}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Botón de acción (Fuera de la tarjeta para que no salga en la foto) */}
              <div className="flex justify-center">
                <Button
                  onClick={handleDownload}
                  size="lg"
                  className="px-10 text-lg font-bold gap-2 shadow-lg hover:scale-105 transition-transform"
                >
                  <Download className="w-5 h-5" />
                  Descargar Pase
                </Button>
              </div>

              <p className="text-center text-red-500 font-bold animate-pulse">
                ⚠️ IMPORTANTE: Descarga esta imagen y guárdala en tus fotos
                favoritas. No habrá internet en el campamento.
              </p>
            </div>
          )}

          {/* Mensaje cuando no hay resultados (Oculto si hubo éxito o error) */}
          {!acampante && !error && !isLoading && (
            <Card className="border-none shadow-sm bg-transparent">
              <CardContent className="p-8 text-center text-muted-foreground font-medium">
                Ingresa tu número de cédula para generar tu pase de comedor.
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
