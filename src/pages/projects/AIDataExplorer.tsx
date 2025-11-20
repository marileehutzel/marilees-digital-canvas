import CaseStudyLayout from "@/components/CaseStudyLayout";

const heroImage = "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/src/assets/ai-data-explorer-hero.png";
const image1 = "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/src/assets/ai-data-explorer/image-1.png";
const image2 = "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/src/assets/ai-data-explorer/image-2.png";
const image3 = "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/src/assets/ai-data-explorer/image-3.png";

const AIDataExplorer = () => {
  return (
    <CaseStudyLayout
      title="AI Data Explorer"
      subtitle="Intelligent Data Discovery"
      context="Data analysts spend up to 80% of their time preparing and exploring data before they can extract insights. This inefficiency stifles innovation and delays decision-making."
      description="I designed an AI-powered data exploration platform that automatically surfaces patterns, anomalies, and relationships in complex datasets, transforming weeks of analysis into minutes of discovery."
      disclaimer="To comply with my non-disclosure agreement, I have omitted and obfuscated confidential information in this case study. All information in this case study is my own and does not necessarily reflect the views of Concentrix."
    >
      <div className="space-y-16">
        <section className="space-y-8 animate-fade-in">
          <img src={heroImage} alt="AI Data Explorer platform interface" className="w-full rounded-lg shadow-elegant" />
        </section>

        <div className="text-center space-y-6 animate-fade-in">
          <h3 className="text-3xl font-bold text-foreground">
            Intelligent Discovery
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-serif">
            The platform uses natural language processing to understand user
            questions and automatically generates relevant visualizations,
            statistical analyses, and predictive models. Users can refine
            results through conversation, making data exploration feel natural
            and intuitive.
          </p>
        </div>

        <section className="space-y-8 animate-fade-in">
          <img src={image1} alt="Natural language query interface" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="space-y-8 animate-fade-in">
          <img src={image2} alt="AI-powered data insights" className="w-full rounded-lg shadow-elegant" />
        </section>

        <div className="bg-card p-8 rounded-2xl shadow-card animate-fade-in">
          <h4 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Core Capabilities
          </h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h5 className="font-semibold text-foreground mb-3">
                Automated Insights
              </h5>
              <p className="text-muted-foreground font-serif">
                AI automatically identifies correlations, outliers, and trends,
                presenting findings in plain language with supporting
                visualizations.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-3">
                Natural Language Queries
              </h5>
              <p className="text-muted-foreground font-serif">
                Ask questions in plain English and receive instant visual
                answers, no SQL or programming required.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-3">
                Smart Recommendations
              </h5>
              <p className="text-muted-foreground font-serif">
                The system suggests relevant analyses based on your data
                characteristics and exploration patterns.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-3">
                Collaborative Workspace
              </h5>
              <p className="text-muted-foreground font-serif">
                Share discoveries, annotate findings, and build on teammates'
                work in a unified environment.
              </p>
            </div>
          </div>
        </div>

        <section className="space-y-8 animate-fade-in">
          <img src={image3} alt="Collaborative data exploration workspace" className="w-full rounded-lg shadow-elegant" />
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default AIDataExplorer;
