import CaseStudyLayout from "@/components/CaseStudyLayout";
import whatIsImg from "@/assets/dashboard-builder/WhatIs-DashboardLifeCycle.png";
import theBestImg from "@/assets/dashboard-builder/TheBest.png";
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
      description="We had MVP for years, and it wasn't enough. We needed a flexible dashboard builder that gave the power to the users to tell their own data story."
      disclaimer="Due to confidentiality agreements, some details and data have been anonymized or modified."
      metadata={[
        { label: "Type", value: "Enterprise B2B" },
        { label: "Role", value: "Lead UX Designer" },
        { label: "Platforms", value: "Web (React), Legacy" },
        { label: "Design Tools", value: "Figma, Sketch" },
        { label: "Product", value: "Concentrix CX" },
      ]}
    >
      <div className="space-y-32 animate-fade-in">
        <section>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-sans">The Challenge</p>
          <h4 className="mb-6 animate-fade-in">Data existed. Clarity didn't.</h4>
          <p className="mb-6">
            Clients weren't short on data. They were drowning in it. Our basic MVP dashboards weren't cutting it for all
            of our customers. Internal business analysts had to file requests with developers for every 'custom'
            dashboard view. Feedback from clients was frank and honest. They felt we were lagging behind competitors
            that offered customization. Clients were contemplating leaving the product.
          </p>
          

          <div className="space-y-8 mt-12">
            <div className="p-6 bg-card rounded-lg shadow-card">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1 font-sans">
                What Existed
              </p>
              <h4 className="mb-4">What Existed</h4>
              <ul className="list-disc list-inside space-y-3 font-serif text-lg md:text-xl text-muted-foreground leading-relaxed">
                <li>Static MVP dashboards with no customization</li>
                <li>Developer dependency for every custom view</li>
                <li>Manual request process for dashboard changes</li>
                <li>One-size-fits-all reporting</li>
                <li>Long wait time for requests to be completed</li>
                <li>Developers bogged down with requests</li>
              </ul>
              <img src={whatIsImg} alt="Outdated process" className="w-full rounded-lg mt-6" />
            </div>
            <div className="p-6 bg-secondary rounded-lg shadow-card">
              <p className="text-xs uppercase tracking-[0.2em] text-secondary-foreground/50 mb-1 font-sans">
                What Could Be
              </p>
              <h4 className="mb-4 text-secondary-foreground">What Could Be</h4>
              <ul className="list-disc list-inside space-y-3 font-serif text-lg md:text-xl text-secondary-foreground/80 leading-relaxed">
                <li>Self-Service Dashboards</li>
                <li>Empowered clients not waiting for customization</li>
                <li>Real-time preview and iteration</li>
                <li>User-driven data storytelling</li>
                <li>Real-time analysis of complex data</li>
                <li>Devolpers focused on other projects</li>
              </ul>
              <img src={theBestImg} alt="What could be vision" className="max-w-[50%] h-auto rounded-lg mt-6" />
            </div>
          </div>
        </section>

        <section>
          <h4 className="mb-6 animate-fade-in">Goal</h4>
          <p>
            It's simple, right? Dashboard builder should be simple enough for first-time users, robust enough for client
            analysts, consistent with our new design system, and performant with hundreds of widgets and data sources so
            users could have the freedom to choose what story they wanted the data to tell. From a development
            standpoint we had to have a design that worked with legacy users on a different code base than our new React
            framework. I needed to create a design and expereince that met all of these marks and work with two
            different development teams to solve problems and provide a seamless soultion for our users.
          </p>
        </section>

        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1 font-sans">
            Research and Definition
          </p>
          <div>
            <h4 className="mb-4">Reaching out with empathy</h4>
            <p className="mb-6">
              Conducted user interviews to understand pain points and 'wish list.' Clients needed a way to quickly
              create custom dashboards to make real change, to find trends and help make their employees more effective
              at their jobs. Also completed a competitive analysis of existing leading dashboard tools. Had an insider
              demo a competitor product similar to what we would want to build. Investigated how Qualtrics (primary
              competitor) handled certain complicated user flows and saw real pain points from their customers. Another
              headache uncovered from research was the real issue of collaboration and sharing of dashboards. We had no
              system or structure designed for permissions or hierarchy of PII within our defined roles.
            </p>
            <img
              src={researchDiscoveryImg}
              alt="Research and discovery phase findings"
              className="w-full rounded-lg shadow-elegant"
            />
          </div>

          <div>
            <h3 className="mb-4">Hierarchy and Architecture</h3>
            <p className="mb-6">
              Needed to make sure that the new dashboard builder feature worked into the larger ecosystem already
              established. Found a way to add dashboard builder into the existing navigation with ways to access
              customized dashboard navigation drawer. Through continuted user testing and interviews we deterimined that
              users needed a way to access their custom dashboards. Also wanted to focus on making the navigation as
              flat as possible to eliminate deeply nested navigation structures.
            </p>
            <img
              src={hierarchyArchitectureImg}
              alt="Hierarchy and architecture design"
              className="w-full rounded-lg shadow-elegant"
            />
          </div>

          <div>
            <h3 className="mb-4">Wireframes and Multitasking</h3>
            <p className="mb-6">
              I created low-fidelity wireframes to explore multiple layout options—grid, free-form, and responsive
              behavior—while carefully considering how the experience would adapt on smaller screens, where the drawer
              could overlap the grid below. Because two separate development teams were working in parallel on related
              initiatives, I coordinated closely with both to align timelines and design decisions. At the same time,
              the broader website redesign aimed to deliver a fully responsive page, so I designed the DIY Dashboard
              experience to work seamlessly across both the new React responsive framework and the legacy environment.
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
        </section>

        <section className="space-y-8">
          <h4 className="mb-6">Defining Chart MVPs</h4>
          <p className="mb-6">
            Defining what charts would be included in the first rollout was a process of communication between internal
            stakeholders and clients to find the best balance between complexity of chart dev time and importance of the
            data. I worked closely with both dev teams to define priorities.
          </p>
          <img
            src={chartMvpsImg}
            alt="Chart MVP definitions and priorities"
            className="w-full rounded-lg shadow-elegant"
          />
        </section>

        <section className="space-y-8">
          <h4 className="mb-6">Grid is Your Friend</h4>
          <p className="mb-6">
            Much like my design professor in college said, "the grid is your friend", we needed to be very mindful of
            the responsiveness of the application to make sure the graphics heavy elements were resmpnsive and useful
            within the context of smaller screens.
          </p>
          <div className="space-y-6">
            <img src={grid1Img} alt="Grid system implementation" className="w-full rounded-lg shadow-elegant" />
            <img src={grid2Img} alt="Grid layout examples" className="w-full rounded-lg shadow-elegant" />
          </div>
        </section>

        <section className="space-y-8">
          <h4 className="mb-6">2nd Round of Wireframes</h4>
          <p className="mb-6">
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
          <h4 className="mb-6">High Fidelity Designs</h4>
          <p className="mb-6">High fidelity light and dark mode chart picker drawer options.</p>
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
          <h4 className="mb-6">Key Features</h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h4 className="mb-3">Drag-and-Drop Builder</h4>
              <p>
                Intuitive interface allowing users to quickly arrange and configure dashboard widgets without technical
                knowledge.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h4 className="mb-3">Widget Library</h4>
              <p>
                Comprehensive collection of chart types, tables, and KPI widgets that adapt to different data sources.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="mb-3">Real-time Preview</h3>
              <p>Live preview of dashboard changes ensures users see exactly what their audience will see.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="mb-3">Responsive Design</h3>
              <p>Dashboards automatically adapt to different screen sizes and devices without manual adjustment.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6">Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">70%</div>
              <p>Reduction in dashboard creation time</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">Zero</div>
              <p>Developer dependencies for basic dashboards</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p>Custom dashboards created by users</p>
            </div>
          </div>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default DashboardBuilder;
