import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  image: string;
  link: string;
  description?: string;
}

const ProjectCard = ({ title, image, link, description }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isExternal = link.startsWith("http");

  const cardContent = (
    <>
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
              {title}
            </h3>
            {description && <p className="text-muted-foreground text-base">{description}</p>}
          </div>
          <ArrowUpRight
            className={`flex-shrink-0 text-primary transition-all duration-300 ${
              isHovered ? "translate-x-1 -translate-y-1" : ""
            }`}
            size={24}
          />
        </div>
      </div>
    </>
  );

  const commonClasses =
    "group block relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-[1.02]";

  if (isExternal) {
    return (
      <a
        href={link}
        className={commonClasses}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link
      to={link}
      className={commonClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {cardContent}
    </Link>
  );
};

export default ProjectCard;
