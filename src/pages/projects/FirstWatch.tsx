import CaseStudyLayout from "@/components/CaseStudyLayout";
import heroImage from "@/assets/hero/firstwatch-hero.png";
import image1 from "@/assets/firstwatch/image-1.jpg";
import image2 from "@/assets/firstwatch/image-2.png";
import image3 from "@/assets/firstwatch/image-3.png";
import image4 from "@/assets/firstwatch/image-4.jpg";
import image5 from "@/assets/firstwatch/image-5.png";
import image6 from "@/assets/firstwatch/image-6.png";
import image7 from "@/assets/firstwatch/image-7.jpg";

const FirstWatch = () => {
  return (
    <CaseStudyLayout
      title="First Watch"
      subtitle="Restaurant Website Redesign"
      context="Brand Refresh & Digital Experience"
      description="Mobile-first web solution during a complete brand refresh, including new waitlist functionality"
      disclaimer="Work completed as part of agency engagement with First Watch restaurants."
    >
      <div className="space-y-32 animate-fade-in">
        <section className="space-y-8 animate-fade-in">
          <img src={heroImage} alt="First Watch website redesign" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Challenge</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
            First Watch needed to create a web solution during their rebranding process. The new site had to incorporate
            their updated logo and brand textures while adding critical new functionality for adding customers to a
            digital waitlist. The design needed to work seamlessly across all device sizes, with a strong focus on
            mobile experience for on-the-go customers.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Mobile / Small Format</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed mb-6">
            Needed to create a web solution for First Watch who was re-branding during the process of site creation. New
            updated logo and textures had to be included as well as new functionality for adding customers to a wait
            list.
          </p>
          <img src={image1} alt="Mobile site design" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Mobile Sketches</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed mb-6">
            Started with mobile sketches to define the core experience on smaller screens. This mobile-first approach
            ensured the most important features—menu access and waitlist management—were optimized for the primary use
            case of customers on their phones.
          </p>
          <img src={image2} alt="Mobile sketches and wireframes" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Early Mobile Prototype</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed mb-6">
            Created early mobile prototypes in Illustrator to test navigation patterns, menu layouts, and the waitlist
            flow before expanding to larger screen sizes.
          </p>
          <img src={image3} alt="Early mobile prototype in Illustrator" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Medium/Large Format</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed mb-6">
            Developed preliminary sketches for desktop experience, expanding the mobile concepts to take advantage of
            larger screens while maintaining consistency with the mobile design.
          </p>
          <img src={image4} alt="Desktop sketches" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Desktop / Large Format</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
            <img src={image5} alt="Desktop responsive home page" className="max-w-full md:max-w-[50%] h-auto rounded-lg shadow-elegant" />
            <img src={image6} alt="Desktop responsive menu" className="w-full md:w-1/2 rounded-lg shadow-elegant" />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Wait List Feature</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed mb-6">
            Revolutionary waitlist system allowing customers to add themselves remotely and receive real-time updates on
            their table status.
          </p>
          <div className="flex justify-center">
            <img src={image7} alt="Wait list interface" className="w-1/2 rounded-lg shadow-elegant" />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Digital Waitlist</h3>
              <p className="text-muted-foreground">
                Revolutionary waitlist system allowing customers to add themselves remotely and receive real-time
                updates on their table status.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Responsive Menu</h3>
              <p className="text-muted-foreground">
                Beautiful, easy-to-navigate menu that adapts perfectly from mobile to desktop, showcasing First Watch's
                breakfast favorites.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Brand Consistency</h3>
              <p className="text-muted-foreground">
                Seamlessly integrated new brand elements including updated logo, color palette, and textures throughout
                the experience.
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
              <p className="text-sm text-muted-foreground">
                Preliminary sketches expanding mobile concepts to larger screens
              </p>
            </div>
            <div className="p-6 bg-muted/30 rounded-lg">
              <h4 className="font-semibold mb-2">Responsive Prototypes</h4>
              <p className="text-sm text-muted-foreground">
                High-fidelity designs demonstrating responsive behavior across breakpoints
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Impact</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Successfully launched a modern, mobile-first website that aligned with First Watch's refreshed brand
            identity. The digital waitlist feature became a key differentiator, improving customer experience and
            reducing perceived wait times by allowing guests to join the queue before arriving at the restaurant.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">35%</div>
              <p className="text-muted-foreground">Reduction in perceived wait times</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">Mobile</div>
              <p className="text-muted-foreground">First responsive design</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">2x</div>
              <p className="text-muted-foreground">Increase in online engagement</p>
            </div>
          </div>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default FirstWatch;
