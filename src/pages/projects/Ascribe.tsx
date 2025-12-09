import CaseStudyLayout from "@/components/CaseStudyLayout";
import image1 from "@/assets/ascribe/image-1.png";
import image2 from "@/assets/ascribe/image-2.png";
import image3 from "@/assets/ascribe/image-3.png";
import image4 from "@/assets/ascribe/image-4.png";
import image5 from "@/assets/ascribe/image-5.png";
import image6 from "@/assets/ascribe/image-6.png";
import image7 from "@/assets/ascribe/image-7.png";
import image8 from "@/assets/ascribe/image-8.png";
import image9 from "@/assets/ascribe/image-9.png";
import image10 from "@/assets/ascribe/image-10.png";
import image11 from "@/assets/ascribe/image-11.png";
import image12 from "@/assets/ascribe/image-12.png";
import image13 from "@/assets/ascribe/image-13.png";
import image14 from "@/assets/ascribe/image-14.png";
import image15 from "@/assets/ascribe/image-15.png";
import image16 from "@/assets/ascribe/image-16.png";
import image17 from "@/assets/ascribe/image-17.png";
import image18 from "@/assets/ascribe/image-18.png";
import image19 from "@/assets/ascribe/image-19.png";
import image20 from "@/assets/ascribe/image-20.png";
import image21 from "@/assets/ascribe/image-21.png";
import image22 from "@/assets/ascribe/image-22.png";
import image23 from "@/assets/ascribe/image-23.png";
import image24 from "@/assets/ascribe/image-24.png";

