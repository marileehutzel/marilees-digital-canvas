import { useState, useEffect } from "react";
import { NavLink } from "./NavLink";
import { Menu, X } from "lucide-react";
import butterflyLogo from "@/assets/butterfly-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  useEffect(() => {
    const checkBackground = () => {
      const headerElement = document.querySelector("header");
      if (headerElement) {
        const rect = headerElement.getBoundingClientRect();
        const elementBelow = document.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height + 10);

        if (elementBelow) {
          const bgColor = window.getComputedStyle(elementBelow).backgroundColor;
          const rgb = bgColor.match(/\d+/g);

          if (rgb && rgb.length >= 3) {
            // Calculate relative luminance
            const r = parseInt(rgb[0]) / 255;
            const g = parseInt(rgb[1]) / 255;
            const b = parseInt(rgb[2]) / 255;
            const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

            setIsDarkBackground(luminance < 0.5);
          }
        }
      }
    };

    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
      
      // Check if page can scroll
      const canScroll = document.documentElement.scrollHeight > window.innerHeight;
      
      // If page can't scroll or not scrolled, check background
      if (!canScroll || !scrolled) {
        checkBackground();
      } else {
        setIsDarkBackground(false);
      }
    };

    // Initial check
    handleScroll();
    checkBackground();
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    
    // Recheck after a short delay to ensure page is fully rendered
    const timer = setTimeout(checkBackground, 100);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className={`text-2xl font-bold transition-colors flex items-center gap-3 ${
              isScrolled 
                ? "text-foreground hover:text-primary" 
                : isDarkBackground 
                  ? "text-white hover:text-white/80" 
                  : "text-foreground hover:text-primary"
            }`}
          >
            <img
              src={butterflyLogo}
              alt="Butterfly logo"
              className="h-8 w-8 transition-all"
              style={!isScrolled && isDarkBackground ? { filter: "brightness(0) invert(1)" } : {}}
            />
            Marilee Hutzel
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-foreground/80 hover:text-primary"
                  : isDarkBackground
                    ? "text-white/80 hover:text-white"
                    : "text-foreground/80 hover:text-primary"
              }`}
              activeClassName={isScrolled ? "text-primary" : isDarkBackground ? "text-white" : "text-primary"}
            >
              My Work
            </NavLink>
            <NavLink
              to="/about"
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-foreground/80 hover:text-primary"
                  : isDarkBackground
                    ? "text-white/80 hover:text-white"
                    : "text-foreground/80 hover:text-primary"
              }`}
              activeClassName={isScrolled ? "text-primary" : isDarkBackground ? "text-white" : "text-primary"}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={`transition-colors font-medium ${
                isScrolled
                  ? "text-foreground/80 hover:text-primary"
                  : isDarkBackground
                    ? "text-white/80 hover:text-white"
                    : "text-foreground/80 hover:text-primary"
              }`}
              activeClassName={isScrolled ? "text-primary" : isDarkBackground ? "text-white" : "text-primary"}
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              isScrolled 
                ? "text-foreground" 
                : isDarkBackground 
                  ? "text-white" 
                  : "text-foreground"
            }`}
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
              My Work
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
