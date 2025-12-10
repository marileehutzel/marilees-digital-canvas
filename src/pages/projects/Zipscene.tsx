import CaseStudyLayout from "@/components/CaseStudyLayout";
import image2 from "@/assets/zipscene/image-2.png";
import image3 from "@/assets/zipscene/image-3.png";
import image4 from "@/assets/zipscene/image-4.png";
import image5 from "@/assets/zipscene/image-5.png";
import image6 from "@/assets/zipscene/image-6.png";
import image7 from "@/assets/zipscene/image-7.png";

const Zipscene = () => {
  return (
    <CaseStudyLayout
      title="Zipscene Analytics Dashboard"
      subtitle="Internal Analytics Tool"
      description="Tasked with creating an internal analytics tool to help generate effective campaigns in the restaurant industry to increase sales and productivity."
    >
      <section className="space-y-8">
        <div className="space-y-4">
          <h4>Insights Home Page</h4>
          <p className="max-w-3xl">
            Use our database to identify new insights for Guests, Locations and Market Conditions
          </p>
        </div>
        <div className="space-y-6">
          <img src={image2} alt="Insights home page interface" className="w-full rounded-lg shadow-lg" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={image3} alt="Insights feature detail" className="w-full rounded-lg shadow-lg" />
            <img src={image4} alt="Insights data visualization" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-4">
          <h4>Advisor Home Page</h4>

          <img src={image5} alt="Advisor home page" className="w-full rounded-lg shadow-lg" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={image6} alt="Advisor feature detail" className="w-full rounded-lg shadow-lg" />
            <img src={image7} alt="Custom pixel perfect icon font" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="space-y-16">
        <div className="space-y-4">
          <h4>Custom Iconography</h4>
          <p className="max-w-3xl">
            Designed a custom pixel-perfect icon font to create a unified visual language throughout the analytics
            platform.
          </p>
        </div>
      </section>

      <section className="space-y-16">
        <h4>Impact</h4>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">Custom</div>
            <p>Icon font designed</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">Unified</div>
            <p>Visual language created</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">Restaurant</div>
            <p>Industry campaigns improved</p>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
};

export default Zipscene;
