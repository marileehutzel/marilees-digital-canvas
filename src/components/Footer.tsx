import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Marilee Hutzel</h3>
            <p className="text-secondary-foreground/70">Senior Product Designer & Problem Solver</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:contact@marileehutzel.com"
              className="p-3 bg-secondary-foreground/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary-foreground/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {currentYear} Marilee Hutzel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
