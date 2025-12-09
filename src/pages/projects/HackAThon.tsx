import CaseStudyLayout from "@/components/CaseStudyLayout";

const HackAThon = () => {
  return (
    <CaseStudyLayout
      title="Hack-a-Thon: AI-Powered Coaching"
      subtitle="Real-Time Agent Performance Enhancement"
      context="Internal Innovation Project"
      description="AI-driven coaching system that provides instant, contextual feedback to call center agents"
      disclaimer="This was an internal innovation project exploring the future of AI-assisted customer service."
    >
      <div className="space-y-12 animate-fade-in">
        <section className="space-y-8 animate-fade-in">
          <div className="w-full rounded-lg overflow-hidden shadow-elegant">
            <div style={{ position: 'relative', paddingBottom: '56.15%', height: 0 }}>
              <iframe
                src="https://www-ccv.adobe.io/v1/player/ccv/7XyArr_dTEF/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
                title="Hack-a-Thon Product Demo"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6">My Role</h2>
          <p>
            As team lead and UX designer, I shaped the overall vision and experience. I facilitated brainstorming
            sessions, defined user journeys, created wireframes and interactive prototypes.
          </p>
        </section>

        <section>
          <h2 className="mb-6">Why This Project Mattered</h2>
          <p className="mb-6">
            Call center agents operate under constant pressure. Traditional coaching methods often rely on delayed,
            manual reviews that fail to capture the nuance of live interactions.
          </p>
          <p>
            This project showed how AI could close that gap, delivering instant, contextual feedback after each call.
          </p>
        </section>

        <section>
          <h2 className="mb-6">The Concept</h2>
          <div className="space-y-6">
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="mb-3">Real-Time Analysis</h3>
              <p>AI analyzes call transcripts, tone, and customer sentiment immediately after each interaction.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="mb-3">Personalized Feedback</h3>
              <p>Tailored coaching tips based on individual agent performance patterns.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="mb-3">Positive Reinforcement</h3>
              <p>System highlights what agents did well, not just areas for improvement.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="mb-3">Privacy-First Design</h3>
              <p>Transparent about what data is collected and how it's used.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6">Projected Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">Real-Time</div>
              <p>Post-call coaching feedback</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p>Agent coaching coverage</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">Winner</div>
              <p>Internal hackathon recognition</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-6">Key Insight</h2>
          <blockquote className="border-l-4 border-primary pl-6 italic">
            "AI-powered coaching isn't about replacing human managers—it's about giving every agent access to instant,
            personalized feedback."
          </blockquote>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default HackAThon;