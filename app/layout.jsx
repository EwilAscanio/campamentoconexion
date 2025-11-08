import { Providers } from "./providers";
import "./globals.css";

export const metadata = {
  title: "Campamento Conexión 2026",
  description: "Permanecer - Campamento Conexión 2026",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
