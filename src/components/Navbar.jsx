"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Inicio", href: "/#inicio" },
    { label: "Detalles", href: "/#detalles" },
    { label: "Pagos", href: "/#pagos" },
    { label: "Contacto", href: "/#contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Handle scroll to section after navigation from another page
    if (pathname === "/" && window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [pathname]);

  const handleNavClick = (e, href) => {
    if (pathname === "/") {
      e.preventDefault();
      const hash = href.replace("/", "");
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    }
    // Si no estamos en la página principal, el Link se encarga de la navegación
  };

  const handleLogoClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      const element = document.querySelector("#inicio");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand */}
          <Link
            href="/#inicio"
            onClick={handleLogoClick}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-primary/30 transition-all" />
              <div className="relative w-full h-full rounded-full border-2 border-primary flex items-center justify-center bg-background/50 backdrop-blur-sm group-hover:scale-105 transition-transform">
                <span className="text-xl md:text-2xl font-black text-primary">C</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-black text-gradient leading-none">
                CONEXIÓN 2026
              </h1>
              <p className="text-xs text-muted-foreground">Permanecer</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
              >
                {item.label}
              </Link>
            ))}
            {/* <Link
              href="/juegos"
              className="px-4 py-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
            >
              Juegos
            </Link> */}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Button
              variant="hero"
              size="default"
              onClick={() => window.open("https://forms.gle/mxCFi1uE5sv4CfvZ7", "_blank")}
            >
              <Phone className="w-4 h-4" />
              Inscríbete
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-2 pt-4 border-t border-border/50">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  handleNavClick(e, item.href);
                  setIsOpen(false);
                }}
                className="px-4 py-3 text-left text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/juegos"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-left text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
            >
              Juegos
            </Link>
            <Button
              variant="hero"
              size="default"
              className="w-full mt-2"
              onClick={() => window.open("https://forms.gle/mxCFi1uE5sv4CfvZ7", "_blank")}
            >
              <Phone className="w-4 h-4" />
              Inscríbete Ahora
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;