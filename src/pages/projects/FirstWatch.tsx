import CaseStudyLayout from "@/components/CaseStudyLayout";

const FirstWatch = () => {
  return (
    <CaseStudyLayout
      title="First Watch"
      subtitle="Restaurant Website Redesign"
      context="Brand Refresh & Digital Experience"
      description="Mobile-first web solution during a complete brand refresh, including new waitlist functionality"
      disclaimer="Work completed as part of agency engagement with First Watch restaurants."
    >
      <div className="space-y-12 animate-fade-in">
        <section>
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            First Watch needed to create a web solution during their rebranding process. The new site had to incorporate their updated logo and brand textures while adding critical new functionality for adding customers to a digital waitlist. The design needed to work seamlessly across all device sizes, with a strong focus on mobile experience for on-the-go customers.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Design Process</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Mobile / Small Format</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Started with mobile sketches to define the core experience on smaller screens. This mobile-first approach ensured the most important features—menu access and waitlist management—were optimized for the primary use case of customers on their phones.
              </p>
              <p className="text-muted-foreground">
                Created early mobile prototypes in Illustrator to test navigation patterns, menu layouts, and the waitlist flow before expanding to larger screen sizes.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Medium/Large Format</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Developed preliminary sketches for desktop experience, expanding the mobile concepts to take advantage of larger screens while maintaining consistency with the mobile design. The desktop version provided more immersive food photography and easier menu browsing while keeping the waitlist functionality prominent.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Digital Waitlist</h3>
              <p className="text-muted-foreground">
                Revolutionary waitlist system allowing customers to add themselves remotely and receive real-time updates on their table status.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Responsive Menu</h3>
              <p className="text-muted-foreground">
                Beautiful, easy-to-navigate menu that adapts perfectly from mobile to desktop, showcasing First Watch's breakfast favorites.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Brand Consistency</h3>
              <p className="text-muted-foreground">
                Seamlessly integrated new brand elements including updated logo, color palette, and textures throughout the experience.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Location Finder</h3>
              <p className="text-muted-foreground">
                Intuitive location search helping customers find their nearest First Watch and check current wait times.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Design Artifacts</h2>
          <div className="space-y-4">
            <div className="p-6 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">Mobile Sketches</h4>
              <p className="text-sm text-muted-foreground">Initial concept explorations for small screen experiences</p>
            </div>
            <div className="p-6 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">Desktop Sketches</h4>
              <p className="text-sm text-muted-foreground">Preliminary sketches expanding mobile concepts to larger screens</p>
            </div>
            <div className="p-6 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">Responsive Prototypes</h4>
              <p className="text-sm text-muted-foreground">High-fidelity designs demonstrating responsive behavior across breakpoints</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Outcome</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Successfully launched a modern, mobile-first website that aligned with First Watch's refreshed brand identity. The digital waitlist feature became a key differentiator, improving customer experience and reducing perceived wait times by allowing guests to join the queue before arriving at the restaurant.
          </p>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default FirstWatch;
