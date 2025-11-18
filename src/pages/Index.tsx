import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilter from "@/components/ProjectFilter";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "Concentrix FC&C",
    image:
      "https://cdn.myportfolio.com/27f655f377cdf66b3b5e2e264fa0158c/2e52e1be-dd56-4b0a-8bfc-3dbb582c7934_car_16x9.png?h=9fc36228b3247b47ee4d78345de84b9f",
    link: "/projects/concentrix-fc",
    description: "Financial crimes & compliance platform design",
    categories: ["Data Visualization", "Enterprise"],
  },
  {
    title: "Machine Learning",
    image:
      "https://cdn.myportfolio.com/27f655f377cdf66b3b5e2e264fa0158c/d58cfaaf-4cf6-4329-85c6-652351e6ae05_rwc_173x113x437x246x437.png?h=b7cbdadc010365c88ff5618080214d61",
    link: "/projects/machine-learning",
    description: "AI-powered customer experience solution",
    categories: ["Machine Learning", "Enterprise"],
  },
  {
    title: "AI Data Explorer",
    image:
      "https://cdn.myportfolio.com/27f655f377cdf66b3b5e2e264fa0158c/1d1e07e2-38e0-410f-8f69-1923bb4cfbba_rwc_0x0x1916x1080x1916.png?h=2df38a18350ccfa89b016dd77da6e0f9",
    link: "/projects/ai-data-explorer",
    description: "Intelligent data exploration interface",
    categories: ["Machine Learning", "Data Visualization"],
  },
  {
    title: "Dashboard Builder",
    image:
      "https://cdn.myportfolio.com/27f655f377cdf66b3b5e2e264fa0158c/5d62295a-c647-49b0-8f2b-ad0ab9aac94b_rwc_0x186x1170x659x1170.png?h=0d76f8514cc82eebbf0ea51d98c603a5",
    link: "/projects/dashboard-builder",
    description: "Customizable dashboard creation platform",
    categories: ["Data Visualization", "Enterprise"],
  },
  {
    title: "CX Design System",
    image:
      "https://cdn.myportfolio.com/27f655f377cdf66b3b5e2e264fa0158c/e6f6e2f2-7a35-4851-99e0-bec55c9321d7_car_16x9.png?h=4ec0f538a45c28c5d33e3dd5170620fa",
    link: "https://marileehutzel.com/concentrix-redesign",
    description: "Enterprise design system & components",
    categories: ["Design Systems", "Enterprise"],
  },
  {
    title: "CX Mobile",
    image:
      "https://cdn.myportfolio.com/27f655f377cdf66b3b5e2e264fa0158c/96d47458-a9a4-40b4-8f73-143f979dbcf6_rwc_0x0x1920x1082x1920.png?h=63ba38d8877dcfbc6bfb3175a0551f36",
    link: "/projects/cx-mobile",
    description: "Mobile-first customer experience platform",
    categories: ["Mobile", "Enterprise"],
  },
  {
    title: "Hack-a-Thon",
    image:
      "https://cdn.myportfolio.com/27f655f377cdf66b3b5e2e264fa0158c/6f12e1637d65f132f05c8749dd16a1c54ad279e4bf3fd48e19510ad3456a1bef2610edd428574b84_car_16x9.png?h=3f9095fa6e3a1c52100cc5307fd48418",
    link: "/projects/hack-a-thon",
    description: "AI-powered coaching for call center agents",
    categories: ["Machine Learning"],
  },
  {
    title: "First Watch",
    image:
      "https://cdn.myportfolio.com/27f655f377cdf66b3b5e2e264fa0158c/002232c4-ce58-41d4-a386-bf58e259d10c_car_16x9.png?h=03f14179ffda474627ad54fb961f8b95",
    link: "/projects/first-watch",
    description: "Restaurant website with digital waitlist",
    categories: ["Web Design", "Mobile"],
  },
  {
    title: "Marco's Pizza",
    image:
      "https://cdn.myportfolio.com/27f655f377cdf66b3b5e2e264fa0158c/60f07836-7f5d-4c5d-861a-0f7fb4c52eef_car_16x9.png?h=adb37c4618aeef94e470f414ef3bfcce",
    link: "/projects/marcos",
    description: "Custom pizza builder & mobile ordering",
    categories: ["Web Design", "Mobile"],
  },
  {
    title: "NCR Collaboration",
    image:
      "https://cdn.myportfolio.com/27f655f377cdf66b3b5e2e264fa0158c/0be95f17-6542-47e6-875b-f7dbe3769e55_car_16x9.png?h=e30dd163c7e64af145e9d8c4383ba8d8",
    link: "/projects/ncr-collaboration",
    description: "Restaurant analytics dashboard",
    categories: ["Data Visualization", "Web Design"],
  },
  {
    title: "Unstructured Data",
    image:
      "https://cdn.myportfolio.com/27f655f377cdf66b3b5e2e264fa0158c/4e5f621a-e203-48d6-ac81-3c9d2749741b_rwc_1506x484x665x375x665.png?h=d6c59b44875011fba5dc4bfc0d83d834",
    link: "https://marileehutzel.com/unstructured-data",
    description: "Data analysis and visualization tools",
    categories: ["Data Visualization", "Enterprise"],
  },
  {
    title: "McAlister's Deli",
    image:
      "https://cdn.myportfolio.com/27f655f377cdf66b3b5e2e264fa0158c/2b1b48b9-6f14-4671-b278-cc4b2b6b8c76_car_16x9.png?h=35ca698c97baca1581fb76f6390438f2",
    link: "https://marileehutzel.com/mcalisters-deli",
    description: "Restaurant branding & digital experience",
    categories: ["Web Design", "Branding"],
  },
  {
    title: "Zipscene Analytics",
    image:
      "https://cdn.myportfolio.com/27f655f377cdf66b3b5e2e264fa0158c/843cfa72-ecbd-4107-8d6f-0accf0cba2f5_car_16x9.png?h=a1429bb2baf80e4b740a6d2c60dda58a",
    link: "https://marileehutzel.com/analytics-dashboard",
    description: "Analytics dashboard with custom iconography",
    categories: ["Data Visualization", "Design Systems"],
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
