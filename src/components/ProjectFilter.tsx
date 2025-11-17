interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProjectFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            activeCategory === category
              ? "bg-gradient-primary text-primary-foreground shadow-elegant scale-105"
              : "bg-card text-foreground hover:bg-muted hover:scale-105 shadow-card"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
