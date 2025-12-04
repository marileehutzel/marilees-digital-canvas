import CaseStudyLayout from "@/components/CaseStudyLayout";
import heroImage from "@/assets/hero/machine-learning-hero.png";
import image1 from "@/assets/machine-learning/image-1.png";
import image2 from "@/assets/machine-learning/image-2.png";
import image3 from "@/assets/machine-learning/image-3.png";
import image4 from "@/assets/machine-learning/image-4.png";

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
        <section className="space-y-8 animate-fade-in">
          <img
            src={heroImage}
            alt="Machine Learning CX platform interface"
            className="w-full rounded-lg shadow-elegant"
          />
        </section>

        <div className="mx-auto space-y-6 animate-fade-in">
          <h3 className="text-3xl font-bold text-foreground">Wireframes</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-serif">
            Wireframe mockups for a portion of the CXS product. Working through verbatim and sentence details and
            creating new categories. Process of unifying user experience across multiple areas of the product offering.
          </p>
        </div>

        <section className="space-y-8 animate-fade-in">
          <img src={image1} alt="Wireframe mockups and UX flow" className="w-full rounded-lg shadow-elegant" />
        </section>

        <div className="text-left space-y-6 animate-fade-in">
          <h3 className="text-3xl font-bold text-foreground">Training The Model</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-serif">
            We needed a way to define categories to create L1 and L2 file structures, label the categories, gather
            examples and assign them to the correct category which in turn helps train the model by learning patterns
            and predicting categories for new data. The full power of the CXS category builder tool with multiple data
            sources along the top and the model structure on the left.
          </p>
        </div>

        <section className="space-y-8 animate-fade-in">
          <img src={image2} alt="Category builder tool interface" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="space-y-8 animate-fade-in">
          <img src={image3} alt="Model training and prediction flow" className="w-full rounded-lg shadow-elegant" />
        </section>

        <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
          <div className="bg-card p-6 rounded-xl shadow-card text-center">
            <div className="text-4xl font-bold text-primary mb-2">92%</div>
            <p className="text-muted-foreground font-serif">Prediction Accuracy</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-card text-center">
            <div className="text-4xl font-bold text-primary mb-2">5x</div>
            <p className="text-muted-foreground font-serif">Faster Insights</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-card text-center">
            <div className="text-4xl font-bold text-primary mb-2">40%</div>
            <p className="text-muted-foreground font-serif">Cost Reduction</p>
          </div>
        </div>

        <section className="space-y-8 animate-fade-in">
          <img src={image4} alt="ML insights dashboard" className="w-full rounded-lg shadow-elegant" />
        </section>

        <div className="text-left space-y-6 animate-fade-in">
          <h3 className="text-3xl font-bold text-foreground">Human-Centered AI</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-serif">
            The interface presents model confidence scores, feature importance, and prediction explanations in plain
            language. Users can drill down into details when needed, but the default view prioritizes clarity and
            actionability over technical complexity.
          </p>
        </div>
      </div>
    </CaseStudyLayout>
  );
};

export default MachineLearning;
