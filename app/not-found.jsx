import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-2">
          <h1 className="text-6xl md:text-8xl font-black text-gradient">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Página no encontrada</h2>
        </div>

        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            ← Volver al Inicio
          </Link>
        </div>

        <div className="pt-8 text-sm text-muted-foreground">
          <p>¿Necesitas ayuda? <Link href="#contacto" className="text-primary hover:underline">Contáctanos</Link></p>
        </div>
      </div>
    </div>
  );
}
