import CaseStudyLayout from "@/components/CaseStudyLayout";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import wireframeImg from "@/assets/concentrix-fc/concentrix-fc-wireframe.png";
import persona1Img from "@/assets/concentrix-fc/concentrix-fc-persona1.png";
import persona2Img from "@/assets/concentrix-fc/concentrix-fc-persona2.png";
import persona3Img from "@/assets/concentrix-fc/concentrix-fc-persona3.png";
import competitorImg from "@/assets/concentrix-fc/concentrix-fc-competitor.png";
import dashboardImg from "@/assets/concentrix-fc/concentrix-fc-dashboard.png";
import heroImage from "@/assets/hero/concentrix-cf-hero.png";

const ConcentrixFC = () => {
  return (
    <CaseStudyLayout
      title="Concentrix FC&C"
      subtitle="Transforming Financial Crimes & Compliance"
      context="Financial institutions face an ever-evolving landscape of regulatory requirements and sophisticated fraud schemes. Traditional compliance tools often struggled to keep pace with the complexity."
      description="I led the design of a comprehensive financial crimes and compliance platform that empowers analysts to detect, investigate, and prevent fraudulent activities with unprecedented efficiency and accuracy."
      disclaimer="To comply with my non-disclosure agreement, I have omitted and obfuscated confidential information in this case study. All information in this case study is my own and does not necessarily reflect the views of Concentrix."
    >
      <div className="space-y-32">
        <section className="space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Internal Business Stakeholder Idea</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed max-w-4xl">
            Initial brainstorming and basic wire framing. Some of these ideas were first given to us from stakeholders
            within the business. I realized quickly that we didn't have any feedback or information from our customers.
            Before any more design or wire framing was done I paused and realigned expectations from the business
            because we needed real user feedback before we could begin.
          </p>
          <img src={wireframeImg} alt="Initial wireframe concepts" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="animate-fade-in -mx-6 md:-mx-12 lg:-mx-[calc((100vw-1024px)/2)] px-6 md:px-12 lg:px-[calc((100vw-1024px)/2)] py-16 bg-muted/100">
          <div className="max-w-7xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">No Skipping Steps</h2>
            <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed max-w-4xl">
              I identified the need to create faster product for agents by conducting user interviews and getting to the
              root cause and identified major pain points. I concluded that better architecture was needed to help
              streamline user experience and implement AI on the backend to glean as much information to pre-fill and
              background check customers. Also, implement an AI assistant for front end agents to call out specific use
              cases and bring attention to problems with staff or productivity. I was able to clearly detail and get to
              the root of what we needed to build.
            </p>
          </div>
        </section>

        <section className="animate-fade-in">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Personas & User Journeys</h2>
              <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
                Here we see 3 personas and user journey flows. We identified a third previously unknown persona and many
                pain points from existing users. This was exciting as we had uncovered a great opportunity to improve
                our product for customers.
              </p>
            </div>

            <div className="relative px-12">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <img
                      src={persona1Img}
                      alt="Agent persona and user journey"
                      className="w-full rounded-lg shadow-elegant"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={persona2Img}
                      alt="Supervisor persona and user journey"
                      className="w-full rounded-lg shadow-elegant"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={persona3Img}
                      alt="Manager persona and user journey"
                      className="w-full rounded-lg shadow-elegant"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>

        <section className="space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Competitor Analysis</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed max-w-4xl">
            Spoke with stakeholders to get an idea of top competitors and researched how they handle certain issues and
            their designs.
          </p>
          <img src={competitorImg} alt="Competitor analysis research" className="w-full rounded-lg shadow-elegant" />
        </section>

        <section className="space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">FigJam Wireframes</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed max-w-4xl">
            This was a quick mockup created in FigJam to show the dashboard view for the supervisor persona. Working
            within the constraints of a previously designed application gave way to less than ideal navigation tabs at
            the top.
          </p>
          <img src={dashboardImg} alt="FigJam dashboard wireframe" className="w-full rounded-lg shadow-elegant" />
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default ConcentrixFC;
