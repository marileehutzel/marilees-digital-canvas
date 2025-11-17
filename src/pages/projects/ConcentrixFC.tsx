import CaseStudyLayout from "@/components/CaseStudyLayout";

const ConcentrixFC = () => {
  return (
    <CaseStudyLayout
      title="Concentrix FC&C"
      subtitle="Transforming Financial Crimes & Compliance"
      context="Financial institutions face an ever-evolving landscape of regulatory requirements and sophisticated fraud schemes. Traditional compliance tools often struggled to keep pace with the complexity."
      description="I led the design of a comprehensive financial crimes and compliance platform that empowers analysts to detect, investigate, and prevent fraudulent activities with unprecedented efficiency and accuracy."
      disclaimer="To comply with my non-disclosure agreement, I have omitted and obfuscated confidential information in this case study. All information in this case study is my own and does not necessarily reflect the views of Concentrix."
    >
      <div className="space-y-16">
        <div className="text-center space-y-6 animate-fade-in">
          <h3 className="text-3xl font-bold text-foreground">The Challenge</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-serif">
            Compliance analysts were drowning in disparate data sources and
            manual processes. The challenge was to create a unified platform
            that could surface critical insights while maintaining the
            flexibility required for complex investigations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
          <div className="bg-card p-8 rounded-2xl shadow-card">
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Key Features
            </h4>
            <ul className="space-y-3 text-muted-foreground font-serif">
              <li>• Real-time transaction monitoring</li>
              <li>• Advanced pattern recognition</li>
              <li>• Automated risk scoring</li>
              <li>• Comprehensive audit trails</li>
              <li>• Collaborative investigation tools</li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-card">
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Impact
            </h4>
            <ul className="space-y-3 text-muted-foreground font-serif">
              <li>• 60% reduction in false positives</li>
              <li>• 3x faster case resolution</li>
              <li>• 40% improvement in detection accuracy</li>
              <li>• Seamless regulatory reporting</li>
            </ul>
          </div>
        </div>

        <div className="text-center space-y-6 animate-fade-in">
          <h3 className="text-3xl font-bold text-foreground">Design Process</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-serif">
            Through extensive user research with compliance analysts and
            investigators, I identified pain points in their daily workflows.
            The design focused on progressive disclosure of complex data,
            contextual actions, and efficient keyboard navigation for power
            users.
          </p>
        </div>
      </div>
    </CaseStudyLayout>
  );
};

export default ConcentrixFC;
