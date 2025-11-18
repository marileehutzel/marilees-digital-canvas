import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Creating <span className="bg-gradient-primary bg-clip-text text-transparent">intuitive</span> experiences
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Senior Prodcut Designer specializing in data visualization, machine learning, AI, mobile, and enterprise
            design systems
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold shadow-elegant hover:scale-105 transition-transform duration-300"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-border text-foreground rounded-lg font-semibold hover:border-primary hover:text-primary transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      <a 
        href="#projects" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to projects"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
