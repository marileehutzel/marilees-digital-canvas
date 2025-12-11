import CaseStudyLayout from "@/components/CaseStudyLayout";

const LovableWebsite = () => {
  return (
    <CaseStudyLayout
      title="Lovable Website"
      subtitle="Project subtitle goes here"
      description="A brief description of the Lovable Website project and its goals."
    >
      <div className="space-y-32">
        <section className="text-center">
          <h2 className="mb-6 animate-fade-in">Section Title</h2>
          <p className="max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Add your project content here. Include descriptions, images, and insights about the design process.
          </p>
          {/* Add images here using: 
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <img src={yourImage} alt="Description" className="rounded-lg max-w-[50%] h-auto" />
          </div>
          */}
        </section>

        <section className="text-center">
          <h2 className="mb-12 animate-fade-in">Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-primary mb-2">XX%</div>
              <p>Metric description</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-primary mb-2">XX%</div>
              <p>Metric description</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl font-bold text-primary mb-2">XX+</div>
              <p>Metric description</p>
            </div>
          </div>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default LovableWebsite;
