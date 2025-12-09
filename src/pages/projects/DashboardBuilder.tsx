import CaseStudyLayout from "@/components/CaseStudyLayout";
import researchDiscoveryImg from "@/assets/dashboard-builder/research-discovery.png";
import hierarchyArchitectureImg from "@/assets/dashboard-builder/hierarchy-architecture.png";
import wireframes1Img from "@/assets/dashboard-builder/wireframes-1.png";
import wireframes2Img from "@/assets/dashboard-builder/wireframes-2.png";
import chartMvpsImg from "@/assets/dashboard-builder/chart-mvps.png";
import grid1Img from "@/assets/dashboard-builder/grid-1.png";
import grid2Img from "@/assets/dashboard-builder/grid-2.png";
import wireframesRound2Img from "@/assets/dashboard-builder/wireframes-round2.png";
import highFidelityLightImg from "@/assets/dashboard-builder/high-fidelity-light.png";
import highFidelityDarkImg from "@/assets/dashboard-builder/high-fidelity-dark.png";

const DashboardBuilder = () => {
  return (
    <CaseStudyLayout
      title="Dashboard Builder"
      subtitle="Empowering Users with Self-Service Analytics"
      context="Concentrix CX Platform"
      description="A flexible dashboard builder that allows users to create custom analytics views without developer support"
      disclaimer="Due to confidentiality agreements, some details and data have been anonymized or modified."
    >
      <div className="space-y-32 animate-fade-in">
        <section>
          <h2 className="text-4xl md:text-3xl font-bold mb-6 animate-fade-in">The Challenge</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
            Existing dashboard reporting was completed from within Concentrix. The internal business analyst had to
            create and file requests with developers for every new view, leading to delays. We needed a builder that
            was: simple enough for first-time users, robust enough for client analysts, consistent with our new design
            system, and performant with hundreds of widgets and data sources so users could have the freedom to choose
            what story they wanted the data to tell.
          </p>
        </section>

        <section>
          <h2 className="text-4xl md:text-3xl font-bold mb-6 animate-fade-in">My Role</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
            Existing dashboard reporting was completed from within Concentrix. The internal business analyst had to
            create and file requests with developers for every new view, leading to delays. We needed a builder that
            was: simple enough for first-time users, robust enough for client analysts, consistent with our new design
            system, and performant with hundreds of widgets and data sources so users could have the freedom to choose
            what story they wanted the data to tell.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Process & Approach</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Discovery/Research</h3>
              <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed mb-6">
                Conducted stakeholder interviews to understand business goals. Conducted user interviews to understand
                pain points and 'wish list.' Also completed a competitive analysis of existing leading dashboard tools.
                Had an insider demo a competitor product similar to what we would want to build. Investigated how
                Qualtrics (primary competitor) handled certain complicated user flows and saw real pain points from
                their customers.
              </p>
              <img
                src={researchDiscoveryImg}
                alt="Research and discovery phase findings"
                className="w-full rounded-lg shadow-elegant"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Hierarchy and Architecture</h3>
              <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed mb-6">
                Needed to make sure that the new dashboard builder feature worked into the larger ecosystem already
                established. Found a way to add into the existing navigation with ways to access customized dashboard
                navigation drawer. Which was an added feature we created due to user testing and interviews. Also wanted
                to focus on making the navigation as flat as possible to eliminate deeply nested navigation structures.
              </p>
              <img
                src={hierarchyArchitectureImg}
                alt="Hierarchy and architecture design"
                className="w-full rounded-lg shadow-elegant"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Wireframes and Multitasking</h3>
              <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed mb-6">
                I created low-fidelity wireframes to explore multiple layout options—grid, free-form, and responsive
                behavior—while carefully considering how the experience would adapt on smaller screens, where the drawer
                could overlap the grid below. Because two separate development teams were working in parallel on related
                initiatives, I coordinated closely with both to align timelines and design decisions. At the same time,
                the broader website redesign aimed to deliver a fully responsive page, so I designed the DIY Dashboard
                experience to work seamlessly across both the new responsive framework and the existing environment.
              </p>
              <div className="space-y-6">
                <img
                  src={wireframes1Img}
                  alt="Initial wireframe explorations"
                  className="w-full rounded-lg shadow-elegant"
                />
                <img
                  src={wireframes2Img}
                  alt="Wireframe layout variations"
                  className="w-full rounded-lg shadow-elegant"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Defining Chart MVPs</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed mb-6">
            Defining what charts would be included in the first rollout was a process of communication between internal
            stakeholders and clients to find the best balance between complexity of chart dev time and importance of the
            data.
          </p>
          <img
            src={chartMvpsImg}
            alt="Chart MVP definitions and priorities"
            className="w-full rounded-lg shadow-elegant"
          />
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Grid is Your Friend</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed mb-6">
            Much like my design professor in college said, "the grid is your friend"
          </p>
          <div className="space-y-6">
            <img src={grid1Img} alt="Grid system implementation" className="w-full rounded-lg shadow-elegant" />
            <img src={grid2Img} alt="Grid layout examples" className="w-full rounded-lg shadow-elegant" />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">2nd Round of Wireframes</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed mb-6">
            User interview feedback led to expanding and creating more detailed wireframes. With the addition of a
            customized color picker so analysts can create their own favorite themes.
          </p>
          <img
            src={wireframesRound2Img}
            alt="Second round of detailed wireframes"
            className="w-full rounded-lg shadow-elegant"
          />
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">High Fidelity Designs</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed mb-6">
            High fidelity light and dark mode chart picker drawer options.
          </p>
          <div className="space-y-6">
            <img
              src={highFidelityLightImg}
              alt="High fidelity light mode design"
              className="w-full rounded-lg shadow-elegant"
            />
            <img
              src={highFidelityDarkImg}
              alt="High fidelity dark mode design"
              className="w-full rounded-lg shadow-elegant"
            />
          </div>
        </section>

        <section>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Drag-and-Drop Builder</h3>
              <p className="text-muted-foreground">
                Intuitive interface allowing users to quickly arrange and configure dashboard widgets without technical
                knowledge.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Widget Library</h3>
              <p className="text-muted-foreground">
                Comprehensive collection of chart types, tables, and KPI widgets that adapt to different data sources.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Real-time Preview</h3>
              <p className="text-muted-foreground">
                Live preview of dashboard changes ensures users see exactly what their audience will see.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
              <p className="text-muted-foreground">
                Dashboards automatically adapt to different screen sizes and devices without manual adjustment.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">70%</div>
              <p className="text-muted-foreground">Reduction in dashboard creation time</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">Zero</div>
              <p className="text-muted-foreground">Developer dependencies for basic dashboards</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Custom dashboards created by users</p>
            </div>
          </div>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default DashboardBuilder;
