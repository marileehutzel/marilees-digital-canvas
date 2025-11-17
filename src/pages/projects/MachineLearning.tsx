import CaseStudyLayout from "@/components/CaseStudyLayout";

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
        <div className="text-center space-y-6 animate-fade-in">
          <h3 className="text-3xl font-bold text-foreground">The Vision</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-serif">
            Transform complex ML predictions into actionable customer insights
            that any team member can understand and act upon, regardless of
            their technical background.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
          <div className="bg-card p-6 rounded-xl shadow-card text-center">
            <div className="text-4xl font-bold text-primary mb-2">92%</div>
            <p className="text-muted-foreground font-serif">
              Prediction Accuracy
            </p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-card text-center">
            <div className="text-4xl font-bold text-primary mb-2">5x</div>
            <p className="text-muted-foreground font-serif">
              Faster Insights
            </p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-card text-center">
            <div className="text-4xl font-bold text-primary mb-2">40%</div>
            <p className="text-muted-foreground font-serif">
              Cost Reduction
            </p>
          </div>
        </div>

        <div className="text-center space-y-6 animate-fade-in">
          <h3 className="text-3xl font-bold text-foreground">
            Human-Centered AI
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-serif">
            The interface presents model confidence scores, feature importance,
            and prediction explanations in plain language. Users can drill down
            into details when needed, but the default view prioritizes clarity
            and actionability over technical complexity.
          </p>
        </div>
      </div>
    </CaseStudyLayout>
  );
};

export default MachineLearning;
