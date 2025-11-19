import CaseStudyLayout from "@/components/CaseStudyLayout";
import heroImage from "@/assets/cx-mobile-hero.png";
import image1 from "@/assets/cx-mobile/image-1.png";
import image2 from "@/assets/cx-mobile/image-2.png";
import image3 from "@/assets/cx-mobile/image-3.png";
import image4 from "@/assets/cx-mobile/image-4.png";
import image5 from "@/assets/cx-mobile/image-5.png";
import image6 from "@/assets/cx-mobile/image-6.png";
import image7 from "@/assets/cx-mobile/image-7.png";

const CXMobile = () => {
  return (
    <CaseStudyLayout
      title="CX Mobile"
      subtitle="Mobile-First Customer Experience Platform"
      context="Concentrix Mobile Experience"
      description="Bringing powerful analytics and field feedback capabilities to mobile devices for on-the-go teams"
      disclaimer="Due to confidentiality agreements, some details and data have been anonymized or modified."
    >
      <div className="space-y-32 animate-fade-in">
        <section className="space-y-8 animate-fade-in">
          <img src={heroImage} alt="CX Mobile platform interface" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My Role</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
            As lead UX designer, I drove the experience from discovery through delivery. I led mobile-focused user research, usability testing, and defined journeys for alerts, dashboards, and feedback. I translated those into wireframes, prototypes, and refined UI designs. I also collaborated closely with iOS/Android developers and backend engineers to ensure seamless implementation aligned with the existing desktop design system.
          </p>
        </section>

        <section>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Challenge</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
            Field teams and remote managers needed access to critical customer experience metrics while away from their desks. The existing desktop-only platform prevented real-time decision-making and delayed responses to customer issues. We needed to create a mobile experience that maintained the power of the desktop platform while optimizing for smaller screens and on-the-go usage patterns.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Wireframes and Prototyping</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed mb-6">
            I developed low- and mid-fidelity wireframes to explore layout options: stacked cards, tabbed navigation, flat lists, collapsible drawers. For requests/feedback, I designed simple, context-aware forms that agents could complete in seconds, even with poor connectivity.
          </p>
          <img src={image1} alt="Mobile wireframes and prototypes" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Outcome and Impact</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed mb-6">
            Successfully launched a mobile version of the dashboard & alert workflows, enabling users to access key insights from their phones. Field agents gained a direct channel to submit requests and feedback, reducing turnaround time for support and improving data quality from the field.
          </p>
          <div className="space-y-6">
            <img src={image2} alt="Mobile dashboard interface" className="w-full rounded-lg shadow-elegant" />
            <img src={image3} alt="Alert notifications on mobile" className="w-full rounded-lg shadow-elegant" />
            <img src={image4} alt="Data visualization on mobile" className="w-full rounded-lg shadow-elegant" />
            <img src={image5} alt="Feedback submission interface" className="w-full rounded-lg shadow-elegant" />
            <img src={image6} alt="Request management on mobile" className="w-full rounded-lg shadow-elegant" />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ongoing Updates and Enhancements</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed mb-6">
            Once we had MVP released we had the need to begin to offer more robust content. Below shows wireframes of the current flow for customer comments and the 2 proposed options for adding audio and video into the app.
          </p>
          <img src={image7} alt="Audio and video enhancement wireframes" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="space-y-6">
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Real-Time Alerts</h3>
              <p className="text-muted-foreground">
                Push notifications and in-app alerts keep teams informed of critical customer experience events as they happen.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Mobile Dashboards</h3>
              <p className="text-muted-foreground">
                Optimized data visualizations that maintain clarity on smaller screens with touch-friendly drill-down capabilities.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Field Feedback System</h3>
              <p className="text-muted-foreground">
                Quick-capture forms with photo/video support for field agents to submit customer insights and issues instantly.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Outcome and Impact</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Successfully launched a mobile version of the dashboard & alert workflows, enabling users to access key insights from their phones. Field agents gained a direct channel to submit requests and feedback, reducing turnaround time for support and improving data quality from the field.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <p className="text-muted-foreground">User adoption within first month</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">50%</div>
              <p className="text-muted-foreground">Faster response to field issues</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">3x</div>
              <p className="text-muted-foreground">Increase in field feedback submissions</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Ongoing Updates</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Once we had MVP released we had the need to begin to offer more robust content. We explored adding audio and video capabilities to customer comments, allowing field agents to capture richer, more contextual feedback that text alone couldn't convey.
          </p>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default CXMobile;
