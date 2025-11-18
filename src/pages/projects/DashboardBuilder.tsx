import CaseStudyLayout from "@/components/CaseStudyLayout";
import heroImage from "@/assets/dashboard-builder-hero.png";

const DashboardBuilder = () => {
  return (
    <CaseStudyLayout
      title="Dashboard Builder"
      subtitle="Empowering Users with Self-Service Analytics"
      context="Concentrix CX Platform"
      description="A flexible dashboard builder that allows users to create custom analytics views without developer support"
      disclaimer="Due to confidentiality agreements, some details and data have been anonymized or modified."
    >
      <div className="space-y-12 animate-fade-in">
        <section className="space-y-8 animate-fade-in">
          <img src={heroImage} alt="Dashboard Builder interface" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Existing dashboard reporting was completed from within Concentrix. The internal business analyst had to create and file requests with developers for every new view, leading to delays. We needed a builder that was: simple enough for first-time users, robust enough for client analysts, consistent with our new design system, and performant with hundreds of widgets and data sources so users could have the freedom to choose what story they wanted the data to tell.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">My Role</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Led UX design: from requirement gathering, wireframes, prototyping, interaction design, and user testing. Collaborated with product manager, data engineers and front-end developers to ensure feasibility. Defined design system components that could be reused (widget containers, charts, filters).
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Process & Approach</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Discovery/Research</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Conducted stakeholder interviews to understand business goals. Conducted user interviews to understand pain points and 'wish list.' Also completed a competitive analysis of existing leading dashboard tools. Had an insider demo a competitor product similar to what we would want to build. Investigated how Qualtrics (primary competitor) handled certain complicated user flows and saw real pain points from their customers.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-3">Hierarchy and Architecture</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Worked with stakeholders to define dashboard structure: Projects contain dashboards, which contain rows, which contain widgets. This scalable framework enabled both simple and complex use cases.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">Wireframes & Prototyping</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Created low- and mid-fidelity prototypes to test widget placement, drag-and-drop interactions, and configuration flows. Iterated rapidly based on user feedback to simplify the creation process while maintaining powerful customization options.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Drag-and-Drop Builder</h3>
              <p className="text-muted-foreground">
                Intuitive interface allowing users to quickly arrange and configure dashboard widgets without technical knowledge.
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
          <h2 className="text-3xl font-bold mb-6">Impact</h2>
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
