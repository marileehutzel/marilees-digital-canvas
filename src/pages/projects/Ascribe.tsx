import CaseStudyLayout from "@/components/CaseStudyLayout";
import heroImage from "@/assets/hero/ascribe-hero.png";
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
          <img src={heroImage} alt="Ascribe Platform Overview" className="w-full rounded-lg" />
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">The Challenge</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            Organizations collect thousands of customer comments through surveys and feedback channels, but traditional manual analysis methods only scratch the surface. Companies struggle to extract meaningful insights from open-ended responses at scale, often relying on basic word clouds that miss deeper themes and sentiment patterns.
          </p>
          <img src={image1} alt="Platform Challenge" className="w-full rounded-lg" />
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Theme Extractor - AI-Powered Analysis</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            The Theme Extractor uses advanced AI to instantly analyze open-end comments with high accuracy. It extracts descriptive theme-based insights and clusters ideas into groups, enabling the discovery of remarkably clear and detailed insights instantly with precision results and unparalleled speed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={image2} alt="Theme Extractor Interface" className="w-full rounded-lg" />
            <img src={image3} alt="Theme Analysis Results" className="w-full rounded-lg" />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Ask Ascribe - Conversational Data Analysis</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            Ask Ascribe answers any question you have about your data with insightful reports and summaries. Whether identifying key themes, exploring customer emotions, or determining areas for improvement, Ask Ascribe uncovers insights instantly. It's like interviewing your data!
          </p>
          <img src={image4} alt="Ask Ascribe Interface" className="w-full rounded-lg" />
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Sentiment Analysis & Visualization</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            CX Inspector detects and visualizes customer sentiment, enabling teams to prioritize issues based on emotional impact. The platform creates visually appealing infographics and charts that help identify patterns, trends, and sentiments at a glance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={image5} alt="Sentiment Analysis" className="w-full rounded-lg" />
            <img src={image6} alt="Data Visualizations" className="w-full rounded-lg" />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">X-Score Satisfaction Metric</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            X-Score is Ascribe's proprietary customer experience measurement that combines sentiment and frequency of themes within open-ends to identify key drivers that will increase customer satisfaction and loyalty. It can be derived from any dataset without requiring closed-end variables.
          </p>
          <img src={image7} alt="X-Score Dashboard" className="w-full rounded-lg" />
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Interactive Data Exploration</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            The platform features an interactive interface for easy data exploration with one-click results, powerful filters, co-occurrence reports, trend analysis, and crosstabs. Users can click through to see individual responses and export charts and tables to share insights with stakeholders.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <img src={image8} alt="Interactive Dashboard" className="w-full rounded-lg" />
            <img src={image9} alt="Filter Options" className="w-full rounded-lg" />
            <img src={image10} alt="Data Export" className="w-full rounded-lg" />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Multi-Lingual Capabilities</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            CX Inspector can analyze customer comments in multiple languages and produce reports in the language of your choice. This global capability enables organizations to understand customer feedback across different markets and regions seamlessly.
          </p>
          <img src={image11} alt="Multi-Language Support" className="w-full rounded-lg" />
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Theme Clustering & Pattern Recognition</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            Advanced algorithms cluster related themes and identify patterns across thousands of responses. The system automatically groups similar ideas, making it easy to spot trends and recurring issues that need attention from product development, customer experience, and marketing teams.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={image12} alt="Theme Clustering" className="w-full rounded-lg" />
            <img src={image13} alt="Pattern Recognition" className="w-full rounded-lg" />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Analysis Dashboard</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            The comprehensive dashboard provides instant access to all analysis results, with charts and tables appearing immediately after file upload. Users can monitor key themes, sentiment trends, and satisfaction drivers all in one centralized view.
          </p>
          <img src={image14} alt="Analysis Dashboard" className="w-full rounded-lg" />
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Trend Analysis & Time Comparisons</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            Track how customer sentiment and key themes evolve over time. The platform enables trend reports and historical comparisons, helping organizations measure the impact of improvements and identify emerging issues before they become widespread problems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={image15} alt="Trend Analysis" className="w-full rounded-lg" />
            <img src={image16} alt="Historical Comparison" className="w-full rounded-lg" />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Generative AI Configuration</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            Users have control over the level of generative AI used in their analysis. This flexibility allows organizations to balance speed, depth of insights, and resource usage based on their specific needs and data complexity.
          </p>
          <img src={image17} alt="AI Configuration Options" className="w-full rounded-lg" />
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Enterprise-Scale Processing</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            CX Inspector can analyze thousands (and thousands) of customer responses efficiently. The platform is built to handle large-scale enterprise datasets, making it ideal for organizations collecting extensive customer feedback across multiple touchpoints.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <img src={image18} alt="Large Dataset Processing" className="w-full rounded-lg" />
            <img src={image19} alt="Performance Metrics" className="w-full rounded-lg" />
            <img src={image20} alt="Scale Capabilities" className="w-full rounded-lg" />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Voxco Platform Integration</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            Ascribe CX Inspector is integrated into Voxco's all-in-one multi-channel survey platform. This seamless integration enables organizations to collect feedback and analyze it within a unified system, streamlining the entire customer experience measurement process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={image21} alt="Platform Integration" className="w-full rounded-lg" />
            <img src={image22} alt="Unified Workflow" className="w-full rounded-lg" />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Impact & Results</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            Ascribe CX Inspector has transformed how organizations extract value from open-ended customer feedback. Major enterprises like McGraw Hill use the platform to gain deeper understanding of their customers, enhance survey capabilities, and provide actionable insights to customer experience, product development, sales, and marketing teams—moving far beyond basic word clouds to uncover true strategic intelligence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={image23} alt="Platform Impact" className="w-full rounded-lg" />
            <img src={image24} alt="Customer Success" className="w-full rounded-lg" />
          </div>
        </section>

        <section className="animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-8">Platform Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">1000s</div>
              <p className="text-muted-foreground">Comments analyzed instantly</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Theme extraction accuracy</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <p className="text-muted-foreground">Languages supported</p>
            </div>
          </div>
        </section>

        <section className="space-y-8 text-center">
          <blockquote className="text-2xl font-serif italic text-muted-foreground border-l-4 border-primary pl-8">
            "McGraw Hill collects thousands of customer comments through research, but we were not fully capitalizing on the breadth and depth of information available. With CX Inspector's advanced text analysis capabilities, we can extract emerging themes and sentiment providing valuable knowledge to our teams. Thanks to Ascribe, we have gained a deeper understanding of our customers."
          </blockquote>
          <p className="text-lg text-muted-foreground font-serif">— Pam, Market Research, McGraw Hill</p>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default Ascribe;
