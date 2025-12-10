import { Mail, Linkedin } from "lucide-react";
import butterflyLogoOutline from "@/assets/butterfly-logo-outline.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <img src={butterflyLogoOutline} alt="Butterfly logo" className="h-8 w-8" />
              <h3 className="text-2xl text-primary-foreground/70 font-bold">Marilee Hutzel</h3>
              <p className="text-primary-foreground/70">Senior Product Designer & Problem Solver</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:marileehutzel@gmail.com"
              className="p-3 bg-primary-foreground/10 rounded-full hover:bg-background hover:text-primary transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="www.linkedin.com/in/marileehutzel"
              rel="noopener noreferrer"
              className="p-3 bg-primary-foreground/10 rounded-full hover:bg-background hover:text-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
          <p>&copy; {currentYear} Marilee Hutzel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
