const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-black text-gradient">CONEXIÓN 2026</h3>
            <img
              src="/permanecer.png"
              alt="Permanecer en Cristo"
              className="h-16 mx-auto object-contain"
            />
          </div>

          {/* Partners/Sponsors */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/logoielfa.png"
                alt="IELFA"
                className="h-12 w-auto object-contain"
              />
              
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