const Ascribe = () => {
  return (
    <CaseStudyLayout
      title="Ascribe CX Inspector"
      subtitle="AI-Powered Text Analytics for Customer Experience"
      description="Ascribe CX Inspector is advanced web-based text analytics software that revolutionizes the analysis of open-end customer comments, enabling the discovery of remarkably clear and detailed insights instantly from extensive datasets using AI and generative technology."
    >
      <div className="space-y-32">
        <section className="space-y-8">
          <h2>The Challenge</h2>
          <p>
            Organizations collect thousands of customer comments through surveys and feedback channels, but traditional manual analysis methods only scratch the surface. Companies struggle to extract meaningful insights from open-ended responses at scale, often relying on basic word clouds that miss deeper themes and sentiment patterns.
          </p>
          <img src={image1} alt="Platform Challenge" className="w-full rounded-lg" />
        </section>

        <section className="space-y-8">
          <h2>Theme Extractor - AI-Powered Analysis</h2>
          <p>
            The Theme Extractor uses advanced AI to instantly analyze open-end comments with high accuracy. It extracts descriptive theme-based insights and clusters ideas into groups, enabling the discovery of remarkably clear and detailed insights instantly with precision results and unparalleled speed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={image2} alt="Theme Extractor Interface" className="w-full rounded-lg" />
            <img src={image3} alt="Theme Analysis Results" className="w-full rounded-lg" />
          </div>
        </section>

        <section className="space-y-8">
          <h2>Ask Ascribe - Conversational Data Analysis</h2>
          <p>
            Ask Ascribe answers any question you have about your data with insightful reports and summaries. Whether identifying key themes, exploring customer emotions, or determining areas for improvement, Ask Ascribe uncovers insights instantly. It's like interviewing your data!
          </p>
          <img src={image4} alt="Ask Ascribe Interface" className="w-full rounded-lg" />
        </section>

        <section className="space-y-8">
          <h2>Sentiment Analysis & Visualization</h2>
          <p>
            CX Inspector detects and visualizes customer sentiment, enabling teams to prioritize issues based on emotional impact. The platform creates visually appealing infographics and charts that help identify patterns, trends, and sentiments at a glance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={image5} alt="Sentiment Analysis" className="w-full rounded-lg" />
            <img src={image6} alt="Data Visualizations" className="w-full rounded-lg" />
          </div>
        </section>

        <section className="space-y-8">
          <h2>X-Score Satisfaction Metric</h2>
          <p>
            X-Score is Ascribe's proprietary customer experience measurement that combines sentiment and frequency of themes within open-ends to identify key drivers that will increase customer satisfaction and loyalty.
          </p>
          <img src={image7} alt="X-Score Dashboard" className="w-full rounded-lg" />
        </section>

        <section className="space-y-8">
          <h2>Interactive Data Exploration</h2>
          <p>
            The platform features an interactive interface for easy data exploration with one-click results, powerful filters, co-occurrence reports, trend analysis, and crosstabs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <img src={image8} alt="Interactive Dashboard" className="w-full rounded-lg" />
            <img src={image9} alt="Filter Options" className="w-full rounded-lg" />
            <img src={image10} alt="Data Export" className="w-full rounded-lg" />
          </div>
        </section>

        <section className="space-y-8">
          <h2>Multi-Lingual Capabilities</h2>
          <p>
            CX Inspector can analyze customer comments in multiple languages and produce reports in the language of your choice.
          </p>
          <img src={image11} alt="Multi-Language Support" className="w-full rounded-lg" />
        </section>

        <section className="space-y-8">
          <h2>Theme Clustering & Pattern Recognition</h2>
          <p>
            Advanced algorithms cluster related themes and identify patterns across thousands of responses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={image12} alt="Theme Clustering" className="w-full rounded-lg" />
            <img src={image13} alt="Pattern Recognition" className="w-full rounded-lg" />
          </div>
        </section>

        <section className="space-y-8">
          <h2>Analysis Dashboard</h2>
          <p>
            The comprehensive dashboard provides instant access to all analysis results, with charts and tables appearing immediately after file upload.
          </p>
          <img src={image14} alt="Analysis Dashboard" className="w-full rounded-lg" />
        </section>

        <section className="space-y-8">
          <h2>Trend Analysis & Time Comparisons</h2>
          <p>
            Track how customer sentiment and key themes evolve over time with trend reports and historical comparisons.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={image15} alt="Trend Analysis" className="w-full rounded-lg" />
            <img src={image16} alt="Historical Comparison" className="w-full rounded-lg" />
          </div>
        </section>

        <section className="space-y-8">
          <h2>Generative AI Configuration</h2>
          <p>
            Users have control over the level of generative AI used in their analysis, balancing speed, depth of insights, and resource usage.
          </p>
          <img src={image17} alt="AI Configuration Options" className="w-full rounded-lg" />
        </section>

        <section className="space-y-8">
          <h2>Enterprise-Scale Processing</h2>
          <p>
            CX Inspector can analyze thousands of customer responses efficiently, built for large-scale enterprise datasets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <img src={image18} alt="Large Dataset Processing" className="w-full rounded-lg" />
            <img src={image19} alt="Performance Metrics" className="w-full rounded-lg" />
            <img src={image20} alt="Scale Capabilities" className="w-full rounded-lg" />
          </div>
        </section>

        <section className="space-y-8">
          <h2>Voxco Platform Integration</h2>
          <p>
            Ascribe CX Inspector is integrated into Voxco's all-in-one multi-channel survey platform for seamless feedback collection and analysis.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={image21} alt="Platform Integration" className="w-full rounded-lg" />
            <img src={image22} alt="Unified Workflow" className="w-full rounded-lg" />
          </div>
        </section>

        <section className="space-y-8">
          <h2>Impact & Results</h2>
          <p>
            Ascribe CX Inspector has transformed how organizations extract value from open-ended customer feedback, moving far beyond basic word clouds to uncover true strategic intelligence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={image23} alt="Platform Impact" className="w-full rounded-lg" />
            <img src={image24} alt="Customer Success" className="w-full rounded-lg" />
          </div>
        </section>

        <section className="animate-fade-in">
          <h2 className="mb-8">Platform Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">1000s</div>
              <p>Comments analyzed instantly</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p>Theme extraction accuracy</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <p>Languages supported</p>
            </div>
          </div>
        </section>

        <section className="space-y-8 text-center">
          <blockquote className="text-2xl font-serif italic border-l-4 border-primary pl-8">
            "McGraw Hill collects thousands of customer comments through research, but we were not fully capitalizing on the breadth and depth of information available. With CX Inspector's advanced text analysis capabilities, we can extract emerging themes and sentiment providing valuable knowledge to our teams."
          </blockquote>
          <p className="font-serif">— Pam, Market Research, McGraw Hill</p>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default Ascribe;