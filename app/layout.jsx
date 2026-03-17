import { Providers } from "./providers";
import "./globals.css";

export const metadata = {
  title: "Campamento Conexión 2026",
  description: "Permanecer - Campamento Conexión 2026",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Bungee&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
