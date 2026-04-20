import profilePhoto from "@/assets/about/hiking-bryce.jpeg";
import ProjectFilter from "./ProjectFilter";

interface HeroProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const Hero = ({ categories, activeCategory, onCategoryChange }: HeroProps) => {
  return (
    <section className="flex items-center justify-center px-6 pt-32 pb-16">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <img
            src={profilePhoto}
            alt="Marilee Hutzel"
            className="w-64 h-80 object-cover shadow-lg grayscale"
            style={{ clipPath: "path('M 0 320 L 0 128 A 128 128 0 0 1 256 128 L 256 320 Z')" }}
          />
          <div className="space-y-6">
            <h1
              className="text-5xl md:text-7xl font-bold text-foreground leading-tight"
              style={{ fontFamily: '"nougat-script", sans-serif', fontWeight: 700 }}
            >
              Creating <span className="bg-gradient-primary bg-clip-text text-transparent">intuitive</span> experiences
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto">
              Senior Product Designer specializing in data visualization, machine learning, AI, mobile, and enterprise
              design systems
            </p>
          </div>
          <ProjectFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={onCategoryChange}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
