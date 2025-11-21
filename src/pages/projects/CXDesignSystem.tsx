import CaseStudyLayout from "@/components/CaseStudyLayout";
import heroImage from "@/assets/hero/cx-design-system-hero.png";
import image1 from "@/assets/cx-design-system/image-1.png";
import image2 from "@/assets/cx-design-system/image-2.png";

const CXDesignSystem = () => {
  return (
    <CaseStudyLayout
      title="CX Design System"
      subtitle="Enterprise design system & components"
      description="A comprehensive redesign that transformed the navigation and interface elements, establishing a cohesive and scalable foundation for continued product growth."
      disclaimer="Note: This case study showcases design work completed during my time at Concentrix. All designs remain the intellectual property of Concentrix."
    >
      <div className="space-y-32">
        <div className="space-y-8">
          <img src={heroImage} alt="CX Design System overview" className="w-full rounded-lg shadow-elegant" />
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">The Challenge</h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-serif">
              The existing interface lacked consistency and scalability, making it difficult to support new product
              features and maintain a cohesive user experience across the platform.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Navigation Redesign</h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-serif mb-8">
              The navigation was redesigned to move primary actions to a left-hand panel while adding a right-hand panel
              for filters and search, creating a more intuitive and efficient workflow.
            </p>
            <img
              src={image1}
              alt="Navigation redesign with left and right panels"
              className="w-full rounded-lg shadow-elegant"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Interface Refinement</h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-serif mb-8">
              Graphics and interface elements were streamlined for clarity and usability, establishing a cohesive design
              language that continues to support new product features and growth.
            </p>
            <img
              src={image2}
              alt="Streamlined interface elements and components"
              className="w-full rounded-lg shadow-elegant"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Impact</h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-serif">
              These updates established a scalable foundation that improved usability, consistency, and the ability to
              rapidly deploy new features across the platform.
            </p>
          </div>
        </div>
      </div>
    </CaseStudyLayout>
  );
};

export default CXDesignSystem;
