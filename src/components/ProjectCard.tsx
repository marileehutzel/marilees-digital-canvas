import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  image: string;
  link: string;
  description?: string;
  imageClassName?: string;
}

const ProjectCard = ({ title, image, link, description, imageClassName }: ProjectCardProps) => {
  const isExternal = link.startsWith("http");

  const cardContent = (
    <div className="group flex items-stretch gap-6 backdrop-blur-xl bg-white/75 border border-white/30 rounded-2xl p-4 shadow-glass-md hover:shadow-glass-xl hover:bg-white/85 transition-all duration-500 h-full">
      {/* Image — left */}
      <div className="relative shrink-0 w-40 sm:w-48 aspect-[4/3] overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className={
            imageClassName ||
            "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          }
        />
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-500" />
      </div>

      {/* Text — right */}
      <div className="flex flex-col justify-center flex-1 min-w-0 pr-2">
        <h6 className="!mb-1 truncate">{title}</h6>
        {description && (
          <p className="!text-sm md:!text-base !mb-0 font-sans text-muted-foreground line-clamp-2 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );

  const commonClasses = "block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-2xl";

  if (isExternal) {
    return (
      <a href={link} className={commonClasses} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  return (
    <Link to={link} className={commonClasses}>
      {cardContent}
    </Link>
  );
};

export default ProjectCard;
