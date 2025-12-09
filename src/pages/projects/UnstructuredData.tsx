import CaseStudyLayout from "@/components/CaseStudyLayout";
import image1 from "@/assets/unstructured-data/image-1.png";
import image2 from "@/assets/unstructured-data/image-2.png";
import image3 from "@/assets/unstructured-data/image-3.png";
import image4 from "@/assets/unstructured-data/image-4.png";
import image5 from "@/assets/unstructured-data/image-5.png";
import image6 from "@/assets/unstructured-data/image-6.png";
import image7 from "@/assets/unstructured-data/image-7.png";
import image8 from "@/assets/unstructured-data/image-8.png";
import image9 from "@/assets/unstructured-data/image-9.png";

const UnstructuredData = () => {
  return (
    <CaseStudyLayout
      title="Unstructured Data"
      subtitle="Making Sense of Complex Data"
      context="Concentrix CX Platform"
      description="A comprehensive solution for analyzing and visualizing unstructured data, transforming raw information into actionable insights"
      disclaimer="Due to confidentiality agreements, some details and data have been anonymized or modified."
    >
      <div className="space-y-32 animate-fade-in">
        <section className="space-y-8 animate-fade-in">
          <img src={image1} alt="Unstructured data analysis interface" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section>
          <h2 className="mb-6">The Challenge</h2>
          <p>
            Organizations generate massive amounts of unstructured data daily—from customer feedback, social media, emails, and documents. Traditional analytics tools struggled to process and extract meaningful insights from this complex, non-tabular data. We needed to build a solution that could help teams understand patterns, sentiment, and trends hidden within unstructured information.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="mb-6">Discovery & Research</h2>
          <p className="mb-6">
            Through stakeholder interviews and user research, we identified key pain points: data was siloed, difficult to search, and insights required manual effort. Teams needed a way to automatically categorize, tag, and visualize unstructured data at scale.
          </p>
          <img src={image2} alt="Research findings and user insights" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="space-y-8">
          <h2 className="mb-6">Information Architecture</h2>
          <p className="mb-6">
            We designed a flexible architecture that could handle various data sources and formats. The system needed to support text analysis, sentiment detection, entity recognition, and topic modeling while remaining intuitive for non-technical users.
          </p>
          <img src={image3} alt="System architecture and data flow" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="space-y-8">
          <h2 className="mb-6">Visualization Design</h2>
          <p className="mb-6">
            Creating effective visualizations for unstructured data required careful consideration. We explored multiple approaches to represent text patterns, sentiment trends, and entity relationships in ways that were both informative and accessible.
          </p>
          <img src={image4} alt="Visualization design explorations" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="space-y-8">
          <h2 className="mb-6">Interaction Patterns</h2>
          <p className="mb-6">
            We designed intuitive interaction patterns that allow users to drill down from high-level summaries to individual data points, filter by multiple criteria, and save custom views for recurring analysis needs.
          </p>
          <img src={image5} alt="Interactive features and user flows" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="space-y-8">
          <h2 className="mb-6">Data Processing Pipeline</h2>
          <p className="mb-6">
            Behind the scenes, we built a robust data processing pipeline that could handle various file formats, extract key information, and apply machine learning models for classification and sentiment analysis.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <img src={image6} alt="Data processing workflow" className="w-full rounded-lg shadow-elegant" />
            <img src={image7} alt="Machine learning integration" className="w-full rounded-lg shadow-elegant" />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="mb-6">Search & Filter</h2>
          <p className="mb-6">
            Advanced search and filtering capabilities were essential. Users needed to quickly find relevant documents, filter by sentiment, date ranges, entities, and custom tags—all while maintaining context.
          </p>
          <img src={image8} alt="Search and filter interface" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="space-y-8">
          <h2 className="mb-6">Final Solution</h2>
          <p className="mb-6">
            The final solution seamlessly combined data ingestion, processing, visualization, and reporting into a unified platform. Users could upload unstructured data, automatically extract insights, and create custom reports—all through an intuitive interface.
          </p>
          <img src={image9} alt="Final solution overview" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section>
          <h2 className="mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="mb-3">Automated Text Analysis</h3>
              <p>
                Machine learning-powered analysis automatically extracts entities, sentiment, and topics from unstructured text.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="mb-3">Interactive Visualizations</h3>
              <p>
                Dynamic charts and graphs that make complex data patterns easy to understand and explore.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="mb-3">Advanced Search</h3>
              <p>
                Powerful search capabilities with filtering by sentiment, entities, dates, and custom criteria.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="mb-3">Custom Reports</h3>
              <p>
                Create and save custom report templates for recurring analysis needs and stakeholder presentations.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6">Impact</h2>
          <p className="mb-8">
            The Unstructured Data platform transformed how organizations interact with their qualitative information. By automating analysis and providing intuitive visualizations, teams could uncover insights that were previously hidden in mountains of text—enabling faster, more informed decision-making.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">Auto</div>
              <p>Sentiment & entity extraction</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">Multi</div>
              <p>Data source integration</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">Custom</div>
              <p>Report templates available</p>
            </div>
          </div>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default UnstructuredData;