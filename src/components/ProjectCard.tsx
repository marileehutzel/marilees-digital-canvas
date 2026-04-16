import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  image: string;
  link: string;
  description?: string;
  imageClassName?: string;
}

const ProjectCard = ({ title, image, link, description, imageClassName }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isExternal = link.startsWith("http");

  const cardContent = (
    <>
      <div className="aspect-square overflow-hidden max-w-[280px] mx-auto rounded-lg relative">
        <img
          src={image}
          alt={title}
          className={
            imageClassName || "w-full h-full object-cover scale-125 transition-transform duration-700 group-hover:scale-110"
          }
        />
        <div className="absolute inset-0 bg-[#459c96]/20 hover:bg-[#459c96]/30 transition-opacity duration-300 pointer-events-none" />
      </div>
    </>
  );

  const commonClasses =
    "group block relative overflow-hidden hover:scale-[1.02]";

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
