import heroArch from "@/assets/hero-arch.png";
import ProjectFilter from "./ProjectFilter";

interface HeroProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const Hero = ({ categories, activeCategory, onCategoryChange }: HeroProps) => {
  return (
    <section className="flex items-center justify-center px-6 pt-32 pb-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-8 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-12 max-w-4xl mx-auto">
            <img src={heroArch} alt="Marilee Hutzel" className="w-72 h-auto shrink-0" />
            <div className="space-y-6 text-center md:text-left pb-12">
              <h1
                className="text-5xl md:text-7xl font-bold text-foreground leading-tight"
                style={{ fontFamily: '"nougat-script", sans-serif', fontWeight: 700 }}
              >
                <span className="whitespace-nowrap">
                  Creating <span className="bg-gradient-primary bg-clip-text text-transparent">Intuitive</span>
                </span>{" "}
                Experiences
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
                Senior Product Designer | UI/UX Wrangler | <span className="whitespace-nowrap">AI Investigator</span> | Inquisitive
              </p>
            </div>
          </div>
          <ProjectFilter categories={categories} activeCategory={activeCategory} onCategoryChange={onCategoryChange} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
