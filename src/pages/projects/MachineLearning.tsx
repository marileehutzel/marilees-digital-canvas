import CaseStudyLayout from "@/components/CaseStudyLayout";
import image1 from "@/assets/machine-learning/image-1.png";
import image2 from "@/assets/machine-learning/image-2.png";
import image3 from "@/assets/machine-learning/image-3.png";
import image4 from "@/assets/machine-learning/image-4.png";
import image5 from "@/assets/machine";

const MachineLearning = () => {
  return (
    <CaseStudyLayout
      title="Machine Learning CX"
      subtitle="Harnessing AI for Better Customer Experiences"
      context="As machine learning became central to customer experience strategies, the gap between powerful algorithms and user understanding grew wider. Teams needed a bridge."
      description="I designed an intuitive interface that democratizes machine learning insights, enabling customer experience teams to leverage predictive models without requiring data science expertise."
      disclaimer="To comply with my non-disclosure agreement, I have omitted and obfuscated confidential information in this case study. All information in this case study is my own and does not necessarily reflect the views of Concentrix."
    >
      <div className="space-y-16">
        <section>
          <h2 className="text-4xl md:text-3xl font-bold mb-6 animate-fade-in">Wireframes</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
            Wireframe mockups for a portion of the CXS product. Working through verbatim and sentence details and
            creating new categories. Process of unifying user experience across multiple areas of the product offering.
          </p>
        </section>

        <section className="space-y-8 animate-fade-in">
          <img src={image1} alt="Wireframe mockups and UX flow" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section>
          <h2 className="text-4xl md:text-3xl font-bold mb-6">Training The Model</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
            We needed a way to define categories to create L1 and L2 file structures, label the categories, gather
            examples and assign them to the correct category which in turn helps train the model by learning patterns
            and predicting categories for new data. The full power of the CXS category builder tool with multiple data
            sources along the top and the model structure on the left.
          </p>
        </section>

        <section className="space-y-8 animate-fade-in">
          <img src={image2} alt="Category builder tool interface" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="space-y-8 animate-fade-in">
          <img src={image3} alt="Model training and prediction flow" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section>
          <h2 className="text-3xl md:text-3xl font-bold mb-6">Analytics Dashboard</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
            After we defined categories we now had the ability to create amazing analytics dashboards to highlight all
            of the beautiful data.
          </p>
        </section>

        <section className="space-y-8 animate-fade-in">
          <img src={image4} alt="ML insights dashboard" className="w-1/2 h-auto mx-auto rounded-lg shadow-elegant" />
        </section>

        <section>
          <h2 className="text-3xl md:text-3xl font-bold mb-6">Confusion Matrices</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
            Working closely with dev and PHD colleagues I learned about confusion matrices and how utilizing these tools
            would help analysts understand their data in terms of true positives, true negatives, false positives, and
            false negatives. I then created a  user interface that (with the assistance of predictive analytics) made it
            easier to configure unstructured data which would in turn help train the ML model.
          </p>
        </section>

        <section className="space-y-8 animate-fade-in">
          <img src={image4} alt="ML insights dashboard" className="w-1/2 h-auto mx-auto rounded-lg shadow-elegant" />
        </section>

        <section>
          <h2 className="text-4xl md:text-3xl font-bold mb-6">Human Centered AI</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
            The interface presents model confidence scores, feature importance, and prediction explanations in plain
            language. Users can drill down into details when needed, but the default view prioritizes clarity and
            actionability over technical complexity.
          </p>
        </section>

        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6">Impact</h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-serif mb-8">
            Why This Project Mattered The Concentrix CXS Machine Learning project transformed unstructured data into
            actionable insight. What began as a proof of concept became a powerful interface that helped analysts train,
            evaluate, and refine AI models without needing a data science background. By visualizing confusion matrices,
            prediction accuracy, and category hierarchies, the tool made complex model behavior transparent and
            trustworthy. It bridged the gap between data science and design—turning technical outputs into intuitive,
            human-centered experiences. Equally important, the project fostered deep collaboration between designers,
            engineers, and PhD data scientists. This cross-functional momentum not only improved the product but also
            boosted team morale, proving that innovation thrives where disciplines meet.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">92%</div>
              <p className="text-muted-foreground">Prediction Accuracy</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">5x</div>
              <p className="text-muted-foreground">Faster Insights</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <p className="text-muted-foreground">Cost Reduction</p>
            </div>
          </div>
        </div>
      </div>
    </CaseStudyLayout>
  );
};

export default MachineLearning;
