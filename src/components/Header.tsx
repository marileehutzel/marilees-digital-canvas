import { useState, useEffect } from "react";
import { NavLink } from "./NavLink";
import { Menu, X } from "lucide-react";
import butterflyLogo from "@/assets/butterfly-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className="text-2xl font-bold text-foreground hover:text-primary transition-colors flex items-center gap-3"
          >
            <img src={butterflyLogo} alt="Butterfly logo" className="h-8 w-8" />
            Marilee Hutzel
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
              activeClassName="text-primary"
            >
              Case Studies
            </NavLink>
            <NavLink
              to="/about"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
              activeClassName="text-primary"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
              activeClassName="text-primary"
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 bg-card rounded-lg shadow-card animate-fade-in">
            <NavLink
              to="/"
              className="block px-4 py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
              activeClassName="text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Case Studies
            </NavLink>
            <NavLink
              to="/about"
              className="block px-4 py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
              activeClassName="text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="block px-4 py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
              activeClassName="text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
