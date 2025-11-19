import CaseStudyLayout from "@/components/CaseStudyLayout";
import heroImage from "@/assets/ncr-collaboration-hero.png";
import image1 from "@/assets/ncr-collaboration/image-1.png";
import image2 from "@/assets/ncr-collaboration/image-2.png";
import image3 from "@/assets/ncr-collaboration/image-3.png";
import image4 from "@/assets/ncr-collaboration/image-4.png";
import image5 from "@/assets/ncr-collaboration/image-5.png";
import image6 from "@/assets/ncr-collaboration/image-6.png";
import image7 from "@/assets/ncr-collaboration/image-7.png";
import image8 from "@/assets/ncr-collaboration/image-8.png";
import image9 from "@/assets/ncr-collaboration/image-9.png";
import image10 from "@/assets/ncr-collaboration/image-10.png";
import image11 from "@/assets/ncr-collaboration/image-11.png";
import image12 from "@/assets/ncr-collaboration/image-12.png";

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
          <div className="grid md:grid-cols-2 gap-8">
            <img src={image1} alt="First mockup sketches" className="w-full rounded-lg shadow-elegant" />
            <img src={image2} alt="Initial UI exploration" className="w-full rounded-lg shadow-elegant" />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Adding Events into the Mix</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Feedback from stakeholders revealed that restaurant operators needed to see events (promotions, holidays, system downtime) in context with their performance metrics. This insight led to a major design evolution incorporating event markers and overlays into the analytics interface.
          </p>
          <img src={image3} alt="Event visualization sketches" className="w-full rounded-lg shadow-elegant mb-8" />
          <img src={image4} alt="Expanded event mockup" className="w-full rounded-lg shadow-elegant mb-8" />
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
          <div className="grid md:grid-cols-2 gap-8">
            <img src={image5} alt="Drawer sketch with bar graph" className="w-full rounded-lg shadow-elegant" />
            <img src={image6} alt="Full drawer mockup" className="w-full rounded-lg shadow-elegant" />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Taking the Project on the Road</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            We needed real restaurant feedback. We took the app on the road visiting restaurant managers and owners. Valuable feedback was gleaned. We realized that we were trying to show too much in one view. People weren't sure what all of the metrics meant. We also realized that the area graph was probably not the way to represent the data accurately. A bar graph was adopted.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <img src={image7} alt="Expanded event feature for all day" className="w-full rounded-lg shadow-elegant" />
            <img src={image8} alt="The great graph debate" className="w-full rounded-lg shadow-elegant" />
          </div>
          <img src={image9} alt="Events sketch after feedback" className="w-full rounded-lg shadow-elegant mb-8" />
          <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Key Learnings from Field Research</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Simplified metrics from 4 to 2 displayed at once</li>
              <li>• Switched from area graphs to bar graphs for better data accuracy</li>
              <li>• Removed dropdown drawer in favor of direct controls</li>
              <li>• Added clearer metric labels and explanations</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Mini Map Navigation</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            After much research and user studies, I quickly realized that navigating the graph was becoming complicated. It was difficult to know what part of the data you were viewing. The mini map gives you a view of the complete data providing context. It also allows you to quickly view other parts of the graph by tapping or dragging.
          </p>
          <img src={image10} alt="Mini map sketches" className="w-full rounded-lg shadow-elegant mb-8" />
          <img src={image11} alt="Mini map feature implementation" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Data Representation Details</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I had to find a way to show what the UX would be for someone navigating the data. The design shows how users cannot go further than the end of data or before data is available. It also shows what the graph looks like if there is missing data (restaurant closed, faulty POS, or servers down) by showing gaps in store data.
          </p>
          <img src={image12} alt="Data representation mockup showing edge cases" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Impact & Outcomes</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The final dashboard provided restaurant managers with actionable insights at a glance, improved decision-making speed, and created a scalable foundation for future analytics features. User testing showed significant improvements in task completion time and user satisfaction compared to the previous solution.
          </p>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default NCRCollaboration;
