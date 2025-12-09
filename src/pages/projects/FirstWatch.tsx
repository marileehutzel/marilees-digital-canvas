import CaseStudyLayout from "@/components/CaseStudyLayout";
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
        <section>
          <h2 className="mb-6">The Challenge</h2>
          <p>
            First Watch needed to create a web solution during their rebranding process. The new site had to incorporate
            their updated logo and brand textures while adding critical new functionality for adding customers to a
            digital waitlist.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="mb-6">Mobile / Small Format</h2>
          <p className="mb-6">
            Needed to create a web solution for First Watch who was re-branding during the process of site creation.
          </p>
          <img src={image1} alt="Mobile site design" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="space-y-8">
          <h2 className="mb-6">Mobile Sketches</h2>
          <p className="mb-6">
            Started with mobile sketches to define the core experience on smaller screens.
          </p>
          <img src={image2} alt="Mobile sketches and wireframes" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="space-y-8">
          <h2 className="mb-6">Early Mobile Prototype</h2>
          <p className="mb-6">
            Created early mobile prototypes in Illustrator to test navigation patterns.
          </p>
          <img src={image3} alt="Early mobile prototype" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="space-y-8">
          <h2 className="mb-6">Medium/Large Format</h2>
          <p className="mb-6">
            Developed preliminary sketches for desktop experience.
          </p>
          <img src={image4} alt="Desktop sketches" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="space-y-8">
          <h2 className="mb-6">Desktop / Large Format</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
            <img src={image5} alt="Desktop responsive home page" className="max-w-full md:max-w-[50%] h-auto rounded-lg shadow-elegant" />
            <img src={image6} alt="Desktop responsive menu" className="w-full md:w-1/2 rounded-lg shadow-elegant" />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="mb-6">Wait List Feature</h2>
          <p className="mb-6">
            Revolutionary waitlist system allowing customers to add themselves remotely.
          </p>
          <div className="flex justify-center">
            <img src={image7} alt="Wait list interface" className="w-1/2 rounded-lg shadow-elegant" />
          </div>
        </section>

        <section>
          <h2 className="mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="mb-3">Digital Waitlist</h3>
              <p>Revolutionary waitlist system allowing customers to add themselves remotely.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="mb-3">Responsive Menu</h3>
              <p>Beautiful, easy-to-navigate menu that adapts perfectly from mobile to desktop.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="mb-3">Brand Consistency</h3>
              <p>Seamlessly integrated new brand elements including updated logo and textures.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="mb-3">Location Finder</h3>
              <p>Intuitive location search helping customers find their nearest First Watch.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6">Impact</h2>
          <p className="mb-8">
            Successfully launched a modern, mobile-first website that aligned with First Watch's refreshed brand identity.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">35%</div>
              <p>Reduction in perceived wait times</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">Mobile</div>
              <p>First responsive design</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">2x</div>
              <p>Increase in online engagement</p>
            </div>
          </div>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default FirstWatch;