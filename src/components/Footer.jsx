const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-black text-gradient">CONEXIÓN 2026</h3>
            <p className="text-sm text-muted-foreground">Permanecer en Cristo</p>
          </div>

          {/* Partners/Sponsors */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 bg-card/50 border border-border/50 rounded-lg">
                <span className="font-bold text-foreground">ietra</span>
              </div>
              <div className="w-8 h-8 bg-card/50 border border-border/50 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">A</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © 2026 Campamento Conexión
            </p>
            <p className="text-xs text-muted-foreground">
              Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
