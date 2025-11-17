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
        <section>
          <h2 className="text-3xl font-bold mb-6">My Role</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            As team lead and UX designer, I shaped the overall vision and experience. I facilitated brainstorming sessions, defined user journeys, created wireframes and interactive prototypes, and presented the final concept to leadership. My focus was on showing how AI could enhance coaching in a human-centered, transparent way—supporting agents rather than evaluating them.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Why This Project Mattered</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Call center agents operate under constant pressure—balancing empathy, efficiency, and customer satisfaction in real time. Traditional coaching methods often rely on delayed, manual reviews that fail to capture the nuance of live interactions.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This project showed how AI could close that gap, delivering instant, contextual feedback after each call. By transforming static coaching into a continuous, data-driven experience, it empowered agents to improve at their own pace while reinforcing positive behaviors in the moment.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">The Concept</h2>
          <div className="space-y-6">
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Real-Time Analysis</h3>
              <p className="text-muted-foreground">
                AI analyzes call transcripts, tone, and customer sentiment immediately after each interaction, identifying coaching opportunities in real time.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Personalized Feedback</h3>
              <p className="text-muted-foreground">
                Tailored coaching tips based on individual agent performance patterns, communication style, and areas for improvement.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Positive Reinforcement</h3>
              <p className="text-muted-foreground">
                System highlights what agents did well, not just areas for improvement, building confidence and morale.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Privacy-First Design</h3>
              <p className="text-muted-foreground">
                Transparent about what data is collected and how it's used, with agent control over their learning journey.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Impact & Vision</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Beyond performance metrics, the concept also boosted team morale—turning feedback from something evaluative into something supportive. It demonstrated a future where AI doesn't replace the human connection in customer service, but helps strengthen it.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
              <p className="text-muted-foreground">
                Agents receive coaching after every interaction, accelerating skill development and confidence building.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Scaled Excellence</h3>
              <p className="text-muted-foreground">
                Quality coaching becomes accessible to every agent, regardless of team size or supervisor availability.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Key Insight</h2>
          <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-muted-foreground">
            "AI-powered coaching isn't about replacing human managers—it's about giving every agent access to instant, personalized feedback that helps them excel in their role while maintaining the human connection at the heart of customer service."
          </blockquote>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default HackAThon;
