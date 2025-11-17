import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "Concentrix FC&C",
    image: "https://cdn.myportfolio.com/27f655f377cdf66b3b5e2e264fa0158c/2e52e1be-dd56-4b0a-8bfc-3dbb582c7934_car_16x9.png?h=9fc36228b3247b47ee4d78345de84b9f",
    link: "/projects/concentrix-fc",
    description: "Financial crimes & compliance platform design"
  },
  {
    title: "Machine Learning",
    image: "https://cdn.myportfolio.com/27f655f377cdf66b3b5e2e264fa0158c/d58cfaaf-4cf6-4329-85c6-652351e6ae05_rwc_173x113x437x246x437.png?h=b7cbdadc010365c88ff5618080214d61",
    link: "/projects/machine-learning",
    description: "AI-powered customer experience solution"
  },
  {
    title: "AI Data Explorer",
    image: "https://cdn.myportfolio.com/27f655f377cdf66b3b5e2e264fa0158c/1d1e07e2-38e0-410f-8f69-1923bb4cfbba_rwc_0x0x1916x1080x1916.png?h=2df38a18350ccfa89b016dd77da6e0f9",
    link: "/projects/ai-data-explorer",
    description: "Intelligent data exploration interface"
  },
  {
    title: "Unstructured Data",
    image: "https://cdn.myportfolio.com/27f655f377cdf66b3b5e2e264fa0158c/4e5f621a-e203-48d6-ac81-3c9d2749741b_rwc_1506x484x665x375x665.png?h=d6c59b44875011fba5dc4bfc0d83d834",
    link: "https://marileehutzel.com/unstructured-data",
    description: "Data analysis and visualization tools"
  },
  {
    title: "Dashboard Builder",
    image: "https://cdn.myportfolio.com/27f655f377cdf66b3b5e2e264fa0158c/5d62295a-c647-49b0-8f2b-ad0ab9aac94b_rwc_0x186x1170x659x1170.png?h=0d76f8514cc82eebbf0ea51d98c603a5",
    link: "https://marileehutzel.com/concentrix-cx",
    description: "Customizable dashboard creation platform"
  },
  {
    title: "CX Design System",
    image: "https://cdn.myportfolio.com/27f655f377cdf66b3b5e2e264fa0158c/e6f6e2f2-7a35-4851-99e0-bec55c9321d7_car_16x9.png?h=4ec0f538a45c28c5d33e3dd5170620fa",
    link: "https://marileehutzel.com/concentrix-redesign",
    description: "Enterprise design system & components"
  },
  {
    title: "CX Mobile",
    image: "https://cdn.myportfolio.com/27f655f377cdf66b3b5e2e264fa0158c/96d47458-a9a4-40b4-8f73-143f979dbcf6_rwc_0x0x1920x1082x1920.png?h=63ba38d8877dcfbc6bfb3175a0551f36",
    link: "https://marileehutzel.com/concentrix-mobile",
    description: "Mobile-first customer experience platform"
  },
  {
    title: "Self-Service Data",
    image: "https://cdn.myportfolio.com/27f655f377cdf66b3b5e2e264fa0158c/a06c14b4-3e3c-47f2-aa55-c5e6b5d7ee0e_rwc_0x0x1916x1080x1916.png?h=75c73d7dd47b638a788688bc87266466",
    link: "https://marileehutzel.com/concentrix-cs",
    description: "Empowering users with self-service analytics"
  },
  {
    title: "Executive Dashboard",
    image: "https://cdn.myportfolio.com/27f655f377cdf66b3b5e2e264fa0158c/f46dd72d-a64f-4ee0-a8aa-d46cbf7b5e32_rwc_0x0x1920x1080x1920.png?h=baa3819f93c9c05a0f19f7b1c1c2fc9c",
    link: "https://marileehutzel.com/concentrix-cx-exec",
    description: "High-level insights and KPI tracking"
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <section id="projects" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of enterprise solutions, data-driven designs, and
            user-centered experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
