import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilter from "@/components/ProjectFilter";
import Footer from "@/components/Footer";
import concentrixHeroImg from "@/assets/hero/concentrix-fc-hero.png";
import machineLearningHeroImg from "@/assets/hero/machine-learning-hero.png";
import aiDataExplorerHeroImg from "@/assets/hero/ai-data-explorer-hero.png";
import dashboardBuilderHeroImg from "@/assets/hero/dashboard-builder-hero.png";
import cxDesignSystemHeroImg from "@/assets/hero/cx-design-system-hero.png";
import cxMobileHeroImg from "@/assets/hero/cx-mobile-hero.png";
import hackathonHeroImg from "@/assets/hero/hackathon-hero.png";
import firstwatchHeroImg from "@/assets/hero/firstwatch-hero.png";
import marcosHeroImg from "@/assets/hero/marcos-hero.png";
import ncrCollaborationHeroImg from "@/assets/hero/ncr-collaboration-hero.png";
import volunteerWorkHeroImg from "@/assets/hero/volunteer-work-hero.png";
import justForFunHeroImg from "@/assets/hero/just-for-fun-hero.png";
import zipsceneHeroImg from "@/assets/hero/zipscene-hero.png";
import unstructuredDataImg from "@/assets/hero/unstructured-data-hero.png";
import mcalistersDeliImg from "@/assets/hero/mcalisters-deli-hero.png";
const projects = [
  {
    title: "Concentrix FC&C",
    image: concentrixHeroImg,
    link: "/projects/concentrix-fc",
    description: "Financial crimes & compliance platform design",
    categories: ["Data Visualization", "B2B", "AI & Machine Learning"],
  },
  {
    title: "Machine Learning",
    image: machineLearningHeroImg,
    link: "/projects/machine-learning",
    description: "AI-powered customer experience solution",
    categories: ["AI & Machine Learning", "B2B"],
  },
  {
    title: "AI Data Explorer",
    image: aiDataExplorerHeroImg,
    link: "/projects/ai-data-explorer",
    description: "Intelligent data exploration interface",
    categories: ["AI & Machine Learning", "Data Visualization"],
  },
  {
    title: "Dashboard Builder",
    image: dashboardBuilderHeroImg,
    link: "/projects/dashboard-builder",
    description: "Customizable dashboard creation platform",
    categories: ["Data Visualization", "B2B"],
  },
  {
    title: "CX Design System",
    image: cxDesignSystemHeroImg,
    link: "/projects/cx-design-system",
    description: "Enterprise design system & components",
    categories: ["Design Systems", "B2B"],
  },
  {
    title: "CX Mobile",
    image: cxMobileHeroImg,
    link: "/projects/cx-mobile",
    description: "Mobile-first customer experience platform",
    categories: ["Mobile", "B2B"],
  },
  {
    title: "Hack-a-Thon",
    image: hackathonHeroImg,
    link: "/projects/hack-a-thon",
    description: "AI-powered coaching for call center agents",
    categories: ["AI & Machine Learning"],
  },
  {
    title: "First Watch",
    image: firstwatchHeroImg,
    link: "/projects/first-watch",
    description: "Restaurant website with digital waitlist",
    categories: ["Web Design", "Mobile", "B2C"],
  },
  {
    title: "Marco's Pizza",
    image: marcosHeroImg,
    link: "/projects/marcos",
    description: "Custom pizza builder & mobile ordering",
    categories: ["Web Design", "Mobile", "B2C"],
  },
  {
    title: "NCR Collaboration",
    image: ncrCollaborationHeroImg,
    link: "/projects/ncr-collaboration",
    description: "Restaurant analytics dashboard",
    categories: ["Data Visualization", "Web Design", "B2B"],
  },
  {
    title: "Unstructured Data",
    image: unstructuredDataImg,
    link: "/projects/unstructured-data",
    description: "Data analysis and visualization tools",
    categories: ["Data Visualization", "B2B"],
  },
  {
    title: "McAlister's Deli",
    image: mcalistersDeliImg,
    link: "/projects/mcalisters-deli",
    description: "Restaurant branding & digital experience",
    categories: ["Web Design", "B2C", "Mobile"],
  },
  {
    title: "Zipscene Analytics",
    image: zipsceneHeroImg,
    link: "/projects/zipscene",
    description: "Analytics dashboard with custom iconography",
    categories: ["Data Visualization", "Design Systems", "Mobile"],
  },
  {
    title: "Volunteer Work",
    image: volunteerWorkHeroImg,
    link: "/projects/volunteer-work",
    description: "Community design & branding for non-profits",
    categories: ["Just For Fun"],
  },
  {
    title: "Just For Fun",
    image: justForFunHeroImg,
    link: "/projects/just-for-fun",
    description: "Creative sketches & personal explorations",
    categories: ["Just For Fun"],
  },
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Extract unique categories from projects
  const allCategories = useMemo(() => {
    const categorySet = new Set<string>();
    projects.forEach((project) => {
      project.categories.forEach((cat) => categorySet.add(cat));
    });
    return ["All", ...Array.from(categorySet).sort()];
  }, []);

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }
    return projects.filter((project) => project.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      <section className="container mx-auto px-6 pb-20">
        <div className="mb-12">
          <ProjectFilter
            categories={allCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={project.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <p className="text-xl text-muted-foreground">No projects found in this category</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Index;
