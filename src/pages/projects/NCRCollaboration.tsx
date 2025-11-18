import CaseStudyLayout from "@/components/CaseStudyLayout";
import heroImage from "@/assets/ncr-collaboration-hero.png";

const NCRCollaboration = () => {
  return (
    <CaseStudyLayout
      title="NCR Collaboration"
      subtitle="Restaurant Analytics Dashboard"
      context="Data Visualization for Restaurant Operations"
      description="Comprehensive analytics platform helping restaurant managers make data-driven decisions"
      disclaimer="Work completed in collaboration with NCR for restaurant partners."
    >
      <div className="space-y-12 animate-fade-in">
        <section className="space-y-8 animate-fade-in">
          <img src={heroImage} alt="NCR Restaurant Analytics Dashboard" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Restaurant managers needed better tools to understand their business performance. The existing analytics were fragmented, difficult to interpret, and didn't provide actionable insights. This project aimed to create a unified dashboard that transformed complex data into clear, actionable intelligence for restaurant operators.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">First Sketches and Mockups</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Initial explorations focused on finding the right balance between comprehensive data display and usability. Early mockups experimented with different graph types, layouts, and information hierarchies.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Adding Events into the Mix</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Feedback from stakeholders revealed that restaurant operators needed to see events (promotions, holidays, system downtime) in context with their performance metrics. This insight led to a major design evolution incorporating event markers and overlays into the analytics interface.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-card rounded-lg shadow-card">
              <h3 className="text-xl font-semibold mb-3">Event Visualization</h3>
              <p className="text-muted-foreground">
                Visual markers on graphs showing when promotions, holidays, or system issues occurred, helping managers understand performance spikes or drops.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card">
              <h3 className="text-xl font-semibold mb-3">Contextual Insights</h3>
              <p className="text-muted-foreground">
                Automatic correlation between events and performance changes, surfacing insights that would be difficult to spot manually.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">The Drawer Concept</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            The drawer was a way to turn features on or off within the graph, allowing users to choose what part of the data they wanted to see. This gave managers control over their view without overwhelming them with information.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Taking the Project on the Road</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            We needed real restaurant feedback. We took the app on the road visiting restaurant managers and owners. Valuable feedback was gleaned. We realized that we were trying to show too much in one view. People weren't sure what all of the metrics meant. We also realized that the area graph was probably not the way to represent the data accurately.
          </p>
          <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Key Learnings from Field Research</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Simplified from 4 metrics displayed simultaneously to 2 for clarity</li>
              <li>Switched from area graphs to bar graphs for better data representation</li>
              <li>Removed the dropdown drawer in favor of more prominent, persistent controls</li>
              <li>Added clearer labeling and tooltips explaining what each metric meant</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Mini Map Feature</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Developed a mini map navigation feature allowing users to quickly jump to different time periods and zoom levels within their data, making it easier to spot trends and compare different time ranges.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Final Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Performance Metrics</h3>
              <p className="text-muted-foreground">
                Clear visualization of key restaurant KPIs including sales, customer count, average ticket, and labor costs.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Event Correlation</h3>
              <p className="text-muted-foreground">
                Automatic highlighting of how promotions and external events impact restaurant performance.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Time Navigation</h3>
              <p className="text-muted-foreground">
                Intuitive controls for viewing data across different time periods with mini-map overview.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Simplified Metrics</h3>
              <p className="text-muted-foreground">
                Focused dashboard showing only the most important metrics with clear explanations of what they mean.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Impact</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The refined dashboard made complex restaurant data accessible and actionable. By listening to real users and iterating based on their feedback, we created a tool that restaurant managers actually wanted to use daily—transforming data from a confusing burden into a competitive advantage.
          </p>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default NCRCollaboration;
