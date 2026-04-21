import CaseStudyLayout from "@/components/CaseStudyLayout";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, AreaChart, Area, LineChart, Line, CartesianGrid } from "recharts";
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
import collaborationImg from "@/assets/dashboard-builder/collaboration-communication.png";

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
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1 font-sans">The Reality</p>
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
                The Ideal
              </p>
              <h4 className="mb-4 text-secondary-foreground">What Could Be</h4>
              <ul className="list-disc list-inside space-y-3 font-serif text-lg md:text-xl text-secondary-foreground/80 leading-relaxed">
                <li>Self-Service Dashboards</li>
                <li>Empowered clients not waiting for customization</li>
                <li>Real-time preview and iteration</li>
                <li>User-driven data storytelling</li>
                <li>Real-time analysis of complex data</li>
                <li>Developers focused on other projects</li>
              </ul>
              <img src={theBestImg} alt="What could be vision" className="max-w-[50%] h-auto rounded-lg mt-6 mx-auto" />
            </div>
          </div>
        </section>

        <section>
          <h4 className="mb-6 animate-fade-in">Goal</h4>
          <p className="mb-6">
            Dashboard builder should be simple enough for first-time users, robust enough for client analysts,
            consistent with our new design system, and performant with hundreds of widgets and data sources so users
            could have the freedom to choose what story they wanted the data to tell. From a development standpoint we
            had to have a design that worked with legacy users on a different code base than our new React framework. I
            needed to create a design and experience that met all of these marks and work with two different development
            teams to solve problems and provide a seamless solution for our users.
          </p>
          <p>
            Sounds easy, right? If it's this easy, why didn't we design this sooner? Good question. It sounds easy but
            underneath were some seriously complicated legacy systems that didn't work the way we needed and a bootstrap
            layer on top. We had a crutch on Salesforce but needed our own standalone product. We needed to get new
            clients onto a responsive system while still maintaining our old code base for existing customers. It got
            complicated.
          </p>
        </section>

        <section>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-sans">Two Developer Teams</p>
          <h4 className="mb-10">A Tale of Two Javiers</h4>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full bg-[hsl(175,50%,70%)] flex items-center justify-center mb-8">
                <span className="text-4xl font-bold text-white">J</span>
              </div>
              <h4 className="mb-4">Javier</h4>
              <ul className="list-disc list-outside space-y-2 text-muted-foreground font-serif text-lg text-left pl-5">
                <li>Based in San Salvador</li>
                <li>6 developers on team in San Salvador</li>
                <li>Converting existing framework into React</li>
                <li>Using storybook components from design system</li>
              </ul>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full bg-[hsl(110,50%,65%)] flex items-center justify-center mb-8">
                <span className="text-4xl font-bold text-white">J</span>
              </div>
              <h4 className="mb-4">Javi</h4>
              <ul className="list-disc list-outside space-y-2 text-muted-foreground font-serif text-lg text-left pl-5">
                <li>Based in Barcelona</li>
                <li>6 developers on team in United States</li>
                <li>Working on maintaining existing platform in bootstrap for legacy customers</li>
                <li>Using storybook components from design system</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-sans">Team Dynamics</p>
          <h4 className="mb-6 animate-fade-in">Collaboration and Communication</h4>
          <img
            src={collaborationImg}
            alt="Collaboration and communication diagram showing team dynamics between stakeholders, project managers, developers, and clients"
            className="w-full rounded-lg shadow-elegant"
          />
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
            <h4 className="mb-4">Hierarchy and Architecture</h4>
            <p className="mb-6">
              Needed to make sure that the new dashboard builder feature worked into the larger ecosystem already
              established. Found a way to add dashboard builder into the existing navigation with ways to access
              customized dashboard navigation drawer. Through continued user testing and interviews we determined that
              users needed a way to access their custom dashboards. Also wanted to focus on making the navigation as
              flat as possible to eliminate deeply nested navigation structures.
            </p>
            <img
              src={hierarchyArchitectureImg}
              alt="Hierarchy and architecture design"
              className="w-full rounded-lg shadow-elegant"
            />
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

        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1 font-sans">It is time</p>
          <div>
            <h4 className="mb-4">Let's Get to the Drawing Board</h4>
            <p className="mb-6">
              I created low-fidelity wireframes to explore multiple layout options—grid, free-form, and responsive
              behavior—while carefully considering how the experience would adapt on smaller screens, where the drawer
              could overlap the grid below. Because two separate development teams were working in parallel on related
              initiatives, I coordinated closely with both to align timelines and design decisions. At the same time,
              the broader website redesign aimed to deliver a fully responsive page, so I designed the DIY Dashboard
              experience to work seamlessly across both the new React responsive framework and the legacy environment.
            </p>
            <div className="space-y-6">
              <div className="overflow-x-auto -mx-6 px-6">
                <img
                  src={wireframes1Img}
                  alt="Initial wireframe explorations"
                  className="h-[80vh] w-auto max-w-none rounded-lg shadow-elegant"
                />
              </div>
              <div className="overflow-x-auto -mx-6 px-6">
                <img
                  src={wireframes2Img}
                  alt="Wireframe layout variations"
                  className="h-[80vh] w-auto max-w-none rounded-lg shadow-elegant"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h4 className="mb-6">Grid is Your Friend</h4>
          <p className="mb-6">
            Much like my design professor in college said, "the grid is your friend", we needed to be very mindful of
            the responsiveness of the application to make sure the graphics-heavy elements were responsive and useful
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
          <div className="overflow-x-auto -mx-6 px-6">
            <img
              src={wireframesRound2Img}
              alt="Second round of detailed wireframes"
              className="h-[80vh] w-auto max-w-none rounded-lg shadow-elegant"
            />
          </div>
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
            <Dialog>
              <DialogTrigger asChild>
                <img
                  src={highFidelityDarkImg}
                  alt="High fidelity dark mode design"
                  className="w-1/2 mx-auto rounded-lg shadow-elegant cursor-zoom-in transition-transform hover:scale-[1.02]"
                />
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-fit p-2 bg-background/95 backdrop-blur">
                <img
                  src={highFidelityDarkImg}
                  alt="High fidelity dark mode design"
                  className="w-full h-auto max-h-[90vh] object-contain rounded"
                />
              </DialogContent>
            </Dialog>
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
              <h4 className="mb-3">Real-time Preview</h4>
              <p>Live preview of dashboard changes ensures users see exactly what their audience will see.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h4 className="mb-3">Responsive Design</h4>
              <p>Dashboards automatically adapt to different screen sizes and devices without manual adjustment.</p>
            </div>
          </div>
        </section>

        {/*<section>
          <h4 className="mb-6">Impact</h4>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">70%</div>
              <p>Reduction in dashboard creation time</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">3 Million</div>
              <p>3 Million saved by retaining clients due to dasboard builder</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p>Custom dashboards created by users</p>
            </div>
          </div>
        </section>*/}

        <section className="space-y-8">
          <div>
            {/*<p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Impact</p>*/}
            <h4>Impact</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Dashboard Creation Time Chart */}
            <Card className="p-4">
              <h6 className="mb-4 text-center">Dashboard Creation Time</h6>
              <ChartContainer
                config={{
                  hours: {
                    label: "Hours",
                    color: "hsl(var(--primary))",
                  },
                }}
                className="h-[200px] w-full"
              >
                <LineChart
                  data={[
                    { period: "Before", hours: 336 },
                    { period: "After", hours: 2 },
                  ]}
                  margin={{ top: 16, right: 24, bottom: 24, left: 24 }}
                >
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis
                    dataKey="period"
                    tickLine={false}
                    axisLine={true}
                    label={{
                      value: "USER TIME",
                      position: "insideBottom",
                      offset: -12,
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      fill: "hsl(var(--muted-foreground))",
                    }}
                  />
                  <YAxis
                    hide={false}
                    tick={false}
                    axisLine={true}
                    tickLine={false}
                    width={28}
                    label={{
                      value: "DEV TIME",
                      angle: -90,
                      position: "insideLeft",
                      offset: 12,
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      fill: "hsl(var(--muted-foreground))",
                    }}
                  />
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                    formatter={(value: number) => {
                      if (value === 336) return ["2 weeks", "Time"];
                      return [`${value} hours`, "Time"];
                    }}
                  />
                  <Line
                    type="linear"
                    dataKey="hours"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--primary))", r: 5 }}
                  />
                </LineChart>
              </ChartContainer>
              <p className="text-center text-sm text-muted-foreground mt-2">From 2 weeks to 2 hours</p>
            </Card>

            {/* Revenue Retained Chart */}
            <Card className="p-4">
              <h6 className="mb-4 text-center">Revenue Retained</h6>
              <ChartContainer
                config={{
                  value: {
                    label: "Revenue",
                    color: "hsl(var(--primary))",
                  },
                }}
                className="h-[200px] w-full"
              >
                <LineChart
                  data={[
                    { period: "Before", value: 0 },
                    { period: "After", value: 3 },
                  ]}
                  margin={{ top: 16, right: 24, bottom: 24, left: 24 }}
                >
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis
                    dataKey="period"
                    tickLine={false}
                    axisLine={true}
                    label={{
                      value: "TIMELINE",
                      position: "insideBottom",
                      offset: -12,
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      fill: "hsl(var(--muted-foreground))",
                    }}
                  />
                  <YAxis
                    hide={false}
                    tick={false}
                    axisLine={true}
                    tickLine={false}
                    width={28}
                    label={{
                      value: "REVENUE",
                      angle: -90,
                      position: "insideLeft",
                      offset: 12,
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      fill: "hsl(var(--muted-foreground))",
                    }}
                  />
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                    formatter={(value: number) => [`$${value}M`, "Revenue"]}
                  />
                  <Line
                    type="linear"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--primary))", r: 5 }}
                  />
                </LineChart>
              </ChartContainer>
              <p className="text-center text-sm text-muted-foreground mt-2">$3M retained</p>
            </Card>

            {/* Dashboards Created Metric */}
            <Card className="p-4 flex flex-col">
              <h6 className="mb-4 text-center">Dashboards Created</h6>
              <div className="flex-1 flex flex-col items-center justify-center gap-2 py-4">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-bold text-muted-foreground leading-none">5</span>
                  <svg width="32" height="20" viewBox="0 0 32 20" fill="none" className="text-primary">
                    <path
                      d="M2 10 L26 10 M26 10 L20 4 M26 10 L20 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-5xl font-bold text-primary leading-none">500+</span>
                </div>
                <span className="text-sm text-muted-foreground mt-2">Dashboards</span>
                <span className="text-sm text-muted-foreground mt-1">1 month after dashboard builder release</span>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default DashboardBuilder;
