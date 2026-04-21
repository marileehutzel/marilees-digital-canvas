import profilePhoto from "@/assets/about/hiking-bryce.jpeg";
import archFrame from "@/assets/arch-frame.png";
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
          <div className="relative w-72 h-96">
            <img
              src={profilePhoto}
              alt="Marilee Hutzel"
              className="absolute inset-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] object-cover grayscale"
              style={{ clipPath: "path('M 0 368 L 0 144 A 144 144 0 0 1 288 144 L 288 368 Z')" }}
            />
            <img
              src={archFrame}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full pointer-events-none"
            />
          </div>
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
