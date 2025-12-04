import CaseStudyLayout from "@/components/CaseStudyLayout";
import image1 from "@/assets/mcalisters/image-1.png";
import image2 from "@/assets/mcalisters/image-2.png";
import image3 from "@/assets/mcalisters/image-3.png";
import image4 from "@/assets/mcalisters/image-4.png";
import image5 from "@/assets/mcalisters/image-5.png";
import image6 from "@/assets/mcalisters/image-6.png";

const McAlistersDeli = () => {
  return (
    <CaseStudyLayout
      title="McAlister's Deli"
      subtitle="Loyalty-Based User Experience Design"
      description="Tasked with creating an app for McAlister's Deli focusing on new loyalty based user experience. In addition to UI and UX for this project I also created the custom icon set."
    >
      <div className="space-y-32">
        <section className="space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Initial Concepts & Sketches</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed max-w-4xl">
            Early ideation phase exploring app structure, loyalty program integration, and custom iconography for the McAlister's Deli brand.
          </p>
          <img src={image1} alt="Initial concept sketches and wireframes" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Loyalty Program Architecture</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed max-w-4xl">
            Detailed exploration of the loyalty program flow, rewards structure, and user journey mapping to create a seamless experience.
          </p>
          <img src={image2} alt="Loyalty program wireframes and flow" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="animate-fade-in -mx-6 md:-mx-12 lg:-mx-[calc((100vw-1024px)/2)] px-6 md:px-12 lg:px-[calc((100vw-1024px)/2)] py-16 bg-muted/100">
          <div className="max-w-7xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Custom Icon Set Design</h2>
            <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed max-w-4xl">
              Development of a comprehensive custom icon set that aligns with McAlister's Deli brand identity and enhances the user interface clarity.
            </p>
            <img src={image3} alt="Custom icon set development" className="w-full rounded-lg shadow-elegant" />
          </div>
        </section>

        <section className="space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Menu & Ordering Interface</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed max-w-4xl">
            Designing an intuitive ordering interface that integrates seamlessly with the loyalty program and showcases menu items effectively.
          </p>
          <img src={image4} alt="Menu and ordering interface designs" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">User Flow Refinement</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed max-w-4xl">
            Iterative refinement of user flows to ensure smooth navigation between ordering, rewards, and account management features.
          </p>
          <img src={image5} alt="User flow diagrams and refinements" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Final Design Concepts</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed max-w-4xl">
            Polished design concepts bringing together the loyalty experience, custom iconography, and intuitive interface into a cohesive mobile app solution.
          </p>
          <img src={image6} alt="Final design concepts and mockups" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">Custom</div>
              <p className="text-muted-foreground">Icon set designed from scratch</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">Loyalty</div>
              <p className="text-muted-foreground">Program UX fully integrated</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">Seamless</div>
              <p className="text-muted-foreground">Ordering to rewards flow</p>
            </div>
          </div>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default McAlistersDeli;
