import CaseStudyLayout from "@/components/CaseStudyLayout";
import image1 from "@/assets/cx-design-system/image-1.png";
import image2 from "@/assets/cx-design-system/image-2.png";
import iconsImg from "@/assets/cx-design-system/CXS - Style Guide - Icons.png";
import colorsImg from "@/assets/cx-design-system/Colors.png";
import colorTokensImg from "@/assets/cx-design-system/Color Tokens.png";
import numberScaleImg from "@/assets/cx-design-system/Number Scale.png";
import radiusImg from "@/assets/cx-design-system/Radius.png";
import typographyImg from "@/assets/cx-design-system/Typography.png";
import effectsImg from "@/assets/cx-design-system/Effects.png";

const CXDesignSystem = () => {
  return (
    <CaseStudyLayout
      title="CX Design System"
      subtitle="Enterprise design system & components"
      description="A comprehensive redesign that transformed the navigation and interface elements, establishing a cohesive and scalable foundation for continued product growth."
      disclaimer="Note: This case study showcases design work completed during my time at Concentrix. All designs remain the intellectual property of Concentrix."
    >
      <div className="space-y-32">
        <div className="space-y-12">
          <div>
            <h4 className="mb-6">The Challenge</h4>
            <p>
              The existing interface lacked consistency and scalability, making it difficult to support new product
              features and maintain a cohesive user experience across the platform.
            </p>
          </div>

          <div>
            <h4 className="mb-6">Navigation Redesign</h4>
            <p className="mb-8">
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
            <h4 className="mb-6">Interface Refinement</h4>
            <p className="mb-8">
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
            <h4 className="mb-6">Icons</h4>
            <p className="mb-8">
              A unified icon set was developed to ensure visual consistency and clarity across the entire platform.
            </p>
            <img
              src={iconsImg}
              alt="Style guide showing the icon system and iconography standards"
              className="w-full rounded-lg shadow-elegant"
            />
          </div>

          <div>
            <h4 className="mb-6">Colors</h4>
            <p className="mb-8">
              A core color palette was defined to maintain brand consistency and ensure accessibility across all interface elements.
            </p>
            <img
              src={colorsImg}
              alt="Style guide showing the color palette"
              className="w-full rounded-lg shadow-elegant"
            />
          </div>

          <div>
            <h4 className="mb-6">Color Tokens</h4>
            <p className="mb-8">
              Design tokens were established to systematize color usage, enabling consistent theming and scalable styling across the platform.
            </p>
            <img
              src={colorTokensImg}
              alt="Style guide showing color token definitions"
              className="w-full rounded-lg shadow-elegant"
            />
          </div>

          <div>
            <h4 className="mb-6">Number Scale</h4>
            <p className="mb-8">
              A standardized number scale was created to ensure consistent sizing and spacing throughout the design system.
            </p>
            <img
              src={numberScaleImg}
              alt="Style guide showing the number scale system"
              className="w-full rounded-lg shadow-elegant"
            />
          </div>

          <div>
            <h4 className="mb-6">Radius</h4>
            <p className="mb-8">
              Border radius values were standardized to create a cohesive visual language for all UI components.
            </p>
            <img
              src={radiusImg}
              alt="Style guide showing border radius standards"
              className="w-full rounded-lg shadow-elegant"
            />
          </div>

          <div>
            <h4 className="mb-6">Typography</h4>
            <p className="mb-8">
              A typographic scale was established to ensure readability and visual hierarchy across the entire product.
            </p>
            <img
              src={typographyImg}
              alt="Style guide showing typography standards"
              className="w-full rounded-lg shadow-elegant"
            />
          </div>

          <div>
            <h4 className="mb-6">Effects</h4>
            <p className="mb-8">
              Shadow and effect styles were defined to create depth and visual consistency across interface elements.
            </p>
            <img
              src={effectsImg}
              alt="Style guide showing shadow and effect standards"
              className="w-full rounded-lg shadow-elegant"
            />
          </div>

          <div>
            <h4 className="mb-6">Impact</h4>
            <p className="mb-8">
              These updates established a scalable foundation that improved usability, consistency, and the ability to
              rapidly deploy new features across the platform.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">50%</div>
                <p>Faster feature development</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p>Reusable components created</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">Zero</div>
                <p>Design inconsistencies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CaseStudyLayout>
  );
};

export default CXDesignSystem;